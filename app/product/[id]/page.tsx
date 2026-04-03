"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import EditorialHeader from '@/components/EditorialHeader';
import SanctuaryNav from '@/components/SanctuaryNav';

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('245');

  // 제품 데이터베이스 (가성비 아이템 포함)
  const productData: any = {
    'essential-01': {
      name: "라라 디바즈 초경량 메쉬 댄스화",
      price: "26,400",
      category: "에센셜 / 슈즈",
      description: "통기성이 뛰어난 메쉬 소재와 에어쿠션으로 장시간 댄스에도 발이 편안합니다. 입문자분들이 가장 많이 찾는 가성비 독보적 1위 모델입니다.",
      features: [
        "240g 초경량 설계",
        "충격 흡수용 에어쿠션 기본 탑재",
        "사면 메쉬 소재로 쾌적한 통기성",
        "유연한 밑창으로 자유로운 턴 가능"
      ],
      sizes: ['225', '230', '235', '240', '245', '250', '255'],
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop",
      malls: [
        { name: '쿠팡 (와우)', price: '₩26,400', isCheapest: true, icon: '🚀', url: 'https://www.coupang.com/vp/products/6532840505', score: 4.8, clicks: 1250 },
        { name: '네이버 쇼핑', price: '₩28,500', isCheapest: false, icon: 'N', url: 'https://smartstore.naver.com/laradivaz/products/6703554664', score: 4.9, clicks: 890 },
        { name: '11번가', price: '₩29,900', isCheapest: false, icon: '11', url: 'https://www.11st.co.kr/products/4472391036', score: 4.5, clicks: 420 }
      ]
    },
    'essential-02': {
      name: "TS스포츠 알롱제 A1 댄스화",
      price: "28,900",
      category: "에센셜 / 슈즈",
      description: "한국인 발 모양에 최적화된 설계로 발 볼이 넓어도 편안합니다. 국내 강사진들이 가장 많이 추천하는 실속형 베스트셀러입니다.",
      features: [
        "전족부 스트레치 가죽 적용",
        "내마모성이 강한 캔버스 밑창",
        "발볼 너비 조절 기능",
        "국내 생산으로 믿을 수 있는 품질"
      ],
      sizes: ['230', '235', '240', '245', '250', '255', '260'],
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      malls: [
        { name: '네이버 스토어', price: '₩28,900', isCheapest: true, icon: 'N', url: 'https://smartstore.naver.com/tsdance/products/510103759', score: 5.0, clicks: 2100 },
        { name: '쿠팡', price: '₩31,200', isCheapest: false, icon: '🚀', url: 'https://www.coupang.com/vp/products/128362681', score: 4.7, clicks: 1450 },
        { name: '11번가', price: '₩33,000', isCheapest: false, icon: '11', url: 'https://www.11st.co.kr/products/11364536', score: 4.4, clicks: 310 }
      ]
    },
    'shoes-1': {
      name: "엘리트 에어 피벗 v2",
      price: "189,000",
      category: "프리미엄 / 슈즈",
      description: "시니어 라인댄스의 모든 무브먼트를 고려하여 설계되었습니다. 독자적인 'Air-Pivot' 기술로 회전 시 무릎 부담을 최소화하며, 프리미엄 옵시디언 가죽으로 격조 높은 스타일을 완성합니다.",
      features: [
        "무릎 관절 보호를 위한 저마찰 피벗 포인트",
        "장시간 착용에도 피로감이 없는 인체공학적 인솔",
        "통기성이 뛰어난 엘라스틱 메쉬 라이닝",
        "2.2 에디션 한정 골드 스티치 디테일"
      ],
      sizes: ['235', '240', '245', '250', '255', '260'],
      img: "/dance_cards_detailed_view_1775029378812.png",
      malls: [
        { name: 'Capezio 공식', price: '₩189,000', isCheapest: true, icon: 'C', url: 'https://www.capezio.com/rock-it-dane-sneaker', score: 4.9, clicks: 520 },
        { name: '신세계몰', price: '₩195,000', isCheapest: false, icon: 'S', url: 'https://www.ssg.com/item/itemView.ssg?itemId=1000523277317', score: 4.8, clicks: 310 }
      ]
    }
  };

  const product = productData[id as string] || productData['shoes-1'];

  return (
    <div className="product-page">
      <EditorialHeader />
      
      <main className="product-container container">
        {/* 🖼️ 이미지 섹션 */}
        <div className="product-gallery">
          <div className="main-stage tonal-lift-high scroll-reveal">
            <img src={product.img} alt={product.name} className="main-image" />
            <div className="staged-label label-caps">{product.category}</div>
          </div>
          <div className="gallery-thumbs scroll-hide">
             {[1,2,3].map(i => <div key={i} className="thumb-frame tonal-lift-low"></div>)}
          </div>
        </div>

        {/* 📝 상세 정보 섹션 */}
        <div className="product-details editorial-meta">
          <div className="brand-breadcrumb label-caps accent-color">쇼핑 / {product.category}</div>
          <h1 className="display-text product-title gold-gradient-text">{product.name}</h1>
          <div className="price-tag display-text">₩{product.price} <span className="starting-label">원부터</span></div>
          
          <p className="product-desc dim-text">{product.description}</p>
          
          {/* 📊 쇼핑몰 최저가 비교 (신규 추가) */}
          <div id="lowest-price-section" className="comparison-box glass-card">
            <h4 className="label-caps spec-title">📊 실시간 최저가 및 구매 만족도</h4>
            <div className="mall-list">
              {product.malls.map((mall: any, idx: number) => (
                <a 
                  key={idx} 
                  href={mall.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  className={`mall-item ${mall.isCheapest ? 'winner' : ''}`}
                >
                  <div className="mall-info">
                    <span className="mall-icon">{mall.icon}</span>
                    <div>
                      <div className="mall-name">{mall.name}</div>
                      <div className="mall-score-row">
                        <span className="star-rating">★ {mall.score}</span>
                        <span className="click-count dim-text">클릭 {mall.clicks}</span>
                      </div>
                    </div>
                  </div>
                  <div className="price-info">
                    <div className="price-stack">
                      <span className="mall-price">{mall.price}</span>
                      {mall.isCheapest && <span className="winner-badge">최저가</span>}
                    </div>
                    <span className="external-arrow">↗</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="update-time dim-text">최근 업데이트: {new Date().toLocaleTimeString()} (실시간 동기화 중)</p>
          </div>

          <div className="detail-specs">
            <h4 className="label-caps spec-title">기술 사양</h4>
            <ul className="spec-list">
              {product.features.map((f: string) => <li key={f} className="label-caps spec-item">{f}</li>)}
            </ul>
          </div>

          <div className="size-selector">
            <h4 className="label-caps spec-title">사이즈 선택</h4>
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
               onClick={() => document.getElementById('lowest-price-section')?.scrollIntoView({ behavior: 'smooth' })}
             >
               최저가로 바로 이동
             </button>
             <button 
               className="btn-stitch-secondary cart-btn pulse-on-click"
               onClick={() => alert('내 리스트에 추가되었습니다! ✨')}
             >
               내 리스트에 담기
             </button>
          </div>
        </div>
      </main>

      <SanctuaryNav />

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
        .product-title { font-size: 3rem; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.01em; font-weight: 300; }
        .price-tag { font-size: 2rem; font-weight: 800; margin-bottom: 3rem; opacity: 0.9; }
        .starting-label { font-size: 0.9rem; font-weight: 300; opacity: 0.5; }
        .product-desc { line-height: 1.8; margin-bottom: 4rem; font-size: 1.1rem; }

        /* 쇼핑몰 비교 디자인 */
        .comparison-box { padding: 2rem; margin-bottom: 4rem; border: 1px solid rgba(255,255,255,0.05); }
        .mall-list { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .mall-item { 
          display: flex; justify-content: space-between; align-items: center; 
          padding: 1.2rem; background: rgba(255,255,255,0.02); border-radius: 4px; border: 1px solid transparent; 
          transition: 0.3s; text-decoration: none; color: inherit; cursor: pointer;
        }
        .mall-item:hover { 
          background: rgba(255,255,255,0.08); transform: translateY(-2px);
          border-color: rgba(255,255,255,0.1);
        }
        .mall-item.winner { background: rgba(255,215,0,0.05); border-color: rgba(255,215,0,0.2); }
        .mall-item.winner:hover { background: rgba(255,215,0,0.1); }
        
        .mall-info { display: flex; align-items: center; gap: 1rem; }
        .mall-icon { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.1); border-radius: 50%; font-size: 0.7rem; font-weight: 900; }
        .mall-name { font-size: 1rem; opacity: 0.8; }
        .price-info { display: flex; align-items: center; gap: 1rem; }
        .mall-price { font-weight: 700; }
        .winner-badge { padding: 0.2rem 0.6rem; background: var(--primary); color: #000; font-size: 0.6rem; font-weight: 900; border-radius: 2px; }
        .external-arrow { font-size: 0.8rem; opacity: 0.3; transition: 0.3s; }
        .mall-item:hover .external-arrow { opacity: 1; transform: translate(2px, -2px); color: var(--primary); }
        .update-time { font-size: 0.7rem; margin-top: 1.5rem; text-align: right; opacity: 0.4; }

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

        @media (max-width: 1024px) {
           .product-container { grid-template-columns: 1fr; gap: 6rem; }
           .product-gallery { position: relative; top: 0; }
        }

        @media (max-width: 768px) {
           .product-title { font-size: 2.25rem; }
           .price-tag { font-size: 1.75rem; }
           .size-grid { grid-template-columns: repeat(3, 1fr); }
           .sticky-mobile { position: fixed; bottom: 8rem; left: 0; width: 100%; background: var(--background); padding: 1.5rem var(--gutter); z-index: 100; border-top: 1px solid rgba(255,255,255,0.05); }
        }
      `}</style>
    </div>
  );
}
