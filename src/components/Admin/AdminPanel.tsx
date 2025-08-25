import React, { useState } from 'react'
import { Settings, FileText, Users, MessageSquare, Plus, LogOut } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import PostManager from './PostManager'
import UserManager from './UserManager'
import CommentManager from './CommentManager'

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('posts')
  const { signOut, profile } = useAuth()

  const tabs = [
    { id: 'posts', label: 'Articles', icon: FileText },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'comments', label: 'Commentaires', icon: MessageSquare }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'posts':
        return <PostManager />
      case 'users':
        return <UserManager />
      case 'comments':
        return <CommentManager />
      default:
        return <PostManager />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Settings className="text-deep-blue-500 mr-3" size={24} />
              <h1 className="text-2xl font-light text-slate-800">Panel d'Administration</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-slate-600">Bonjour, {profile?.full_name || profile?.email}</span>
              <button
                onClick={signOut}
                className="flex items-center text-slate-600 hover:text-red-600 transition-colors"
              >
                <LogOut size={16} className="mr-1" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg border border-gray-200 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? 'bg-deep-blue-50 text-deep-blue-600 border-l-4 border-deep-blue-500'
                            : 'text-slate-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon size={20} className="mr-3" />
                        {tab.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel