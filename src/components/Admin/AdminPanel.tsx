import React, { useState } from 'react'
import { Settings, FileText, Users, MessageSquare, Plus, LogOut, ArrowLeft } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'
import PostManager from './PostManager'
import PostEditor from './PostEditor'
import UserManager from './UserManager'
import CommentManager from './CommentManager'

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'posts' | 'editor' | 'users' | 'comments'>('posts')
  const [editingPost, setEditingPost] = useState<any>(null)
  const { signOut, profile } = useAuth()
  const { isAdmin, loading } = useAuth()
  const [isCheckingAdmin, setIsCheckingAdmin] = useState(true)
  const [hasAdminAccess, setHasAdminAccess] = useState(false)

  React.useEffect(() => {
    const checkAdminAccess = async () => {
      if (!loading && isAdmin) {
        try {
          // Test admin access by trying to fetch all profiles
          const { data, error } = await supabase
            .from('profiles')
            .select('id, role')
            .limit(1)

          if (!error) {
            setHasAdminAccess(true)
          }
        } catch (error) {
          console.error('Admin access check failed:', error)
        }
      }
      setIsCheckingAdmin(false)
    }

    checkAdminAccess()
  }, [isAdmin, loading])

  if (loading || isCheckingAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-church-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification des permissions...</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'posts', label: 'Articles', icon: FileText },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'comments', label: 'Commentaires', icon: MessageSquare }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <PostManager />
      case 'editor':
        return <PostEditor />
      case 'users':
        return <UserManager />
      case 'comments':
        return <CommentManager />
      default:
        return <PostManager />
    }
  }

  if (!profile || profile.role !== 'admin' || !isAdmin || !hasAdminAccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ArrowLeft className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Accès Refusé</h1>
          <p className="text-gray-600 mb-6">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-4 px-6 py-2 bg-church-blue text-white rounded-lg hover:bg-church-blue/90 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center text-gray-600 hover:text-deep-blue-500 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Retour au site
              </button>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Dashboard Administrateur</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => {
                setActiveTab('posts')
                setEditingPost(null)
              }}
              className={`flex items-center px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'posts'
                  ? 'text-church-blue border-church-blue'
                  : 'text-gray-600 hover:text-church-blue border-transparent'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Articles
            </button>
            
            <button
              onClick={() => {
                setActiveTab('editor')
                setEditingPost(null)
              }}
              className={`flex items-center px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'editor'
                  ? 'text-church-green border-church-green'
                  : 'text-gray-600 hover:text-church-green border-transparent'
              }`}
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouvel Article
            </button>
            
            <button
              onClick={() => {
                setActiveTab('users')
                setEditingPost(null)
              }}
              className={`flex items-center px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'users'
                  ? 'text-church-blue border-church-blue'
                  : 'text-gray-600 hover:text-church-blue border-transparent'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Utilisateurs
            </button>
            
            <button
              onClick={() => {
                setActiveTab('comments')
                setEditingPost(null)
              }}
              className={`flex items-center px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === 'comments'
                  ? 'text-church-blue border-church-blue'
                  : 'text-gray-600 hover:text-church-blue border-transparent'
              }`}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Commentaires
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AdminPanel