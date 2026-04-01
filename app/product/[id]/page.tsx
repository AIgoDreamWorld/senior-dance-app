"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('245');

  // 제품 데이터 (실제 데이터베이스 연동 전 모의 데이터)
  const product = {
    id: 'shoes-1',
    name: "엘리트 에어 피벗 v2",
    price: "189,000",
    description: "시니어 라인댄스의 모든 무브먼트를 고려하여 설계되었습니다. 독자적인 'Air-Pivot' 기술로 회전 시 무릎 부담을 최소화하며, 프리미엄 옵시디언 가죽으로 격조 높은 스타일을 완성합니다.",
    features: [
      "무릎 관절 보호를 위한 저마찰 피벗 포인트",
      "장시간 착용에도 피로감이 없는 인체공학적 인솔",
      "통기성이 뛰어난 엘라스틱 메쉬 라이닝",
      "2.2 에디션 한정 골드 스티치 디테일"
    ],
    sizes: ['235', '240', '245', '250', '255', '260'],
    img: "/dance_cards_detailed_view_1775029378812.png"
  };

  return (
    <div className="product-page">
      <main className="product-container container">
        {/* 🖼️ 이미지 섹션 */}
        <div className="product-gallery">
          <div className="main-stage tonal-lift-high scroll-reveal">
            <img src={product.img} alt={product.name} className="main-image" />
            <div className="staged-label label-caps">전용 상품 전시 중</div>
          </div>
          <div className="gallery-thumbs scroll-hide">
             {[1,2,3].map(i => <div key={i} className="thumb-frame tonal-lift-low"></div>)}
          </div>
        </div>

        {/* 📝 상세 정보 섹션 */}
        <div className="product-details editorial-meta">
          <div className="brand-breadcrumb label-caps accent-color">쇼핑 / 슈즈 / 엘리트</div>
          <h1 className="display-text product-title gold-gradient-text">{product.name}</h1>
          <div className="price-tag display-text">₩{product.price}</div>
          
          <p className="product-desc dim-text">{product.description}</p>
          
          <div className="detail-specs">
            <h4 className="label-caps spec-title">기술 사양</h4>
            <ul className="spec-list">
              {product.features.map(f => <li key={f} className="label-caps spec-item">{f}</li>)}
            </ul>
          </div>

          <div className="size-selector">
            <h4 className="label-caps spec-title">사이즈 선택</h4>
            <div className="size-grid">
              {product.sizes.map(size => (
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
             <button className="btn-stitch-primary buy-btn pulse-on-click">지금 바로 소장하기</button>
             <button className="btn-stitch-secondary cart-btn pulse-on-click">장바구니 담기</button>
          </div>
        </div>
      </main>

      {/* 🔮 연관 상품 추천 */}
      <section className="recommendations container">
         <div className="section-head flex-between">
           <h2 className="display-text h2-small gold-gradient-text">함께 추천하는 셋업</h2>
           <Link href="/shop" className="label-caps text-link">전체 보기 →</Link>
         </div>
         <div className="rec-grid">
            <div className="rec-card tonal-lift-low"></div>
            <div className="rec-card tonal-lift-low"></div>
         </div>
      </section>

      <style jsx>{`
        .product-page { padding-top: 10rem; padding-bottom: 20vh; background: var(--background); }
        .container { padding: 0 var(--gutter); }

        .product-container {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 6rem; margin-bottom: 15rem;
        }

        .product-gallery { position: sticky; top: 10rem; }
        .main-stage {
           aspect-ratio: 4/5; background: var(--surface-3); border-radius: 4px; border: 1px solid rgba(255,255,255,0.05);
           position: relative; overflow: hidden;
        }
        .main-image { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; }
        .staged-label {
           position: absolute; bottom: 2rem; left: 2rem; font-size: 0.55rem;
           color: var(--primary); background: rgba(0,0,0,0.4); backdrop-filter: blur(8px);
           padding: 0.4rem 0.8rem; border-radius: 2px;
        }

        .gallery-thumbs { display: flex; gap: 1rem; margin-top: 2rem; }
        .thumb-frame { width: 80px; height: 100px; background: var(--surface-2); border-radius: 2px; flex-shrink: 0; }

        .brand-breadcrumb { margin-bottom: 1.5rem; letter-spacing: 0.1em; }
        .product-title { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.01em; font-weight: 300; }
        .price-tag { font-size: 2.25rem; font-weight: 800; margin-bottom: 3rem; opacity: 0.9; }
        .product-desc { line-height: 1.8; margin-bottom: 4rem; font-size: 1.1rem; }

        .spec-title { font-size: 0.75rem; margin-bottom: 1.5rem; opacity: 0.9; }
        .spec-list { list-style: none; padding: 0; margin-bottom: 4rem; opacity: 0.6; }
        .spec-item { font-size: 0.65rem; margin-bottom: 1rem; padding-left: 1.5rem; position: relative; }
        .spec-item::before { content: '○'; position: absolute; left: 0; color: var(--primary); }

        .size-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 6rem; }
        .size-btn {
           background: none; border: 1px solid rgba(255,255,255,0.1); color: #fff;
           padding: 1.2rem 0; border-radius: 2px; cursor: pointer; transition: 0.3s;
        }
        .size-btn:hover { border-color: #fff; }
        .size-btn.active { background: #fff; color: #000; border-color: #fff; font-weight: 900; }

        .purchase-actions { display: flex; flex-direction: column; gap: 1.5rem; }
        .buy-btn { width: 100%; border-radius: 2px; padding: 1.5rem !important; }
        .cart-btn { width: 100%; border-radius: 2px; padding: 1.5rem !important; opacity: 0.6; }

        .recommendations { margin-top: 10rem; }
        .h2-small { font-size: 2rem; font-weight: 300; }
        .rec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
        .rec-card { aspect-ratio: 4/5; background: var(--surface-1); border-radius: 4px; }

        @media (max-width: 1024px) {
           .product-container { grid-template-columns: 1fr; gap: 6rem; }
           .product-gallery { position: relative; top: 0; }
        }

        @media (max-width: 768px) {
           .product-title { font-size: 2.75rem; }
           .price-tag { font-size: 1.75rem; }
           .size-grid { grid-template-columns: repeat(3, 1fr); }
           .sticky-mobile { position: fixed; bottom: 8rem; left: 0; width: 100%; background: var(--background); padding: 1.5rem var(--gutter); z-index: 100; border-top: 1px solid rgba(255,255,255,0.05); }
        }
      `}</style>
    </div>
  );
}
