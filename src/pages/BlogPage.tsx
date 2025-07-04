import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog & Haberler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PDKS sistemleri, personel yönetimi ve teknoloji dünyasından en güncel haberler ve makaleler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;