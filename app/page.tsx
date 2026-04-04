'use client';

import React from 'react';
import Head from 'next/head';
import { products } from '@/lib/products';

export default function Home() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <main className="main-wrapper">
      <Head>
        <title>K-DANCE PRIME | Premium Line Dance Lookbook</title>
        <meta name="description" content="Elevate your line dance experience with our curated premium selection." />
      </Head>

      {/* 1. Hero Section: Asymmetric Editorial */}
      <section className="hero-section section-gap">
        <div className="container-editorial">
          <div className="hero-grid">
            <div className="hero-text-block">
              <span className="eyebrow">EST. 2024 — SEOUL</span>
              <h1 className="display-lg">
                DANCE <br />
                <span className="accent-text">BEYOND</span> <br />
                LIMITS
              </h1>
              <p className="hero-description">
                라인댄스의 품격을 높이는 단 하나의 프리미엄 셀렉션. <br />
                우아함과 기능성의 완벽한 조화를 경험하세요.
              </p>
            </div>
            <div className="hero-image-block glass-pill">
              <img 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2069" 
                alt="Dance Movement" 
                className="parallax-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Nav: Circular Gallery */}
      <section className="category-nav container-editorial">
        <div className="category-scroll">
          {categories.map((cat, idx) => (
            <div key={idx} className="category-item-circle">
              <div className="circle-thumb tonal-card">
                <span className="cat-icon">{cat[0]}</span>
              </div>
              <span className="cat-label">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Gallery: Editorial Masonry */}
      <section className="gallery-section section-gap">
        <div className="container-editorial">
          <div className="gallery-header">
            <h2 className="display-md text-center mb-60">PRIME COLLECTION</h2>
          </div>
          
          <div className="masonry-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card tonal-card">
                <div className="product-image-container">
                  <img src={product.imageUrl} alt={product.name} />
                  <div className="badge-glass">NEW</div>
                </div>
                <div className="product-info-minimal">
                  <h3 className="title-sm">{product.name}</h3>
                  <div className="price-tag">
                    <span className="currency">₩</span>
                    {product.price.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .main-wrapper {
          position: relative;
        }

        /* Hero Layout */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .eyebrow {
          font-family: var(--font-sans);
          letter-spacing: 0.3em;
          color: var(--primary);
          font-weight: 700;
          display: block;
          margin-bottom: 24px;
        }
        .accent-text {
          color: transparent;
          -webkit-text-stroke: 1px var(--primary);
          opacity: 0.8;
        }
        .hero-description {
          max-width: 400px;
          margin-top: 40px;
          font-size: 1.1rem;
          color: var(--on-surface-variant);
        }
        .hero-image-block {
          height: 600px;
          overflow: hidden;
          padding: 0;
        }
        .parallax-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.1);
        }

        /* Circular Nav */
        .category-scroll {
          display: flex;
          gap: 40px;
          overflow-x: auto;
          padding: 40px 0;
          scrollbar-width: none;
        }
        .category-item-circle {
          flex: 0 0 auto;
          text-align: center;
          cursor: pointer;
        }
        .circle-thumb {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 16px;
        }
        .cat-label {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Masonry Grid */
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
          align-items: start;
        }
        .product-card {
          overflow: hidden;
        }
        .product-image-container {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .product-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover img {
          transform: scale(1.08);
        }
        .badge-glass {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 0.7rem;
          font-weight: 700;
        }
        .product-info-minimal {
          padding: 30px;
        }
        .title-sm {
          font-size: 1.25rem;
          margin-bottom: 12px;
        }
        .price-tag {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr; }
          .display-lg { font-size: 4rem; }
        }
      `}</style>
    </main>
  );
}
