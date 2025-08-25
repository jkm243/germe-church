import React, { useState, useEffect } from 'react'
import { MessageSquare, Check, X, Eye } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface Comment {
  id: string
  content: string
  user_name: string
  created_at: string
  approved: boolean
  post_id: string
  blog_posts: {
    title: string
  }
}

const CommentManager: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('pending')

  useEffect(() => {
    fetchComments()
  }, [filter])

  const fetchComments = async () => {
    try {
      let query = supabase
        .from('comments')
        .select(`
          *,
          blog_posts (title)
        `)
        .order('created_at', { ascending: false })

      if (filter === 'pending') {
        query = query.eq('approved', false)
      } else if (filter === 'approved') {
        query = query.eq('approved', true)
      }

      const { data, error } = await query

      if (error) throw error
      setComments(data || [])
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApproveComment = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('comments')
        .update({ approved: true })
        .eq('id', commentId)

      if (error) throw error
      
      setComments(comments.map(comment => 
        comment.id === commentId ? { ...comment, approved: true } : comment
      ))
    } catch (error) {
      console.error('Error approving comment:', error)
    }
  }

  const handleRejectComment = async (commentId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) return

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId)

      if (error) throw error
      
      setComments(comments.filter(comment => comment.id !== commentId))
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  const pendingCount = comments.filter(c => !c.approved).length

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="text-deep-blue-500 mr-3" size={24} />
            <h2 className="text-xl font-medium text-slate-800">Gestion des Commentaires</h2>
            {pendingCount > 0 && (
              <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                {pendingCount} en attente
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('pending')}
              className={`px-3 py-2 text-sm rounded-lg ${
                filter === 'pending' 
                  ? 'bg-deep-blue-500 text-white' 
                  : 'text-slate-600 hover:bg-gray-100'
              }`}
            >
              En attente
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-3 py-2 text-sm rounded-lg ${
                filter === 'approved' 
                  ? 'bg-deep-blue-500 text-white' 
                  : 'text-slate-600 hover:bg-gray-100'
              }`}
            >
              Approuvés
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 text-sm rounded-lg ${
                filter === 'all' 
                  ? 'bg-deep-blue-500 text-white' 
                  : 'text-slate-600 hover:bg-gray-100'
              }`}
            >
              Tous
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-blue-500 mx-auto"></div>
            <p className="text-slate-500 mt-2">Chargement...</p>
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-500">Aucun commentaire trouvé.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-medium text-slate-800">{comment.user_name}</h4>
                    <p className="text-sm text-slate-500">
                      Sur l'article: {comment.blog_posts?.title}
                    </p>
                    <p className="text-sm text-slate-500">
                      {new Date(comment.created_at).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      comment.approved 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {comment.approved ? 'Approuvé' : 'En attente'}
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4">{comment.content}</p>
                
                {!comment.approved && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleApproveComment(comment.id)}
                      className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      <Check size={14} className="mr-1" />
                      Approuver
                    </button>
                    <button
                      onClick={() => handleRejectComment(comment.id)}
                      className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      <X size={14} className="mr-1" />
                      Supprimer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentManager