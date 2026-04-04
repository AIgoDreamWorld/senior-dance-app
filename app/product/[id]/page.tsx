"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { productData } from '@/lib/products';
import EditorialHeader from '@/components/EditorialHeader';
import SanctuaryNav from '@/components/SanctuaryNav';

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  // Convert id to string safely
  const productId = Array.isArray(id) ? id[0] : id;
  const product = productId ? productData[productId] : null;
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '245');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="error-page">
        <EditorialHeader />
        <div className="container" style={{ padding: '20vh 1.5rem', textAlign: 'center' }}>
          <h2 className="display-text gold-gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            상품을 찾을 수 없습니다
          </h2>
          <p className="dim-text" style={{ marginBottom: '2rem' }}>
            현재 요청하신 상품 정보가 존재하지 않거나 라이브 정기 점검 중입니다.
          </p>
          <button 
             onClick={() => router.push('/')}
             className="btn-stitch-primary" 
             style={{ padding: '1rem 2rem', fontSize: '0.8rem' }}
          >
            홈으로 돌아가기
          </button>
        </div>
        <SanctuaryNav />
        <style jsx>{`
          .error-page { min-height: 100vh; background: var(--background); }
          .gold-gradient-text {
            background: linear-gradient(135deg, #F2CA50 0%, #D4AF37 50%, #B8860B 100%);
            -webkit-background-clip: text; background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="product-page">
      <EditorialHeader />
      
      <main className="product-container container">
        {/* 🖼️ 이미지 섹션 */}
        <div className="product-gallery">
          <div className="main-stage tonal-lift-high shadow-premium">
            <img src={product.img} alt={product.name} className="main-image" />
            <div className="staged-label label-caps">{product.category}</div>
          </div>
          <div className="gallery-thumbs scroll-hide">
             {[1,2,3].map(i => <div key={i} className="thumb-frame tonal-lift-low" style={{backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>)}
          </div>
        </div>

        {/* 📝 상세 정보 섹션 */}
        <div className="product-details editorial-meta">
          <div className="brand-breadcrumb label-caps accent-color">OFFICIAL STORE / {product.category}</div>
          <h1 className="display-text product-title gold-gradient-text">{product.name}</h1>
          <div className="price-tag display-text">₩{product.price} <span className="starting-label">공식 스토어 최저가 결제</span></div>
          
          <p className="product-desc dim-text">{product.description}</p>
          
          {/* ✅ 직행 결제 섹션 */}
          <div className="glass-card direct-access-card" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid rgba(212,175,55,0.2)' }}>
            <div className="label-caps" style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.7rem' }}>🔒 안전한 네이버 스마트스토어 공식 결제</div>
            <button 
              className="btn-stitch-primary buy-btn pulse-on-click"
              style={{ width: '100%', height: '80px', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.05em' }}
              onClick={() => window.open(product.purchaseUrl, '_blank')}
            >
              지금 바로 주문하기 ↗
            </button>
            <p className="dim-text" style={{ fontSize: '0.7rem', marginTop: '1rem', textAlign: 'center' }}>
              * 클릭 시 해당 쇼핑몰의 상품 결제(옵션선택) 페이지로 즉시 이동합니다.
            </p>
          </div>

          <div className="detail-specs">
            <h4 className="label-caps spec-title">기술 사양 (Technical Specs)</h4>
            <ul className="spec-list">
              {product.features.map((f: string) => <li key={f} className="label-caps spec-item">{f}</li>)}
            </ul>
          </div>

          <div className="size-selector">
            <h4 className="label-caps spec-title">사이즈 안내</h4>
            <div className="size-grid">
              {product.sizes.map((size: string) => (
                <button 
                   key={size} 
                   className={`size-btn label-caps ${selectedSize === size ? 'active' : ''}`}
                   onClick={() => setSelectedSize(size)}
                 >
                   {size}
                 </button>
              ))}
            </div>
          </div>

          <div className="purchase-actions sticky-mobile">
             <button 
               className="btn-stitch-primary buy-btn pulse-on-click"
               onClick={() => window.open(product.purchaseUrl, '_blank')}
             >
               결제 페이지 이동
             </button>
             <button 
               className="btn-stitch-secondary cart-btn pulse-on-click"
               onClick={() => alert('내 쇼핑 리스트에 저장되었습니다! ✨')}
             >
               찜하기
             </button>
          </div>
        </div>
      </main>

      <SanctuaryNav />

      <style jsx>{`
        .product-page { min-height: 100vh; background: var(--background); padding-top: 8rem; padding-bottom: 8rem; }
        .product-container { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4.5rem; align-items: start; }
        
        .product-gallery { position: sticky; top: 10rem; display: flex; flex-direction: column; gap: 1.5rem; }
        .main-stage { 
          aspect-ratio: 1/1.2; border-radius: 20px; overflow: hidden; position: relative;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.03);
        }
        .main-image { width: 100%; height: 100%; object-fit: cover; transition: 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .main-stage:hover .main-image { transform: scale(1.05); }
        .staged-label { 
          position: absolute; top: 1.5rem; left: 1.5rem; 
          background: rgba(0,0,0,0.4); backdrop-filter: blur(8px);
          padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.6rem;
        }

        .gallery-thumbs { display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem; }
        .thumb-frame { 
          flex: 0 0 80px; aspect-ratio: 1; border-radius: 12px; background: var(--surface);
          border: 1px solid rgba(255,255,255,0.05); cursor: pointer;
        }

        .product-title { font-size: 3.5rem; font-weight: 800; line-height: 1.1; margin: 1.5rem 0; letter-spacing: -0.02em; }
        .price-tag { font-size: 2.5rem; font-weight: 300; margin-bottom: 2rem; display: flex; align-items: baseline; gap: 1rem; }
        .starting-label { font-size: 0.9rem; font-family: var(--font-primary); color: var(--primary); letter-spacing: 0.1em; }
        
        .product-desc { font-size: 1.1rem; line-height: 1.8; margin-bottom: 3.5rem; max-width: 90%; }

        .comparison-box { padding: 2.5rem; border-radius: 24px; margin-bottom: 3.5rem; border: 1px solid rgba(212,175,55,0.15); }
        .spec-title { font-size: 0.75rem; color: var(--primary); margin-bottom: 1.5rem; display: block; }
        .mall-list { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem; }
        
        .mall-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 1.25rem 1.5rem; border-radius: 16px; background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05); text-decoration: none; transition: 0.4s;
        }
        .mall-item:hover { transform: translateX(8px); background: rgba(255,255,255,0.05); border-color: var(--primary); }
        .mall-item.winner { background: rgba(212,175,55,0.05); border-color: rgba(212,175,55,0.3); }

        .mall-info { display: flex; align-items: center; gap: 1rem; }
        .mall-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: #fff; border-radius: 8px; color: #000; font-weight: 900; font-size: 0.9rem; }
        .mall-name { font-size: 1rem; font-weight: 600; }
        .mall-score-row { display: flex; gap: 0.75rem; align-items: center; margin-top: 0.25rem; font-size: 0.7rem; }
        .star-rating { color: #f2ca50; }

        .price-info { display: flex; align-items: center; gap: 1rem; }
        .mall-price { font-size: 1.1rem; font-weight: 700; font-family: var(--font-accent); }
        .winner-badge { display: block; font-size: 0.55rem; color: var(--primary); font-weight: 800; letter-spacing: 0.05em; }
        .external-arrow { margin-left: 0.5rem; opacity: 0.3; transition: 0.4s; }
        .mall-item:hover .external-arrow { opacity: 1; transform: translate(2px, -2px); }

        .spec-list { list-style: none; display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3.5rem; }
        .spec-item { 
          padding: 0.6rem 1.25rem; background: var(--surface-ghost); border-radius: 4px;
          font-size: 0.65rem; border: 1px solid rgba(255,255,255,0.1);
        }

        .size-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)); gap: 0.75rem; margin-bottom: 4rem; }
        .size-btn { 
          height: 50px; background: none; border: 1px solid rgba(255,255,255,0.1); 
          border-radius: 4px; color: var(--foreground); cursor: pointer; transition: 0.4s;
          font-size: 0.75rem; font-weight: 600;
        }
        .size-btn:hover { border-color: var(--primary); }
        .size-btn.active { background: var(--foreground); color: var(--background); border-color: var(--foreground); }

        .purchase-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .buy-btn { height: 70px; font-size: 0.9rem; font-weight: 700; letter-spacing: 0.1em; }
        .cart-btn { 
          height: 70px; background: none; border: 1px solid var(--foreground); 
          color: var(--foreground); font-size: 0.8rem; font-weight: 600; 
        }

        .gold-gradient-text {
          background: linear-gradient(135deg, #F2CA50 0%, #D4AF37 50%, #B8860B 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 1024px) {
          .product-container { grid-template-columns: 1fr; gap: 2.5rem; }
          .product-gallery { position: static; }
          .product-title { font-size: 2.5rem; }
        }

        @media (max-width: 768px) {
           .sticky-mobile {
             position: fixed; bottom: 0; left: 0; width: 100%; 
             padding: 1.25rem 1.5rem; background: var(--background);
             border-top: 1px solid rgba(255,255,255,0.05); z-index: 900;
             grid-template-columns: 2fr 1fr; gap: 0.75rem;
             display: flex;
           }
           .buy-btn { flex: 2; height: 60px; font-size: 0.8rem; }
           .cart-btn { flex: 1; height: 60px; font-size: 0.7rem; }
           .product-page { padding-bottom: 12rem; }
           .comparison-box { padding: 1.5rem; }
           .mall-name { font-size: 0.9rem; }
           .mall-price { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
}
