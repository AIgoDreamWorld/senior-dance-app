"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function EliteMall() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const categories = ['전체', '슈즈', '의류', '액세서리', '에센셜'];

  const goods = [
    {
      id: 'essential-01',
      title: '라라 디바즈 초경량 메쉬 댄스화',
      price: '₩26,400',
      category: '에센셜',
      img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
      tag: '최저가 보장',
      description: '통기성이 뛰어난 메쉬 소재와 에어쿠션으로 장시간 댄스에도 발이 편안합니다.'
    },
    {
      id: 'essential-02',
      title: 'TS스포츠 알롱제 A1 라인댄스화',
      price: '₩28,900',
      category: '에센셜',
      img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
      tag: '재구매 1위',
      description: '한국인 발 모양에 최적화된 설계로 단체 주문이 가장 많은 실속형 모델입니다.'
    },
    {
      id: 'essential-03',
      title: '활동성 극대화 댄스 치마바지 (스커트팬츠)',
      price: '₩12,900',
      category: '의류',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
      tag: '가성비',
      description: '찰랑거리는 쉬폰 소재로 체형은 커버하고 스텝은 더 가볍게 만들어줍니다.'
    },
    {
      id: 'shoes-01',
      title: '옵시디언 프로 라인댄스화',
      price: '₩185,000',
      category: '슈즈',
      img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
      tag: 'PREMIUM',
      description: '이탈리아산 프리미엄 가죽과 인체공학적 설계가 적용된 전문가용 댄스화입니다.'
    },
    {
      id: 'wear-01',
      title: '젠 에디션 퍼포먼스 슈트',
      price: '₩128,000',
      category: '의류',
      img: 'https://images.unsplash.com/photo-1539109132314-347596ad99e1?q=80&w=800&auto=format&fit=crop',
      tag: 'EDITORIAL',
      description: '세련된 실루엣과 통기성을 동시에 잡은 에디토리얼 라인의 대표 의상입니다.'
    },
    {
      id: 'acc-01',
      title: '실버 라이닝 발목 보호대',
      price: '₩15,000',
      category: '액세서리',
      img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop',
      tag: '필수템',
      description: '부상 방지와 안정적인 턴을 도와주는 고탄성 서포터입니다.'
    },
    {
      id: 'essential-04',
      title: '컴포트 스트레치 밴드',
      price: '₩8,900',
      category: '에센셜',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
      tag: '가성비',
      description: '코어 강화와 유연성 향상을 위한 라인댄스 입문자 필수 밴드입니다.'
    }
  ];

  const filteredProducts = activeCategory === "전체" ? goods : goods.filter(p => p.category === activeCategory);

  return (
    <div className="elite-mall">
      <header className="mall-header container">
        <div className="label-caps accent-color">쇼핑익스피리언스 / 02</div>
        <h1 className="display-text mall-title gold-gradient-text">엘리트 몰</h1>
        
        <div className="category-filter scroll-hide">
          {categories.map(cat => (
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
              <img src={product.img} alt={product.title} />
              <span className="card-badge label-caps">{product.tag}</span>
            </div>
            <div className="product-info">
              <h3 className="display-text product-name">{product.title}</h3>
              <p className="product-desc">{product.description}</p>
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
          background: none; border: none; color: var(--foreground); opacity: 0.3; cursor: pointer; transition: 0.4s;
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

        .product-info { padding: 1.5rem 0; color: var(--foreground); }
        .product-name { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 700; opacity: 1; letter-spacing: -0.01em; }
        .product-desc { font-size: 0.85rem; opacity: 0.6; margin-bottom: 1.5rem; line-height: 1.5; font-weight: 300; }
        .product-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--surface-ghost); padding-top: 1rem; }
        .price { font-size: 0.9rem; letter-spacing: 0.02em; font-weight: 700; color: var(--primary); }
        .buy-now { font-size: 0.7rem; border-bottom: 1px solid var(--surface-ghost); padding-bottom: 2px; transition: 0.3s; opacity: 0.8; }

        .product-card:hover img { transform: scale(1.05); opacity: 1; }
        .product-card:hover .buy-now { color: var(--primary); border-color: var(--primary); opacity: 1; }

        @media (max-width: 768px) {
           .mall-title { font-size: 3rem; }
           .product-grid { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
           .category-filter { gap: 1.5rem; font-size: 0.7rem; }
        }
      `}</style>
    </div>
  );
}
