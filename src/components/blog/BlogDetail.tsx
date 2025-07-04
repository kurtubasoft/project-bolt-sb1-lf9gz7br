import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Clock, User } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogDetailProps {
  post: BlogPost;
  onNavigate: (page: string) => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="relative h-64 md:h-96">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-200 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  {post.author && (
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                  )}
                  {post.readTime && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              {post.content && (
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}
              
              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Mesaicepte ile Tanışın
                </h3>
                <p className="text-blue-800 mb-4">
                  Modern PDKS çözümlerimiz hakkında daha fazla bilgi almak ve ücretsiz demo talep etmek için bizimle iletişime geçin.
                </p>
                <button 
                  onClick={() => onNavigate('home')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Teklif Al
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-8">
          <button 
            onClick={() => onNavigate('blog')}
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Blog'a Geri Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;