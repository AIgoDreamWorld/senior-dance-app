"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SanctuaryNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '홈', icon: '○' },
    { href: '/community', label: '피드', icon: '◇' },
    { href: '/shop', label: '쇼핑', icon: '▢' },
    { href: '/profile', label: '마이', icon: '▽' }
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
            <span className="icon">{item.icon}</span>
            <span className="label-caps">{item.label}</span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .sanctuary-nav {
          position: fixed; bottom: 3rem; left: 0; width: 100%; z-index: 2000;
          display: flex; justify-content: center; padding: 0 1.5rem;
          pointer-events: none;
        }
        .nav-pill {
          display: flex; justify-content: space-around; align-items: center;
          width: 100%; max-width: 400px; height: 72px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.05);
          pointer-events: auto;
          background: rgba(20, 21, 23, 0.7);
          backdrop-filter: blur(40px) saturate(180%);
        }
        .nav-link { 
          display: flex; flex-direction: column; align-items: center; 
          gap: 6px; opacity: 0.3; transition: 0.4s; 
          color: white; text-decoration: none;
        }
        .nav-link.active { opacity: 1; color: #D4AF37; }
        .nav-link .icon { font-size: 1.4rem; }
        .label-caps {
          font-size: 0.75rem; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        @media (max-width: 768px) {
           .sanctuary-nav { bottom: 2rem; }
           .nav-pill { height: 64px; }
        }
      `}</style>
    </nav>
  );
}
