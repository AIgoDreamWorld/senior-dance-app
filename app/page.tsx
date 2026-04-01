"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="stitch-container">
      {/* 🌑 VOLUMETRIC BACKGROUND LAYER */}
      <div className="sanctuary-glow"></div>

      {/* 🧭 NAVIGATION - THE GHOST CAPSULE */}
      <header className={`editorial-header ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="header-content">
          <button className="menu-trigger pulse-on-click" aria-label="Menu">
            <span className="bar"></span>
            <span className="bar-short"></span>
          </button>
          <div className="logo accent-text gold-gradient-text">K-DANCE PRIME</div>
          <div className="header-right">
             <span className="prime-badge">V2.1</span>
          </div>
        </div>
      </header>

      <main>
        {/* 🎭 THE ASYMMETRIC STORYTELLING HERO */}
        <section className="monolith-hero">
          <div className="hero-background">
            <img 
              src="premium_korean_dance_community_1775029746666.png" 
              alt="Cyber-Zen Performance" 
              className="hero-media"
            />
            <div className="media-overlay"></div>
          </div>
          
          <div className="hero-content container">
            <div className="editorial-meta reveal-text">
              <span className="label-caps">Curated by K-DANCE PRIME / 2026 EDITION</span>
            </div>
            <h1 className="display-text hero-title">
              <span className="reveal-text">THE PRECISION</span><br/>
              <span className="reveal-text gold-gradient-text italic">OF LIFE</span>
            </h1>
            
            <div className="hero-bottom flex-between">
              <div className="discovery-actions">
                <Link href="/community" className="btn-stitch-primary">EXPLORE FEED</Link>
                <Link href="/shop" className="btn-stitch-secondary">THE LOOKBOOK</Link>
              </div>
              <div className="scroll-indicator label-caps">SCROLL TO DISCOVER ↓</div>
            </div>
          </div>
        </section>

        {/* 🎬 DANCE VERTICALS - THE ZEN CAROUSEL */}
        <section className="editorial-section">
          <div className="section-head container">
            <div className="label-caps accent-color">01 / LIVE FEED</div>
            <div className="flex-between align-end">
              <h2 className="display-text section-title">Zen Shorts</h2>
              <Link href="/community" className="label-caps text-link">ALL MOMENTS →</Link>
            </div>
          </div>
          
          <div className="shorts-slider scroll-hide">
            {[
              { id: 1, title: 'The Soul of Line', tag: 'PREMIUM', img: 'youthful_passionate_dancer_model_1775027942388.png' },
              { id: 2, title: 'Obsidian Rhythm', tag: 'LIMITED', img: 'senior_dance_model_exclusive_1775027245869.png' },
              { id: 3, title: 'Golden Pulse', tag: 'ELITE', img: 'korean_community_dancing_mix_1775028456302.png' }
            ].map((item) => (
              <div key={item.id} className="short-editorial-card tonal-lift-low">
                <div className="card-visual">
                  <img src={item.img} alt={item.title} />
                  <div className="card-overlay">
                    <span className="label-caps card-tag">{item.tag}</span>
                    <h3 className="display-text card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 👞 ELITE MALL - THE BOUTIQUE GRID */}
        <section className="editorial-section last-section">
          <div className="section-head container">
             <div className="label-caps accent-color">02 / CURATIONS</div>
             <h2 className="display-text section-title">Elite Essentials</h2>
          </div>
          
          <div className="curation-list container">
            {[
              { id: 'shoes', name: 'Elite Air Pivot', desc: 'Surgical precision for every pivot.', img: 'dance_cards_detailed_view_1775029378812.png', tag: 'NEW DROP' },
              { id: 'silk', name: 'Zen Flow Silk', desc: 'Experience the weightless glide.', img: 'k_dance_line_dance_category_hero_1775029153408.png', tag: 'LOOKBOOK' }
            ].map((p) => (
              <Link key={p.id} href={`/product/${p.id}`} className="curation-card tonal-lift-high pulse-on-click">
                <div className="curation-visual">
                  <div className="circle-frame">
                    <img src={p.img} alt={p.name} />
                  </div>
                </div>
                <div className="curation-info">
                  <span className="label-caps gold-gradient-text">{p.tag}</span>
                  <h3 className="display-text curation-name">{p.name}</h3>
                  <p className="dim-text">{p.desc}</p>
                  <span className="label-button label-caps">COLLECT NOW</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ✉️ EDITORIAL FOOTER */}
        <footer className="editorial-footer container">
          <div className="footer-line"></div>
          <div className="footer-content">
            <h2 className="display-text italic">"Defining the future <br/>of senior rhythm."</h2>
            <div className="footer-meta flex-between">
              <span className="label-caps">© 2026 K-DANCE PRIME</span>
              <span className="label-caps">PRVACY / TERMS</span>
            </div>
          </div>
        </footer>
      </main>

      {/* 🧭 SANCTUARY NAVIGATION - GLASS PILL */}
      <nav className="sanctuary-nav">
        <div className="nav-pill glass">
          <Link href="/" className="nav-link active">
            <span className="icon">○</span>
            <span className="label-caps">PRIME</span>
          </Link>
          <Link href="/community" className="nav-link">
            <span className="icon">◇</span>
            <span className="label-caps">FEED</span>
          </Link>
          <Link href="/shop" className="nav-link">
            <span className="icon">▢</span>
            <span className="label-caps">SHOP</span>
          </Link>
          <Link href="/profile" className="nav-link">
            <span className="icon">▽</span>
            <span className="label-caps">MY</span>
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .stitch-container {
          min-height: 100vh;
          background: var(--background);
          overflow-x: hidden;
        }

        .container {
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }

        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .align-end { align-items: flex-end; }
        .italic { font-style: italic; }

        /* Navigation Header */
        .editorial-header {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 2rem 0; transition: var(--transition-slow);
        }
        .editorial-header.scrolled { padding: 1rem 0; backdrop-filter: blur(24px); background: rgba(13,14,16,0.8); }
        .header-content { display: flex; justify-content: space-between; align-items: center; padding: 0 var(--gutter); }
        .logo { font-size: 0.9rem; font-weight: 800; letter-spacing: 0.2em; font-family: var(--font-accent); }
        .menu-trigger { background: none; border: none; display: flex; flex-direction: column; gap: 6px; cursor: pointer; }
        .menu-trigger .bar { width: 24px; height: 1.5px; background: #fff; }
        .menu-trigger .bar-short { width: 16px; height: 1.5px; background: #fff; opacity: 0.6; }

        /* Hero Section */
        .monolith-hero {
          height: 100vh; position: relative; display: flex; align-items: flex-end; padding-bottom: 6rem;
        }
        .hero-background { position: absolute; inset: 0; z-index: 1; }
        .hero-media { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5) contrast(1.1); }
        .media-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--background) 10%, rgba(13,14,16,0.2) 50%, rgba(13,14,16,0.6) 100%);
        }
        .hero-content { position: relative; z-index: 10; width: 100%; }
        .hero-title { font-size: clamp(3.5rem, 15vw, 6rem); margin: 2rem 0 4rem; line-height: 0.95; }
        .hero-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 3rem; }
        .discovery-actions { display: flex; gap: 1.5rem; }
        .scroll-indicator { opacity: 0.4; font-size: 0.65rem; }

        /* General Sections */
        .editorial-section { padding-top: var(--section-gap); }
        .section-head { margin-bottom: 4rem; }
        .section-title { font-size: clamp(2rem, 8vw, 3rem); margin-top: 0.5rem; }
        .accent-color { color: var(--primary); }

        /* Shorts Slider */
        .shorts-slider {
          display: flex; gap: 2rem; overflow-x: auto; padding: 0 var(--gutter) 4rem;
          scroll-snap-type: x mandatory;
        }
        .short-editorial-card {
          min-width: 320px; height: 560px; flex-shrink: 0;
          border-radius: 4px; overflow: hidden; scroll-snap-align: start;
          transition: 0.6s var(--ease-stitch);
        }
        .card-visual { height: 100%; position: relative; }
        .card-visual img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 1.2s var(--ease-stitch); }
        .card-overlay {
          position: absolute; inset: 0; padding: 2.5rem;
          display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(to top, var(--background) 0%, transparent 60%);
        }
        .card-title { font-size: 1.75rem; margin-top: 0.5rem; font-weight: 300; }
        .short-editorial-card:hover img { transform: scale(1.08); opacity: 1; }

        /* Curation Grid */
        .curation-list { display: grid; gap: 3rem; margin-bottom: var(--section-gap); }
        .curation-card {
           display: flex; align-items: center; gap: 2.5rem; padding: 3rem 2rem;
           border-radius: 2px; transition: var(--transition-fast);
        }
        .circle-frame {
           width: 140px; height: 140px; border-radius: 50%; overflow: hidden;
           background: var(--surface-3); box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .circle-frame img { width: 100%; height: 100%; object-fit: cover; }
        .curation-info { flex: 1; }
        .curation-name { font-size: 1.5rem; margin: 0.5rem 0 1rem; }
        .dim-text { color: var(--on-surface-muted); line-height: 1.6; margin-bottom: 2rem; }
        .label-button { color: var(--primary); border-bottom: 1px solid var(--primary); padding-bottom: 4px; cursor: pointer; }

        /* Footer */
        .editorial-footer { padding-bottom: 20vh; }
        .footer-line { width: 100%; height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 6rem; }
        .footer-content h2 { font-size: 3rem; line-height: 1.1; margin-bottom: 4rem; text-align: left; }
        .footer-meta { opacity: 0.3; font-size: 0.65rem; }

        /* Global Sanctuary Nav */
        .sanctuary-nav {
          position: fixed; bottom: 3rem; left: 0; width: 100%; z-index: 2000;
          display: flex; justify-content: center; padding: 0 var(--gutter);
        }
        .nav-pill {
          display: flex; justify-content: space-around; align-items: center;
          width: 100%; max-width: 400px; height: 72px; border-radius: 99px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .nav-link { display: flex; flex-direction: column; align-items: center; gap: 6px; opacity: 0.3; transition: 0.4s; }
        .nav-link.active { opacity: 1; color: var(--primary); }
        .nav-link .icon { font-size: 1.4rem; }

        @media (max-width: 768px) {
          .monolith-hero { padding-bottom: 4rem; }
          .hero-title { font-size: 3.5rem; margin-bottom: 3rem; }
          .discovery-actions { flex-direction: column; width: 100%; }
          .curation-card { flex-direction: column; text-align: center; gap: 1.5rem; }
          .circle-frame { width: 180px; height: 180px; }
          .footer-content h2 { font-size: 2rem; }
        }
      `}</style>
    </div>
  );
}

