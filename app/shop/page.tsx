"use client";

import React from 'react';
import Link from 'next/link';

export default function Shop() {
  const categories = ["ALL", "SHOES", "APPAREL", "GEAR", "ACCESSORIES"];
  const products = [
    { id: 'shoes-1', name: 'Elite Air Pivot V1', price: '₩245,000', img: 'dance_cards_detailed_view_1775029378812.png', tag: 'BEST SELLER' },
    { id: 'gear-1', name: 'Zen Bloom Mat', price: '₩89,000', img: 'k_dance_line_dance_category_hero_1775029153408.png', tag: 'NEW DROP' },
    { id: 'shoes-o', name: 'Obsidian Pro Glide', price: '₩285,000', img: 'senior_dance_app_desktop_detail_1775026761991.png', tag: 'LIMITED' }
  ];

  return (
    <div className="boutique-shop">
      <section className="shop-hero container">
        <div className="editorial-meta reveal-text">
          <span className="label-caps">BOUTIQUE CURATION / ELITE GEAR</span>
        </div>
        <h1 className="display-text shop-title">
          <span className="reveal-text">THE DANCE</span><br/>
          <span className="reveal-text gold-gradient-text italic">COLLECTION</span>
        </h1>
      </section>

      <section className="category-filter container">
         <div className="filter-scroll scroll-hide">
            {categories.map((c) => (
              <button key={c} className={`filter-btn label-caps ${c === 'ALL' ? 'active' : ''}`}>{c}</button>
            ))}
         </div>
      </section>

      <section className="product-grid container">
          {products.map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="product-card tonal-lift-low pulse-on-click">
               <div className="product-visual">
                  <span className="label-caps product-tag">{p.tag}</span>
                  <div className="img-frame">
                     <img src={p.img} alt={p.name} />
                  </div>
               </div>
               <div className="product-info">
                  <h3 className="display-text product-name">{p.name}</h3>
                  <div className="product-meta">
                     <span className="price label-caps">{p.price}</span>
                     <span className="cta label-caps gold-gradient-text">VIEW DETAIL →</span>
                  </div>
               </div>
            </Link>
          ))}
      </section>

      <style jsx>{`
        .boutique-shop { padding-top: 10rem; padding-bottom: 20rem; min-height: 100vh; }
        .container { padding-left: var(--gutter); padding-right: var(--gutter); }

        .shop-title { font-size: clamp(3.5rem, 15vw, 5rem); margin: 2rem 0 4rem; line-height: 0.95; }

        .category-filter { margin-bottom: 6rem; }
        .filter-scroll { display: flex; gap: 3rem; overflow-x: auto; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .filter-btn { background: none; border: none; color: white; opacity: 0.3; cursor: pointer; transition: 0.4s; flex-shrink: 0; padding-bottom: 0.5rem; }
        .filter-btn.active { opacity: 1; border-bottom: 2px solid var(--primary); }

        .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 3rem; }

        .product-card {
           padding: 2.5rem; border-radius: 2px; transition: 0.6s var(--ease-stitch);
           display: flex; flex-direction: column; gap: 2rem;
        }

        .product-visual { position: relative; height: 320px; width: 100%; border-radius: 2px; overflow: hidden; background: var(--surface-3); }
        .img-frame { height: 100%; width: 100%; display: flex; align-items: center; justify-content: center; transform: scale(0.9); }
        .img-frame img { width: 100%; height: 100%; object-fit: cover; opacity: 1; transition: 1.2s var(--ease-stitch); }

        .product-tag { position: absolute; top: 2rem; left: 2.5rem; font-size: 0.6rem; background: var(--primary); color: var(--on-primary); padding: 0.3rem 0.6rem; border-radius: 2px; }

        .product-name { font-size: 1.5rem; margin-bottom: 1rem; font-weight: 300; }
        .product-meta { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 1.5rem; }

        .product-card:hover .img-frame { transform: scale(1.05); }

        @media (max-width: 768px) {
           .shop-title { font-size: 3rem; }
           .product-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
