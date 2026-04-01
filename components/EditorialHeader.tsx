"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EditorialHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'ivory' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className={`editorial-header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="header-content">
        <button className="menu-trigger pulse-on-click" aria-label="메뉴">
          <span className="bar"></span>
          <span className="bar-short"></span>
        </button>
        <Link href="/" className="logo-link accent-text gold-gradient-text">
          K-DANCE PRIME
        </Link>
        <div className="header-right">
           <button 
             onClick={toggleTheme} 
             className="theme-toggle pulse-on-click label-caps"
           >
             {theme === 'dark' ? 'Ivory Zen' : 'Obsidian Luxe'}
           </button>
           <span className="prime-badge">V2.2</span>
        </div>
      </div>

      <style jsx>{`
        .editorial-header {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 2.5rem 0; transition: 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .editorial-header.scrolled { 
          padding: 1.25rem 0; 
          backdrop-filter: blur(24px); 
          background: var(--glass-bg); 
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .header-content { display: flex; justify-content: space-between; align-items: center; padding: 0 1.5rem; }
        .logo-link { font-size: 0.95rem; font-weight: 800; letter-spacing: 0.25em; text-decoration: none; font-family: var(--font-accent); }
        .menu-trigger { background: none; border: none; display: flex; flex-direction: column; gap: 6px; cursor: pointer; }
        .menu-trigger .bar { width: 24px; height: 1.5px; background: var(--foreground); transition: 0.4s; }
        .menu-trigger .bar-short { width: 16px; height: 1.5px; background: var(--foreground); opacity: 0.6; transition: 0.4s; }
        
        .header-right { display: flex; align-items: center; gap: 1.5rem; }
        .theme-toggle {
          background: var(--surface-ghost); border: 1px solid rgba(255,255,255,0.1);
          color: var(--foreground); padding: 0.5rem 1rem; border-radius: 99px;
          font-size: 0.6rem; cursor: pointer; transition: 0.4s;
          backdrop-filter: blur(10px);
        }
        .theme-toggle:hover { background: var(--surface-2); border-color: var(--primary); }

        .gold-gradient-text {
          background: linear-gradient(135deg, #F2CA50 0%, #D4AF37 50%, #B8860B 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .editorial-header { padding: 1.5rem 0; }
          .editorial-header.scrolled { padding: 1rem 0; }
          .theme-toggle { padding: 0.4rem 0.8rem; }
        }
      `}</style>
    </header>
  );
}
