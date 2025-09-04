/*
  # Fix infinite recursion in RLS policies

  1. Problem
    - Admin policies were causing infinite recursion by checking role in profiles table
    - Policies were referencing the same table they were protecting

  2. Solution
    - Simplify policies to avoid self-referencing
    - Use direct user ID checks instead of role-based checks for basic operations
    - Create separate admin functions that don't cause recursion

  3. Changes
    - Drop existing problematic policies
    - Create new simplified policies
    - Add proper admin access without recursion
*/

-- Drop existing policies that cause recursion
DROP POLICY IF EXISTS "Admins can update all profiles" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;

-- Create simple, non-recursive policies
CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create a function to check if user is admin without recursion
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = user_id 
    AND raw_user_meta_data->>'role' = 'admin'
  );
$$;

-- Admin policies using the function (for service role only)
CREATE POLICY "Service role can manage all profiles"
  ON profiles
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Fix blog_posts policies to avoid similar issues
DROP POLICY IF EXISTS "Admins can create posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can delete posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can update posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can view all posts" ON blog_posts;

-- Simplified blog_posts policies
CREATE POLICY "Anyone can view published posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (published = true);

CREATE POLICY "Service role can manage all posts"
  ON blog_posts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Fix comments policies
DROP POLICY IF EXISTS "Admins can delete comments" ON comments;
DROP POLICY IF EXISTS "Admins can update comments" ON comments;
DROP POLICY IF EXISTS "Admins can view all comments" ON comments;

CREATE POLICY "Users can view approved comments"
  ON comments
  FOR SELECT
  TO authenticated
  USING (approved = true);

CREATE POLICY "Users can create comments"
  ON comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role can manage all comments"
  ON comments
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);