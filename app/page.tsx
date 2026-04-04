"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EditorialHeader from '@/components/EditorialHeader';
import SanctuaryNav from '@/components/SanctuaryNav';
import { products } from '@/lib/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeSubCategory, setActiveSubCategory] = useState('전체');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { name: '전체', img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=200' },
    { name: '라인댄스화', img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=200' },
    { name: '의류', img: 'https://images.unsplash.com/photo-1539109132332-6292440366b6?q=80&w=200' },
    { name: '가방/소품', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=200' },
    { name: '보호대/기능성', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=200' }
  ];

  const subCategories = ['전체', ...Array.from(new Set(
    products
      .filter(p => activeCategory === '전체' || p.category === activeCategory)
      .map(p => p.subCategory)
  ))];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveSubCategory('전체');
  };

  const filteredProducts = products.filter(p => {
    const matchMain = activeCategory === '전체' || p.category === activeCategory;
    const matchSub = activeSubCategory === '전체' || p.subCategory === activeSubCategory;
    return matchMain && matchSub;
  });

  const heroProduct = products.find(p => p.id === 'ld-shoe-01') || products[0];

  if (!mounted) return null;

  return (
    <div className="home-layout">
      {/* 🏆 Section 1: Cinematic Hero (Asymmetric) */}
      <section className="hero-editorial container">
        <div className="hero-wrapper scroll-reveal">
          <div className="hero-visual">
            <img src={heroProduct.img} alt={heroProduct.name} className="hero-image" />
            <div className="vignette"></div>
          </div>
          <div className="hero-content-box glass">
            <span className="label-caps accent-text">2026 PRIME CURATION</span>
            <h1 className="display-text main-title">
              THE ART OF <br/>
              <span className="gold-gradient-text italic">MOVEMENT</span>
            </h1>
            <p className="hero-desc">
              신중하게 큐레이팅된 {products.length}개의 프리미엄 아이템. <br/>
              당신의 춤이 완벽한 선이 되는 순간을 위해.
            </p>
            <div className="hero-actions">
              <Link href={`/product/${heroProduct.id}`} className="btn-stitch-primary">
                COLLECTION PREVIEW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🏷️ Section 2: The Mall Experience (Circular Thumbnails) */}
      <section className="mall-nav container">
        <div className="section-header">
          <span className="label-caps">CATEGORIES</span>
        </div>
        <div className="circular-nav-wrapper scroll-hide">
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              className={`nav-circle-btn ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat.name)}
            >
              <div className="circle-img-wrap">
                <img src={cat.img} alt={cat.name} className="circle-img" />
                <div className="circle-glow"></div>
              </div>
              <span className="circle-label">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Sub-categories Pill Dock */}
        <div className="sub-cat-dock scroll-hide">
          {subCategories.map((sub) => (
            <button 
              key={sub} 
              className={`sub-pill ${activeSubCategory === sub ? 'active' : ''}`}
              onClick={() => setActiveSubCategory(sub)}
            >
              {sub}
            </button>
          ))}
        </div>
      </section>

      {/* 🛍️ Section 3: The Gallery (Elevated Tonal Cards) */}
      <section className="product-gallery container">
        <div className="gallery-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p, idx) => (
              <div key={p.id} className={`gallery-item ${idx % 7 === 0 ? 'large-editorial' : ''}`}>
                <Link href={`/product/${p.id}`} className="p-card-link">
                  <div className="editorial-card tonal-lift-low">
                    <div className="p-img-box">
                      <img
                        src={p.img}
                        alt={p.name}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86';
                        }}
                        className="p-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-meta">
                      <div className="p-meta-top">
                        <span className="p-tag">{p.subCategory}</span>
                        <div className="p-rating">★ {p.rating}</div>
                      </div>
                      <h3 className="p-title">{p.name}</h3>
                      <div className="p-price-row">
                        <span className="p-price">₩{p.price.toLocaleString()}</span>
                        <span className="p-reviews">Review {p.reviews > 999 ? '999+' : p.reviews}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="empty-state">해당 카테고리에 상품이 없습니다.</div>
          )}
        </div>
      </section>

      {/* 👟 Section 4: Premium Statement */}
      <section className="statement-banner container">
        <div className="tonal-lift-high banner-wrapper">
          <div className="banner-editorial">
            <h2 className="display-text silver-text">CURATED INTELLIGENCE</h2>
            <p className="dim-text">매일 업데이트되는 {products.length}개의 데이터 허브. <br/> 검증된 품질, 최적의 가격만을 제안합니다.</p>
          </div>
          <button className="btn-stitch-secondary">EXPLORE ALL</button>
        </div>
      </section>

      <style jsx>{`
        .home-layout { padding-top: 5rem; padding-bottom: 10rem; background: var(--background); }
        
        /* Hero Section */
        .hero-editorial { margin-bottom: var(--spacing-24); margin-top: 2rem; }
        .hero-wrapper { position: relative; height: 75vh; min-height: 600px; display: flex; align-items: center; justify-content: flex-end; }
        .hero-visual { position: absolute; left: 0; top: 0; width: 70%; height: 100%; border-radius: 4rem; overflow: hidden; z-index: 1; }
        .hero-image { width: 100%; height: 100%; object-fit: cover; }
        .vignette { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(18,19,22,0.4) 0%, rgba(18,19,22,0) 40%); }
        .hero-content-box { 
          position: relative; z-index: 10; width: 45%; padding: 4rem; border-radius: 3rem; 
          margin-right: -5%; transform: translateY(10%); box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .main-title { font-size: clamp(2.5rem, 5vw, 4.5rem); margin: 1.5rem 0; font-weight: 400; }
        .italic { font-style: italic; }
        .hero-desc { font-size: 1.1rem; color: var(--on-surface-muted); margin-bottom: 2.5rem; line-height: 1.8; }

        /* Mall Nav (Circular) */
        .mall-nav { margin-bottom: var(--spacing-24); }
        .section-header { margin-bottom: 2rem; }
        .circular-nav-wrapper { display: flex; gap: 3rem; overflow-x: auto; padding: 2rem 0; justify-content: center; }
        .nav-circle-btn { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 1rem; transition: 0.4s var(--ease-stitch); }
        .circle-img-wrap { position: relative; width: 120px; height: 120px; border-radius: 50%; overflow: visible; transition: 0.6s var(--ease-stitch); }
        .circle-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; filter: grayscale(0.2) contrast(1.1); }
        .circle-glow { position: absolute; inset: -10px; border-radius: 50%; background: radial-gradient(circle, var(--primary) 0%, transparent 70%); opacity: 0; transition: 0.6s; z-index: -1; }
        .nav-circle-btn:hover .circle-img-wrap { transform: translateY(-10px); }
        .nav-circle-btn.active .circle-img { filter: grayscale(0); border: 2px solid var(--primary); }
        .nav-circle-btn.active .circle-glow { opacity: 0.3; }
        .circle-label { font-size: 0.75rem; font-weight: 800; color: var(--on-surface-muted); letter-spacing: 0.1em; transition: 0.3s; }
        .nav-circle-btn.active .circle-label { color: var(--primary); }

        .sub-cat-dock { display: flex; gap: 0.75rem; overflow-x: auto; padding: 1.5rem 0; justify-content: center; }
        .sub-pill { 
          background: var(--surface-container-low); color: var(--on-surface-muted); 
          padding: 0.5rem 1.5rem; border-radius: 99px; border: none; font-size: 0.7rem; font-weight: 700; cursor: pointer; transition: 0.3s;
        }
        .sub-pill.active { background: var(--primary-container); color: var(--on-primary); }

        /* Gallery Grid */
        .product-gallery { margin-bottom: var(--spacing-24); }
        .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3rem; }
        .gallery-item.large-editorial { grid-column: span 2; grid-row: span 1; }
        
        .p-card-link { text-decoration: none; color: inherit; }
        .editorial-card { 
          border-radius: 2rem; overflow: hidden; height: 100%; display: flex; flex-direction: column; 
          transition: 0.8s var(--ease-stitch); 
        }
        .editorial-card:hover { transform: translateY(-1rem); background: var(--surface-container-high); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        
        .p-img-box { position: relative; width: 100%; aspect-ratio: 1/1.1; overflow: hidden; background: var(--background); }
        .p-img { width: 100%; height: 100%; object-fit: cover; transition: 1.5s var(--ease-stitch); }
        .editorial-card:hover .p-img { transform: scale(1.1); }
        
        .p-meta { padding: 2rem; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; }
        .p-meta-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .p-tag { font-size: 0.6rem; font-weight: 800; color: var(--primary); text-transform: uppercase; letter-spacing: 0.1em; }
        .p-rating { font-size: 0.75rem; font-weight: 800; color: #F2CA50; }
        .p-title { font-size: 1.1rem; line-height: 1.4; font-weight: 500; font-family: var(--font-body); margin-bottom: 1.5rem; }
        .p-price-row { display: flex; justify-content: space-between; align-items: baseline; }
        .p-price { font-size: 1.25rem; font-weight: 800; }
        .p-reviews { font-size: 0.7rem; color: var(--on-surface-dim); font-weight: 600; }

        /* Banner */
        .statement-banner { margin-bottom: var(--spacing-24); }
        .banner-wrapper { padding: 5rem; border-radius: 4rem; display: flex; justify-content: space-between; align-items: center; gap: 4rem; }
        .silver-text { font-size: 3rem; color: #fff; letter-spacing: -0.02em; }
        .empty-state { grid-column: 1 / -1; text-align: center; padding: 10rem 0; color: var(--on-surface-dim); }

        @media (max-width: 1024px) {
          .hero-wrapper { flex-direction: column; height: auto; justify-content: flex-start; }
          .hero-visual { position: relative; width: 100%; height: 50vh; border-radius: 2rem; }
          .hero-content-box { width: 90%; margin-right: 0; margin-top: -10vh; padding: 2.5rem; border-radius: 2rem; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .gallery-item.large-editorial { grid-column: span 2; }
          .circular-nav-wrapper { justify-content: flex-start; padding: 1rem; gap: 2rem; }
          .banner-wrapper { flex-direction: column; text-align: center; padding: 3rem 1.5rem; gap: 2rem; }
        }
      `}</style>
    </div>
  );
}
