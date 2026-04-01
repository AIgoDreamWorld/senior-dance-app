"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EditorialHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`editorial-header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="header-content">
        <button className="menu-trigger pulse-on-click" aria-label="Menu">
          <span className="bar"></span>
          <span className="bar-short"></span>
        </button>
        <Link href="/" className="logo-link accent-text gold-gradient-text">
          K-DANCE PRIME
        </Link>
        <div className="header-right">
           <span className="prime-badge">V2.2</span>
        </div>
      </div>

      <style jsx>{`
        .editorial-header {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 2rem 0; transition: var(--transition-slow);
        }
        .editorial-header.scrolled { 
          padding: 1rem 0; 
          backdrop-filter: blur(24px); 
          background: rgba(13,14,16,0.8); 
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .header-content { display: flex; justify-content: space-between; align-items: center; padding: 0 1.5rem; }
        .logo-link { font-size: 0.9rem; font-weight: 800; letter-spacing: 0.2em; text-decoration: none; font-family: var(--font-accent); }
        .menu-trigger { background: none; border: none; display: flex; flex-direction: column; gap: 6px; cursor: pointer; }
        .menu-trigger .bar { width: 24px; height: 1.5px; background: #fff; }
        .menu-trigger .bar-short { width: 16px; height: 1.5px; background: #fff; opacity: 0.6; }
        .prime-badge {
          font-family: var(--font-body); font-size: 0.55rem; font-weight: 900;
          background: var(--primary); color: var(--on-primary);
          padding: 0.2rem 0.45rem; letter-spacing: 0.05em; border-radius: 2px;
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #F2CA50 0%, #D4AF37 50%, #B8860B 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes stitchPulse {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(0.97); filter: brightness(1.2); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        .pulse-on-click:active {
          animation: stitchPulse 0.4s var(--ease-stitch);
        }

        @media (max-width: 768px) {
          .editorial-header { padding: 1.5rem 0; }
          .editorial-header.scrolled { padding: 0.75rem 0; }
        }
      `}</style>
    </header>
  );
}
