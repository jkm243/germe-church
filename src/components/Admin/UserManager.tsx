import React, { useState, useEffect } from 'react'
import { Users, Shield, User } from 'lucide-react'
import { supabase } from '../../lib/supabase'

interface UserProfile {
  id: string
  email: string
  full_name: string | null
  role: 'user' | 'admin'
  created_at: string
}

const UserManager: React.FC = () => {
  const [users, setUsers] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setUsers(data || [])
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleRoleChange = async (userId: string, newRole: 'user' | 'admin') => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)

      if (error) throw error
      
      setUsers(users.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ))
    } catch (error) {
      console.error('Error updating user role:', error)
      alert('Erreur lors de la mise à jour du rôle.')
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <Users className="text-deep-blue-500 mr-3" size={24} />
          <h2 className="text-xl font-medium text-slate-800">Gestion des Utilisateurs</h2>
        </div>
      </div>

      <div className="p-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-deep-blue-500 mx-auto"></div>
            <p className="text-slate-500 mt-2">Chargement...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-slate-500">Aucun utilisateur trouvé.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Utilisateur</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Email</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Rôle</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Date d'inscription</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-3">
                          <User size={16} className="text-slate-500" />
                        </div>
                        <span className="font-medium text-slate-800">
                          {user.full_name || 'Utilisateur'}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{user.email}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                        user.role === 'admin' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role === 'admin' ? (
                          <>
                            <Shield size={12} className="mr-1" />
                            Administrateur
                          </>
                        ) : (
                          <>
                            <User size={12} className="mr-1" />
                            Utilisateur
                          </>
                        )}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {new Date(user.created_at).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="py-4 px-4">
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value as 'user' | 'admin')}
                        className="text-sm border border-gray-200 rounded px-2 py-1 focus:border-deep-blue-500 focus:outline-none"
                      >
                        <option value="user">Utilisateur</option>
                        <option value="admin">Administrateur</option>
                      </select>
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

export default UserManager