/*
  # Fix server error 500 - RLS policies correction

  1. Problem
    - Server error 500 likely caused by RLS policy issues
    - Need to ensure proper policies without recursion
    - Fix any remaining policy conflicts

  2. Solution
    - Drop all existing problematic policies
    - Create simple, non-recursive policies
    - Ensure proper access control without infinite loops
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Service role can manage all profiles" ON profiles;
DROP POLICY IF EXISTS "Anyone can view published posts" ON blog_posts;
DROP POLICY IF EXISTS "Service role can manage all posts" ON blog_posts;
DROP POLICY IF EXISTS "Users can view approved comments" ON comments;
DROP POLICY IF EXISTS "Users can create comments" ON comments;
DROP POLICY IF EXISTS "Service role can manage all comments" ON comments;

-- Create simple policies for profiles
CREATE POLICY "Enable read access for users to own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Enable update for users to own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Enable insert for users to own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create policies for blog_posts
CREATE POLICY "Enable read access for published posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (published = true);

-- Create policies for comments
CREATE POLICY "Enable read access for approved comments"
  ON comments FOR SELECT
  TO authenticated
  USING (approved = true);

CREATE POLICY "Enable insert for authenticated users on comments"
  ON comments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Ensure RLS is enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Create a simple function to check admin status without recursion
CREATE OR REPLACE FUNCTION public.is_admin_user(user_id uuid)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT COALESCE(
    (SELECT role = 'admin' FROM public.profiles WHERE id = user_id LIMIT 1),
    false
  );
$$;