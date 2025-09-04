import React, { useState, useEffect } from 'react';
import { Calendar, User, Tag, Search, Filter, LogIn } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './Auth/LoginModal';
import BlogPost from './Blog/BlogPost';

interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author_name: string;
  created_at: string;
  featured: boolean;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const { user } = useAuth();

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'enseignement', name: 'Enseignement' },
    { id: 'temoignage', name: 'Témoignage' },
    { id: 'meditation', name: 'Méditation' },
    { id: 'actualites', name: 'Actualités' }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, category, author_name, created_at, featured')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReadPost = (postId: string) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    setSelectedPostId(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPostId(null);
  };

  if (selectedPostId && user) {
    return <BlogPost postId={selectedPostId} onBack={handleBackToBlog} />;
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-church-green mx-auto mb-6"></div>
          <h2 className="text-4xl font-light text-church-blue mb-6">Blog & Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos articles édifiants, réflexions spirituelles et enseignements 
            pour nourrir votre foi et approfondir votre relation avec Dieu.
          </p>
          {!user && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <LogIn className="text-deep-blue-500 mr-2" size={24} />
                <h3 className="text-lg font-medium text-deep-blue-500">Connexion requise</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Pour lire nos articles complets, veuillez vous connecter ou créer un compte.
              </p>
              <button
                onClick={() => setShowLoginModal(true)}
                className="bg-church-blue text-white px-6 py-3 rounded-lg hover:bg-church-blue/90 transition-colors"
              >
                Se connecter / S'inscrire
              </button>
            </div>
          )}
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-church-green/20 focus:border-church-green transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-church-green/20 focus:border-church-green transition-colors"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-church-blue mx-auto"></div>
            <p className="text-gray-500 mt-4">Chargement des articles...</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gradient-to-br from-church-blue/10 to-church-green/10 flex items-center justify-center">
                  <div className="text-deep-blue-500/30">
                    <Tag size={48} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.created_at).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author_name}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-church-green" />
                    <span className="text-sm font-medium text-church-green capitalize">{post.category}</span>
                    {post.featured && (
                      <span className="bg-church-green/10 text-church-green text-xs px-2 py-1 rounded-full ml-2">
                        À la une
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-medium text-church-blue mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button
                    onClick={() => handleReadPost(post.id)}
                    className="text-church-blue hover:text-church-green font-medium transition-colors duration-200"
                  >
                    {user ? 'Lire la suite →' : 'Se connecter pour lire →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun article trouvé pour votre recherche.</p>
          </div>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </section>
  );
};

export default Blog;