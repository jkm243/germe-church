import React from 'react';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';

interface BlogArticleProps {
  article: {
    id: number;
    title: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    imageUrl: string;
    content: Array<{
      type: 'paragraph' | 'heading' | 'quote' | 'scripture';
      text: string;
      reference?: string;
    }>;
  };
  onBack: () => void;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="group flex items-center text-slate-600 hover:text-vivid-green-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux articles
        </button>

        <article>
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-vivid-green-50 text-vivid-green-600 text-xs font-medium tracking-widest uppercase">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-vivid-green-600 hover:text-vivid-green-600 transition-colors">
                <Share2 className="w-4 h-4" />
                Partager
              </button>
            </div>

            <div className="w-full h-96 overflow-hidden rounded-2xl mb-12">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-light text-slate-800 mt-12 mb-6"
                    >
                      {block.text}
                    </h2>
                  );

                case 'paragraph':
                  return (
                    <p
                      key={index}
                      className="text-slate-600 font-light leading-relaxed mb-6 text-lg"
                    >
                      {block.text}
                    </p>
                  );

                case 'quote':
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-vivid-green-600 pl-6 py-4 my-8 bg-vivid-green-50"
                    >
                      <p className="text-slate-700 font-light italic text-lg leading-relaxed">
                        {block.text}
                      </p>
                    </blockquote>
                  );

                case 'scripture':
                  return (
                    <div
                      key={index}
                      className="my-8 p-6 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg"
                    >
                      <p className="text-slate-700 font-light leading-relaxed mb-2 text-lg">
                        {block.text}
                      </p>
                      {block.reference && (
                        <p className="text-amber-700 font-medium text-sm">
                          — {block.reference}
                        </p>
                      )}
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-2">Auteur</p>
                <p className="text-lg font-medium text-slate-800">{article.author}</p>
              </div>
              <button
                onClick={onBack}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-medium transition-colors"
              >
                Voir plus d'articles
              </button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogArticle;
