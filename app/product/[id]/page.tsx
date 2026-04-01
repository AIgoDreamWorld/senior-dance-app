"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('');
  
  const products = {
    'shoes-1': {
      name: "Elite Air Pivot V1",
      price: 245000,
      description: "Designed for surgical precision. The Air Pivot system reduces knee impact by 40% while providing an effortless 360-degree rotation. The obsidian finish defines the new standard of senior performance.",
      specs: ["PIVOT CONTROL SOLE", "ELITE AIR CUSHION", "BREATHABLE OBSIDIAN MESH"],
      sizes: [230, 235, 240, 245, 250, 255, 260],
      img: "dance_cards_detailed_view_1775029378812.png",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스화"
    },
    'gear-1': {
      name: "Zen Bloom Mat",
      price: 89000,
      description: "A weightless foundation for your rhythm. The non-slip surface provides a secure anchor for every isolation and turn. Infused with microbial resistance for long-term sanctuary purity.",
      specs: ["ZERO-GRAVITY GRIP", "PHTHALATE FREE", "ANTI-STATIC FINISH"],
      sizes: ["FREE"],
      img: "k_dance_line_dance_category_hero_1775029153408.png",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스매트"
    },
    'shoes-o': {
      name: "Obsidian Pro Glide",
      price: 285000,
      description: "The peak of the collection. The Pro Glide series utilizes aerospace-grade material for the ultimate light-body experience. Perfect for competitive stages and refined studio work.",
      specs: ["AERO-ELITE WEIGHT", "PRO-GRADE FLEX", "SIGNATURE GOLD INLAY"],
      sizes: [240, 245, 250, 255, 260],
      img: "senior_dance_app_desktop_detail_1775026761991.png",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스부츠"
    }
  };

  const product = products[params.id as keyof typeof products] || products['shoes-1'];

  const handleExternalPurchase = () => {
    if (!selectedSize && product.sizes[0] !== "FREE") {
      alert("Please select your dimension.");
      return;
    }
    window.open(product.externalLink, '_blank');
  };

  return (
    <div className="product-detail-view">
      {/* 🧭 CONTEXTUAL NAV */}
      <div className="context-nav container">
         <Link href="/shop" className="back-trigger label-caps pulse-on-click">← BACK TO SHOP</Link>
      </div>

      <main>
        {/* 🎬 IMMERSIVE VISUAL */}
        <section className="immersive-visual">
          <div className="visual-wrap">
            <img src={product.img} alt={product.name} />
            <div className="visual-vignette-bottom"></div>
            <div className="floating-label">
              <span className="prime-badge shadow-lg">STITCH EXCLUSIVE</span>
            </div>
          </div>
        </section>

        {/* 📄 PRODUCT INTEL */}
        <section className="product-intel container">
          <div className="intel-header">
            <div className="label-caps opacity-60">PERFORMANCE / GEAR</div>
            <h1 className="display-text product-title reveal-text">{product.name}</h1>
            <div className="price-box">
              <span className="price display-text">₩{product.price.toLocaleString()}</span>
              <span className="label-caps gold-gradient-text">STITCH VERIFIED</span>
            </div>
          </div>

          <div className="intel-grid">
            <div className="main-content">
              <div className="label-caps section-tag">THE CRAFT</div>
              <p className="description-text">{product.description}</p>
              
              <div className="spec-grid">
                {product.specs.map((spec, i) => (
                  <div key={i} className="spec-card tonal-lift-low">
                    <span className="dot"></span>
                    <span className="label-caps">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="purchase-side">
              <div className="side-card tonal-lift-low">
                <div className="label-caps text-center" style={{ marginBottom: '2rem' }}>DIMENSION</div>
                <div className="size-grid">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`size-btn ${selectedSize === size.toString() ? 'active' : 'tonal-lift-high'}`}
                      onClick={() => setSelectedSize(size.toString())}
                    >
                      <span className="label-caps">{size}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="trust-footer">
                <div className="trust-item">
                  <div className="icon">🛡️</div>
                  <div className="txt">
                    <div className="label-caps">VERIFIED</div>
                    <p>Authenticity and Quality Assured</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* 🚀 STITCH ACTION BAR */}
      <footer className="footer-action-layer">
        <div className="action-bar-inner glass">
           <button className="btn-stitch-secondary contact-btn" onClick={() => window.open('https://pf.kakao.com/')}>ENQUIRY</button>
          <button className="btn-stitch-primary buy-btn" onClick={handleExternalPurchase}>
            {selectedSize ? `COLLECT ${selectedSize}` : (product.sizes[0] === "FREE" ? "COLLECT NOW" : "SELECT DIMENSION")}
          </button>
        </div>
      </footer>

      <style jsx>{`
        .product-detail-view { padding-top: 6rem; padding-bottom: 240px; }
        .container { padding-left: var(--gutter); padding-right: var(--gutter); }

        .context-nav { margin: 2rem 0; }
        .back-trigger { color: var(--on-surface-muted); cursor: pointer; transition: 0.4s; }
        .back-trigger:hover { color: #fff; }

        .immersive-visual { height: 75vh; position: relative; overflow: hidden; margin-bottom: 5rem; }
        .visual-wrap { width: 100%; height: 100%; position: relative; }
        .visual-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .visual-vignette-bottom {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 40%;
          background: linear-gradient(to top, var(--background) 20%, transparent 100%);
        }
        .floating-label { position: absolute; bottom: 3rem; left: var(--gutter); }

        .product-intel { position: relative; z-index: 10; padding-bottom: 10rem; }
        .intel-header { margin-bottom: 6rem; }
        .product-title { font-size: clamp(2.5rem, 8vw, 4rem); margin: 1rem 0 2rem; max-width: 800px; line-height: 1.05; }
        .price-box { display: flex; align-items: baseline; gap: 2rem; }
        .price { font-size: 2.5rem; color: var(--primary); }

        .intel-grid { display: grid; grid-template-columns: 1fr 380px; gap: 8rem; align-items: start; }
        .section-tag { color: var(--primary); margin-bottom: 2rem; letter-spacing: 0.25em; }
        .description-text { font-size: 1.25rem; line-height: 2.2; opacity: 0.7; margin-bottom: 6rem; font-weight: 300; }
        
        .spec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .spec-card { padding: 3rem 2rem; border-radius: 2px; display: flex; align-items: center; gap: 1rem; }
        .spec-card .dot { width: 4px; height: 4px; background: var(--primary); border-radius: 50%; opacity: 0.6; }

        .purchase-side { position: sticky; top: 120px; }
        .side-card { padding: 4rem 2rem; border-radius: 2px; }
        .size-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
        .size-btn { 
          height: 54px; border: none; color: #fff; cursor: pointer; transition: 0.4s;
          display: flex; align-items: center; justify-content: center; border-radius: 2px;
        }
        .size-btn.active { background: var(--primary); color: var(--on-primary); box-shadow: 0 10px 20px -10px var(--primary); }
        .size-btn:hover:not(.active) { transform: translateY(-3px); background: var(--surface-ghost); }

        .trust-footer { margin-top: 4rem; padding: 0 1rem; opacity: 0.4; }
        .trust-item { display: flex; gap: 1rem; align-items: center; }
        .trust-item .icon { font-size: 1.5rem; }
        .trust-item p { font-size: 0.7rem; margin-top: 0.25rem; }

        .footer-action-layer {
          position: fixed; bottom: 3rem; left: 0; right: 0; z-index: 2000;
          display: flex; justify-content: center; padding: 0 1.5rem;
        }
        .action-bar-inner {
          width: 100%; max-width: 600px; display: flex; gap: 1rem; padding: 1rem;
          border-radius: 99px; border: 1px solid rgba(255,255,255,0.05);
          background: rgba(20, 21, 23, 0.7); backdrop-filter: blur(40px);
        }
        .buy-btn { flex-grow: 1; border-radius: 99px; }
        .contact-btn { min-width: 140px; border-radius: 99px; }

        @media (max-width: 1024px) {
          .intel-grid { grid-template-columns: 1fr; gap: 6rem; }
          .purchase-side { position: relative; top: 0; }
          .immersive-visual { height: 60vh; }
        }

        @media (max-width: 768px) {
          .product-detail-view { padding-top: 4rem; }
          .product-title { font-size: 2.5rem; }
          .price { font-size: 2rem; }
          .spec-grid { grid-template-columns: 1fr; }
          .description-text { font-size: 1.15rem; }
          .action-bar-inner { border-radius: 12px; }
          .buy-btn, .contact-btn { border-radius: 4px; }
          .contact-btn { display: none; }
        }
      `}</style>
    </div>
  );
}
