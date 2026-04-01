"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function EliteMall() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const products = [
    { id: 'shoes-1', name: "엘리트 에어 피벗 v2", price: "₩189,000", tag: "베스트셀러", img: "dance_cards_detailed_view_1775029378812.png", category: "슈즈" },
    { id: 'gear-1', name: "젠 플로우 실크 셋업", price: "₩245,000", tag: "룩북", img: "k_dance_line_dance_category_hero_1775029153408.png", category: "의류" },
    { id: 'acc-1', name: "옵시디언 펄스 밴드", price: "₩56,000", tag: "신상품", img: "korean_community_dancing_mix_1775028456302.png", category: "액세서리" },
    { id: 'shoes-2', name: "골드 프라임 댄서", price: "₩210,000", tag: "리미티드", img: "senior_dance_model_exclusive_1775027245869.png", category: "슈즈" },
  ];

  const filteredProducts = activeCategory === "전체" ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="elite-mall">
      <header className="mall-header container">
        <div className="label-caps accent-color">쇼핑익스피리언스 / 02</div>
        <h1 className="display-text mall-title gold-gradient-text">엘리트 몰</h1>
        
        <div className="category-filter scroll-hide">
          {["전체", "슈즈", "의류", "액세서리"].map(cat => (
            <button 
              key={cat} 
              className={`filter-btn label-caps ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="product-grid container">
        {filteredProducts.map(product => (
          <Link key={product.id} href={`/product/${product.id}`} className="product-card tonal-lift-low">
            <div className="product-visual">
              <img src={product.img} alt={product.name} />
              <span className="card-badge label-caps">{product.tag}</span>
            </div>
            <div className="product-info">
              <h3 className="display-text product-name">{product.name}</h3>
              <div className="product-bottom">
                 <span className="price label-caps">{product.price}</span>
                 <span className="buy-now label-caps">소장하기 →</span>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <style jsx>{`
        .elite-mall { padding-top: 10rem; padding-bottom: 20vh; background: var(--background); }
        .container { padding: 0 var(--gutter); }

        .mall-header { margin-bottom: 6rem; text-align: center; }
        .mall-title { font-size: 4.5rem; margin-top: 1rem; margin-bottom: 3.5rem; letter-spacing: -0.02em; font-weight: 300; }

        .category-filter {
          display: flex; gap: 3rem; justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1.5rem;
        }
        .filter-btn {
          background: none; border: none; color: #fff; opacity: 0.3; cursor: pointer; transition: 0.4s;
          padding: 0.5rem 0; position: relative;
        }
        .filter-btn.active { opacity: 1; }
        .filter-btn.active::after {
          content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 2px;
          background: var(--primary);
        }

        .product-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;
        }
        .product-card {
           text-decoration: none; color: inherit; display: flex; flex-direction: column;
           transition: var(--transition-fast);
        }
        .product-visual {
           aspect-ratio: 1; position: relative; overflow: hidden; background: var(--surface-3);
           border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);
        }
        .product-visual img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; transition: 1.2s var(--ease-stitch); }
        .card-badge {
           position: absolute; top: 1.5rem; left: 1.5rem; background: rgba(0,0,0,0.4);
           backdrop-filter: blur(8px); padding: 0.4rem 0.8rem; font-size: 0.55rem;
           border: 1px solid rgba(255,255,255,0.1);
        }

        .product-info { padding: 2rem 0; }
        .product-name { font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800; opacity: 0.9; }
        .product-bottom { display: flex; justify-content: space-between; align-items: center; opacity: 0.6; }
        .price { font-size: 0.75rem; letter-spacing: 0.05em; font-weight: 900; }
        .buy-now { font-size: 0.65rem; border-bottom: 1px solid rgba(255,255,255,0.3); padding-bottom: 2px; transition: 0.3s; }

        .product-card:hover img { transform: scale(1.05); opacity: 1; }
        .product-card:hover .buy-now { color: var(--primary); border-color: var(--primary); opacity: 1; }

        @media (max-width: 768px) {
           .mall-title { font-size: 3rem; }
           .product-grid { grid-template-columns: 1fr; gap: 4rem; }
           .category-filter { gap: 1.5rem; font-size: 0.7rem; }
        }
      `}</style>
    </div>
  );
}
