import React, { useState, useEffect } from 'react'
import { MessageCircle, Send, User } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'

interface Comment {
  id: string
  content: string
  user_name: string
  created_at: string
  approved: boolean
}

interface CommentSectionProps {
  postId: string
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)
  const { user, profile } = useAuth()

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .eq('approved', true)
        .order('created_at', { ascending: true })

      if (error) throw error
      setComments(data || [])
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !user || !profile) return

    setLoading(true)
    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          post_id: postId,
          user_id: user.id,
          user_name: profile.full_name || profile.email,
          content: newComment.trim(),
          approved: false // Comments need approval
        })

      if (error) throw error
      
      setNewComment('')
      alert('Votre commentaire a été soumis et sera publié après modération.')
    } catch (error) {
      console.error('Error submitting comment:', error)
      alert('Erreur lors de l\'envoi du commentaire.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-t border-gray-100 pt-12">
      <div className="flex items-center mb-8">
        <MessageCircle className="text-vivid-green-500 mr-3" size={24} />
        <h3 className="text-2xl font-light text-slate-800">
          Commentaires ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-12">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Partagez votre réflexion..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-deep-blue-500 focus:outline-none transition-colors resize-vertical"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading || !newComment.trim()}
          className="flex items-center bg-deep-blue-500 hover:bg-deep-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          <Send size={16} className="mr-2" />
          {loading ? 'Envoi...' : 'Publier le commentaire'}
        </button>
        <p className="text-sm text-slate-500 mt-2">
          Votre commentaire sera publié après modération.
        </p>
      </form>

      {/* Comments List */}
      <div className="space-y-8">
        {comments.length === 0 ? (
          <p className="text-slate-500 text-center py-8">
            Aucun commentaire pour le moment. Soyez le premier à partager votre réflexion !
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-l-4 border-vivid-green-500 pl-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                  <User size={16} className="text-slate-500" />
                </div>
                <div>
                  <p className="font-medium text-slate-800">{comment.user_name}</p>
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
              </div>
              <p className="text-slate-700 leading-relaxed">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CommentSection