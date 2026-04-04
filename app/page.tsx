"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EditorialHeader from '@/components/EditorialHeader';
import SanctuaryNav from '@/components/SanctuaryNav';
import { products } from '@/lib/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('인기 상품');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ['전체', '라인댄스화', '의류', '가방/소품', '보호대/기능성'];

  const filteredProducts = products.filter(p => {
    if (activeCategory === '전체') return true;
    return p.category === activeCategory;
  });

  const heroProduct = products.find(p => p.id === 'essential-01') || products[0];

  if (!mounted) return null;

  return (
    <div className="home-layout">
      <EditorialHeader />
      
      <main className="content-container">
        {/* 🏆 히어로 섹션 */}
        <section className="hero-section container">
          <div className="hero-grid tonal-lift-high scroll-reveal">
            <div className="hero-visual">
               <img src={heroProduct.img} alt={heroProduct.name} className="hero-image" />
               <div className="vignette"></div>
            </div>
            <div className="hero-content">
              <span className="label-caps accent-text gold-gradient-text" style={{ fontSize: '0.7rem' }}>2026 PRIME CURATION</span>
              <h1 className="display-text main-title">
                {heroProduct.name.split(' ')[0]} <br/> 
                <span className="italic-text">Prime Collection</span>
              </h1>
              <p className="hero-desc dim-text">
                전세계 댄서들이 선택한 최고의 성능과 디자인. <br/>
                K-DANCE PRIME에서만 만날 수 있는 가성비 셀렉션.
              </p>
              <Link href={`/product/${heroProduct.id}`} className="btn-stitch-primary hero-btn">
                PREVIEW ITEM
              </Link>
            </div>
          </div>
        </section>

        {/* 🏷️ 카테고리 필터 */}
        <section className="categories container">
          <div className="category-scroll-wrapper">
             <div className="category-list">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    className={`cat-tab label-caps ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </div>
        </section>

        {/* 🛍️ 제품 그리드 */}
        <section className="product-grid container">
          {filteredProducts.map((p) => (
            <Link href={`/product/${p.id}`} key={p.id} className="p-card-link">
              <div className="p-card tonal-lift-low">
                <div className="p-image-wrap">
                  <img src={p.img} alt={p.name} className="p-image" />
                  <div className="p-tag label-caps">{p.tag}</div>
                </div>
                <div className="p-info">
                  <span className="p-cat label-caps dim-text">{p.category}</span>
                  <h3 className="p-title">{p.name}</h3>
                  <div className="p-footer">
                    <span className="p-price">₩{p.price}</span>
                    <span className="p-buy label-caps">VIEW DETAILS <span className="arrow">→</span></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* 👟 프리미엄 배너 */}
        <section className="editorial-banner container">
          <div className="banner-content glass scroll-reveal">
             <div className="banner-text">
                <h2 className="display-text gold-gradient-text" style={{ fontSize: '2rem' }}>K-DANCE PRIME ACADEMY</h2>
                <p className="dim-text">전문 강사진이 직접 검수하고 선별한 최적의 댄스 장비. <br/> 당신의 첫 걸음이 완벽하도록 돕습니다.</p>
             </div>
             <button className="btn-stitch-secondary label-caps" style={{ padding: '1rem 2.5rem' }}>LEARN MORE</button>
          </div>
        </section>
      </main>

      <SanctuaryNav />

      <footer className="main-footer container">
        <div className="footer-line"></div>
        <div className="footer-content editorial-meta">
          <div className="footer-left">
            <span className="logo-text gold-gradient-text">K-DANCE PRIME</span>
            <p className="dim-text">© 2026 NEXT GEN DANCE CURATION PLATFORM. <br/> DESIGNED FOR PERFORMANCE.</p>
          </div>
          <div className="footer-links label-caps">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .home-layout { min-height: 100vh; background: var(--background); padding-top: 6rem; padding-bottom: 8rem; }
        
        .hero-section { margin-bottom: 6rem; }
        .hero-grid { 
           display: grid; grid-template-columns: 1fr 1fr; 
           background: var(--surface-ghost); border-radius: 24px; overflow: hidden;
           height: 500px;
        }
        .hero-visual { position: relative; width: 100%; height: 100%; overflow: hidden; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; transition: 5s ease; scale: 1.05; }
        .hero-grid:hover .hero-image { transform: scale(1.15); }
        .vignette { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 50%); }

        .hero-content { display: flex; flex-direction: column; justify-content: center; padding: 4.5rem; gap: 1.5rem; }
        .main-title { font-size: 4rem; line-height: 1.1; font-weight: 800; letter-spacing: -0.02em; }
        .italic-text { font-style: italic; font-weight: 300; }
        .hero-desc { font-size: 1.1rem; line-height: 1.8; max-width: 80%; }
        .hero-btn { align-self: flex-start; padding: 1.25rem 3rem; margin-top: 1rem; }

        .categories { margin-bottom: 4rem; position: sticky; top: 5rem; z-index: 50; }
        .category-scroll-wrapper { background: var(--background); padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .category-list { display: flex; gap: 1.5rem; overflow-x: auto; -ms-overflow-style: none; scrollbar-width: none; }
        .cat-tab { 
          background: none; border: 1px solid rgba(255,255,255,0.1); color: var(--foreground);
          padding: 0.6rem 2.5rem; border-radius: 99px; cursor: pointer; transition: 0.4s;
          white-space: nowrap; font-size: 0.75rem;
        }
        .cat-tab:hover { background: var(--surface-ghost); border-color: var(--primary); }
        .cat-tab.active { background: var(--foreground); color: var(--background); border-color: var(--foreground); }

        .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5rem; margin-bottom: 8rem; }
        .p-card-link { text-decoration: none; color: inherit; }
        .p-card { border-radius: 16px; transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1); height: 100%; display: flex; flex-direction: column; }
        .p-card:hover { transform: translateY(-12px); border-color: var(--primary); }
        
        .p-image-wrap { position: relative; aspect-ratio: 1/1.2; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; background: var(--surface); }
        .p-image { width: 100%; height: 100%; object-fit: cover; transition: 1.2s; }
        .p-card:hover .p-image { transform: scale(1.08); }
        .p-tag { 
          position: absolute; top: 1rem; right: 1rem; background: var(--primary); color: #000;
          padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.55rem; font-weight: 800;
        }

        .p-info { padding: 0 0.5rem; display: flex; flex-direction: column; flex-grow: 1; }
        .p-cat { font-size: 0.6rem; margin-bottom: 0.5rem; display: block; letter-spacing: 0.1em; color: var(--primary); }
        .p-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 1.5rem; line-height: 1.3; min-height: 2.6rem; }
        
        .p-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.25rem; }
        .p-price { font-size: 1.1rem; font-weight: 800; font-family: var(--font-accent); }
        .p-buy { font-size: 0.65rem; color: var(--primary); font-weight: 700; transition: 0.4s; }
        .p-buy .arrow { margin-left: 0.25rem; display: inline-block; transition: 0.4s; }
        .p-card:hover .p-buy .arrow { transform: translateX(4px); }

        .editorial-banner { margin-bottom: 8rem; }
        .banner-content { 
          padding: 4rem; border-radius: 32px; display: flex; justify-content: space-between; align-items: center;
          border: 1px solid rgba(212,175,55,0.2); background: linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%);
        }
        .banner-text { display: flex; flex-direction: column; gap: 1rem; }

        .main-footer { padding-bottom: 10rem; }
        .footer-line { width: 100%; height: 1px; background: rgba(255,255,255,0.05); margin-bottom: 3rem; }
        .footer-content { display: flex; justify-content: space-between; align-items: flex-start; }
        .logo-text { font-size: 1.2rem; font-weight: 800; letter-spacing: 0.2em; display: block; margin-bottom: 1rem; }
        .footer-links { display: flex; gap: 2rem; font-size: 0.65rem; color: rgba(255,255,255,0.4); }
        .footer-links a { text-decoration: none; color: inherit; transition: 0.3s; }
        .footer-links a:hover { color: var(--primary); }

        .gold-gradient-text {
          background: linear-gradient(135deg, #F2CA50 0%, #D4AF37 50%, #B8860B 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 1024px) {
           .hero-grid { grid-template-columns: 1fr; height: auto; }
           .hero-content { padding: 3rem; }
           .product-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
           .main-title { font-size: 2.5rem; }
           .banner-content { flex-direction: column; text-align: center; gap: 2.5rem; padding: 3rem 1.5rem; }
        }
      `}</style>
    </div>
  );
}
