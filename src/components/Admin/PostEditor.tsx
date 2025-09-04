import React, { useState, useEffect } from 'react'
import { Save, X, Eye } from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'

interface Post {
  id?: string
  title: string
  content: string
  excerpt: string
  category: string
  featured: boolean
  published: boolean
}

interface PostEditorProps {
  post?: Post | null
  onClose: () => void
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onClose }) => {
  const [formData, setFormData] = useState<Post>({
    title: '',
    content: '',
    excerpt: '',
    category: 'enseignement',
    featured: false,
    published: false
  })
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(false)
  const { user, profile } = useAuth()

  const categories = [
    { value: 'enseignement', label: 'Enseignement' },
    { value: 'temoignage', label: 'Témoignage' },
    { value: 'meditation', label: 'Méditation' },
    { value: 'actualites', label: 'Actualités' }
  ]

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        content: post.content || '',
        excerpt: post.excerpt,
        category: post.category,
        featured: post.featured,
        published: post.published
      })
    }
  }, [post])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !profile) return

    setLoading(true)
    try {
      const postData = {
        ...formData,
        author_id: user.id,
        author_name: profile.full_name || profile.email,
        updated_at: new Date().toISOString()
      }

      if (post?.id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id)

        if (error) throw error
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            ...postData,
            created_at: new Date().toISOString()
          })

        if (error) throw error
      }

      onClose()
    } catch (error) {
      console.error('Error saving post:', error)
      alert('Erreur lors de la sauvegarde de l\'article.')
    } finally {
      setLoading(false)
    }
  }

  if (preview) {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-slate-800">Aperçu de l'article</h2>
            <button
              onClick={() => setPreview(false)}
              className="text-slate-600 hover:text-slate-800"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="p-6">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-3xl font-light text-slate-800 mb-4">{formData.title}</h1>
            <p className="text-slate-600 mb-6">{formData.excerpt}</p>
            <div 
              className="text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: formData.content.replace(/\n/g, '<br />') }}
            />
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-slate-800">
            {post ? 'Modifier l\'article' : 'Nouvel article'}
          </h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setPreview(true)}
              className="flex items-center text-slate-600 hover:text-slate-800 px-3 py-2 border border-gray-200 rounded-lg"
            >
              <Eye size={16} className="mr-2" />
              Aperçu
            </button>
            <button
              onClick={onClose}
              className="text-slate-600 hover:text-slate-800"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Titre de l'article
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-church-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Catégorie
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-church-blue focus:outline-none"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Résumé
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-church-blue focus:outline-none resize-vertical"
            placeholder="Résumé de l'article..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Contenu
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            rows={15}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-church-blue focus:outline-none resize-vertical"
            placeholder="Contenu de l'article..."
          />
        </div>

        <div className="flex items-center space-x-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-sm text-slate-700">Article à la une</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-sm text-slate-700">Publier immédiatement</span>
          </label>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-gray-200 text-slate-600 rounded-lg hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center bg-church-blue hover:bg-church-blue/90 text-white px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            <Save size={16} className="mr-2" />
            {loading ? 'Sauvegarde...' : 'Sauvegarder'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostEditor