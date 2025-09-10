import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          category: string
          author_id: string
          author_name: string
          featured: boolean
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          category: string
          author_id: string
          author_name: string
          featured?: boolean
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          category?: string
          author_id?: string
          author_name?: string
          featured?: boolean
          published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          post_id: string
          user_id: string
          user_name: string
          content: string
          approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          user_id: string
          user_name: string
          content: string
          approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          user_id?: string
          user_name?: string
          content?: string
          approved?: boolean
          created_at?: string
        }
      }
    }
  }
}