import React, { useState, useEffect } from 'react'
import { Calendar, User, MessageCircle, ArrowLeft } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import CommentSection from './CommentSection'

interface BlogPostProps {
  postId: string
  onBack: () => void
}

interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  category: string
  author_name: string
  created_at: string
  updated_at: string
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack }) => {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  useEffect(() => {
    fetchPost()
  }, [postId])

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .eq('published', true)
        .single()

      if (error) throw error
      setPost(data)
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-light text-slate-800 mb-4">Article non trouvé</h1>
          <button
            onClick={onBack}
            className="text-deep-blue-500 hover:text-deep-blue-600 font-medium"
          >
            Retour au blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center text-church-blue hover:text-church-green mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour au blog
        </button>

        <article className="prose prose-lg max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl font-light text-slate-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-slate-500 text-sm mb-8">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author_name}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.created_at).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
            
            <div className="w-full h-px bg-vivid-green-500 mb-8"></div>
            <div className="w-full h-px bg-church-green mb-8"></div>
          </header>

          <div 
            className="text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </article>

        {user && (
          <div className="mt-16">
            <CommentSection postId={postId} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPost