import React, { useEffect, useRef } from 'react';
import { articles, scrollAnimationStyles } from '../Shared'

const Articles = () => {
  const articleRefs = useRef([]);
  
  useEffect(() => {
    // Set up intersection observer to detect when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible
    
    // Check which elements are initially visible and observe the rest
    articleRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const isInitiallyVisible = rect.top < window.innerHeight;
        
        if (isInitiallyVisible) {
          ref.classList.add('initial-visible');
        } else {
          observer.observe(ref);
        }
      }
    });
    
    return () => {
      articleRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <style>{scrollAnimationStyles}</style>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        <span className="text-blue-400">My</span> Articles
      </h2>
       <p className="text-center text-gray-400 mb-12">Articles of interest that help you in your daily life..</p>
      <ul className="list-inside text-gray-300 space-y-4">
        {articles.map((article, index) => (
          <li 
            key={index} 
            ref={el => articleRefs.current[index] = el}
            className="scroll-animated bg-gray-800 p-4 rounded-lg shadow hover:shadow-blue-400/20 transition-shadow duration-300"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-center">
              <strong>{article.title}</strong>
              <strong className="text-gray-400 text-sm">{article.date}</strong>
            </div>
            <p className="my-3">{article.summary}</p>
            <strong>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Read more
              </a>
            </strong>
            <div className="mt-3">
              <span className="text-blue-400">Tags</span> : {article.tags.join(', ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;