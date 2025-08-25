import React, { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import PostEditor from './PostEditor'

interface Post {
  id: string
  title: string
  excerpt: string
  category: string
  author_name: string
  published: boolean
  featured: boolean
  created_at: string
}

const PostManager: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const { profile } = useAuth()

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, category, author_name, published, featured, created_at')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeletePost = async (postId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId)

      if (error) throw error
      setPosts(posts.filter(post => post.id !== postId))
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Erreur lors de la suppression de l\'article.')
    }
  }

  const handleTogglePublished = async (postId: string, published: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published: !published })
        .eq('id', postId)

      if (error) throw error
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, published: !published } : post
      ))
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  const handleEditPost = (post: Post) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleCloseEditor = () => {
    setShowEditor(false)
    setEditingPost(null)
    fetchPosts()
  }

  if (showEditor) {
    return (
      <PostEditor
        post={editingPost}
        onClose={handleCloseEditor}
      />
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-slate-800">Gestion des Articles</h2>
          <button
            onClick={() => setShowEditor(true)}
            className="flex items-center bg-deep-blue-500 hover:bg-deep-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Nouvel Article
          </button>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-blue-500 mx-auto"></div>
            <p className="text-slate-500 mt-2">Chargement...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-500">Aucun article trouvé.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Titre</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Catégorie</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Auteur</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Statut</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <h3 className="font-medium text-slate-800">{post.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{post.excerpt.substring(0, 100)}...</p>
                        {post.featured && (
                          <span className="inline-block bg-vivid-green-100 text-vivid-green-800 text-xs px-2 py-1 rounded-full mt-1">
                            À la une
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{post.category}</td>
                    <td className="py-4 px-4 text-slate-600">{post.author_name}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        post.published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {post.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {new Date(post.created_at).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="text-slate-600 hover:text-deep-blue-600 p-1"
                          title="Modifier"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleTogglePublished(post.id, post.published)}
                          className="text-slate-600 hover:text-vivid-green-600 p-1"
                          title={post.published ? 'Dépublier' : 'Publier'}
                        >
                          {post.published ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="text-slate-600 hover:text-red-600 p-1"
                          title="Supprimer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostManager