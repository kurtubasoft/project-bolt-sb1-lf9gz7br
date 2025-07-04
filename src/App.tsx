import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './components/blog/BlogDetail';
import { blogPosts } from './data/blogPosts';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    if (currentPage.startsWith('blog-')) {
      const postId = parseInt(currentPage.split('-')[1]);
      const post = blogPosts.find(p => p.id === postId);
      if (post) {
        return <BlogDetail post={post} onNavigate={navigateTo} />;
      }
    }

    switch (currentPage) {
      case 'blog':
        return <BlogPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      
      {renderCurrentPage()}
      
      <Footer onNavigate={navigateTo} />
      <WhatsAppButton />
    </div>
  );
}

export default App;