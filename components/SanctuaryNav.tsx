"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SanctuaryNav() {
  const pathname = usePathname();

  const navItems = [
    { 
      href: '/', 
      label: '홈', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    { 
      href: '/community', 
      label: '피드', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="7" x="3" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="3" rx="1" />
          <rect width="7" height="7" x="14" y="14" rx="1" />
          <rect width="7" height="7" x="3" y="14" rx="1" />
        </svg>
      )
    },
    { 
      href: '/shop', 
      label: '쇼핑', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    },
    { 
      href: '/profile', 
      label: '마이', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    }
  ];

  return (
    <nav className="sanctuary-nav">
      <div className="nav-pill glass">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`nav-link ${pathname === item.href ? 'active' : ''}`}
          >
            <div className="icon-wrapper">
              {item.icon}
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .sanctuary-nav {
          position: fixed; bottom: 2rem; left: 0; width: 100%; z-index: 2000;
          display: flex; justify-content: center; padding: 0 1.5rem;
          pointer-events: none;
        }
        .nav-pill {
          display: flex; justify-content: space-between; align-items: center;
          width: 100%; max-width: 320px; height: 64px; border-radius: 32px;
          border: 1px solid rgba(255,255,255,0.08);
          pointer-events: auto;
          background: var(--glass-bg);
          backdrop-filter: blur(50px) saturate(210%);
          transition: all 0.8s var(--ease-stitch);
          padding: 0 1.5rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .nav-link { 
          display: flex; flex-direction: column; align-items: center; 
          justify-content: center;
          width: 48px; height: 48px;
          opacity: 0.25; transition: 0.5s var(--ease-stitch); 
          color: var(--foreground); text-decoration: none;
          position: relative;
        }
        .nav-link.active { opacity: 1; color: var(--primary); transform: scale(1.1); }
        
        .icon-wrapper {
          width: 24px; height: 24px;
          display: flex; align-items: center; justify-content: center;
        }
        .icon-wrapper :global(svg) {
          width: 100%; height: 100%;
          transition: 0.5s var(--ease-stitch);
        }
        
        .nav-link.active .icon-wrapper :global(svg) {
          filter: drop-shadow(0 0 8px var(--primary-glow));
        }

        .label-caps {
          font-size: 0.6rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.05em; opacity: 0.7;
        }
        .nav-link.active .label-caps { opacity: 1; }

        @media (max-width: 768px) {
           .sanctuary-nav { bottom: 2rem; }
           .nav-pill { height: 76px; max-width: 95%; padding: 0 0.5rem; border-radius: 40px; }
           .icon-wrapper { width: 24px; height: 24px; }
        }
      `}</style>
    </nav>
  );
}
