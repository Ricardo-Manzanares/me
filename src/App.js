import React from 'react';

import About from './components/About';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';

import { socialLinks, config, componentAnimationStyle } from './Shared'

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('Home');
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const pages = ['Home', 'About', 'Projects', 'Articles', 'Contact'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (page) => {
    if (page === currentPage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 300); // Match CSS transition duration
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Articles':
        return <Articles />;
      case 'Home':
        default:
        return <Home />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      <style>{componentAnimationStyle}</style>
      
      {/* Header & Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigateTo('Home')}>
              {currentPage !== 'Home' && (
                <img 
                  src={ config.imageProfile} 
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover border-2 border-blue-400"
                />
              )}
            </div>
            {/* Desktop Menu - Hidden on mobile, visible on md screens and up */}
              <div className="hidden md:flex items-center space-x-8">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => navigateTo(page)}
                    className={`text-lg font-medium transition-colors duration-300 ${
                      currentPage === page ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                    }`}
                  >
                    {page}
                  </button>
                ))}
            </div>
            
            {/* Hamburger Menu Button - Visible only on mobile */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-gray-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
        </nav>
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gray-800/95 backdrop-blur-sm px-6 py-4 shadow-lg">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => {
                  navigateTo(page);
                  setMobileMenuOpen(false); // Close menu after selection
                }}
                className={`block w-full text-left py-2 text-lg font-medium transition-colors duration-300 ${
                  currentPage === page ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-12 flex flex-col justify-center">
        <div className={`page-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {renderPage()}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              {social.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Ricardo Manzanares Camargo. All Rights Reserved.</p>
      </footer>
    </div>
  );
}