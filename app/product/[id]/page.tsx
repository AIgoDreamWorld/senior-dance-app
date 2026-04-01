"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const products = {
    'ld-shoes-01': {
      name: "에어 피벗 라인댄스 스니커즈",
      price: 128000,
      description: "라인댄스 숙련자를 위해 설계된 에어 피벗 시스템이 탑재되었습니다. 360도 회전 시 무릎에 가해지는 충격을 40% 이상 줄여주며, 초경량 소재로 장시간 착용에도 편안합니다.",
      specs: ["피벗 포인트 특수 밑창", "고탄성 에어 쿠션", "통기성 메쉬 갑피"],
      sizes: [230, 235, 240, 245, 250, 255, 260],
      img: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=2940&auto=format&fit=crop",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스화"
    },
    'ld-boots-02': {
      name: "카우보이 프로 아치 부츠",
      price: 245000,
      description: "정통 라인댄스의 멋을 살리면서도 춤에 최적화된 아치 서포트 기능을 갖춘 프리미엄 부츠입니다. 천연 소가죽의 유연함이 발의 동작을 완벽하게 따라갑니다.",
      specs: ["최고급 천연 소가죽", "댄스 전용 논슬립 굽", "발목 보호 패딩"],
      sizes: [230, 235, 240, 245, 250, 255, 260],
      img: "https://images.unsplash.com/photo-1551107641-a1ac51707923?q=80&w=2835&auto=format&fit=crop",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스부츠"
    },
    'ld-skirt-03': {
      name: "쉬폰 플로잉 랩스커트",
      price: 45000,
      description: "동작의 우아함을 극대화해주는 쉬폰 소재의 랩스커트입니다. 회전 시 퍼지는 실루엣이 예술적이며, 신축성 좋은 허리 밴드로 체형에 관계없이 편안합니다.",
      specs: ["투명도 낮은 고밀도 쉬폰", "정전기 방지 처리", "원터치 랩 스타일"],
      sizes: ["FREE"],
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2820&auto=format&fit=crop",
      externalLink: "https://www.coupang.com/np/search?q=라인댄스치마"
    },
    'ld-top-04': {
      name: "퍼포먼스 메쉬 레이어드 탑",
      price: 68000,
      description: "격렬한 움직임에도 쾌적함을 유지해주는 기능성 퍼포먼스 탑입니다. 세련된 메쉬 레이어드 디자인으로 체형은 보정해주면서 팔의 가동범위를 방해하지 않습니다.",
      specs: ["속건성 메쉬 소재", "자외선 차단 기능", "입체 패턴 설계"],
      sizes: ["S", "M", "L", "XL"],
      img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2940&auto=format&fit=crop",
      externalLink: "https://www.coupang.com/np/search?q=댄스기능성상의"
    }
  };

  const product = products[params.id as keyof typeof products] || products['ld-shoes-01'];

  const handleExternalPurchase = () => {
    if (!selectedSize && product.sizes[0] !== "FREE") {
      alert("사이즈를 선택해 주세요.");
      return;
    }
    window.open(product.externalLink, '_blank');
  };

  return (
    <div className="app-container">
      {/* 🔮 STITCH NAV - FLOATING */}
      <nav className={`detail-nav ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="back-link pulse-on-click">
            <span className="icon">←</span>
            <span className="label-caps">BACK</span>
          </Link>
          <div className="logo label-caps gold-gradient-text">PRIME COLLECTION</div>
          <button className="icon-btn pulse-on-click">❤️</button>
        </div>
      </nav>

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
            <div className="label-caps opacity-60">PERFORMANCE GEAR</div>
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
              
              <div className="editorial-footer">
                <div className="trust-item">
                  <div className="icon">🛡️</div>
                  <div className="txt">
                    <div className="label-caps">VERIFIED</div>
                    <p>정품 보증 및 품질 검수 완료</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* 🚀 STITCH ACTION BAR */}
      <footer className="footer-action-layer">
        <div className="action-bar-inner glass-floating">
           <button className="btn-stitch-secondary contact-btn" onClick={() => window.open('https://pf.kakao.com/')}>CONTACT</button>
          <button className="btn-stitch-primary buy-btn" onClick={handleExternalPurchase}>
            {selectedSize ? `PURCHASE ${selectedSize}` : (product.sizes[0] === "FREE" ? "PURCHASE" : "SELECT TO BUY")}
          </button>
        </div>
      </footer>

      <style jsx>{`
        .app-container { min-height: 100vh; padding-bottom: 140px; }
        .container { padding: 0 var(--space-md); }

        .detail-nav { 
          position: fixed; top: 0; left: 0; width: 100%; z-index: 1000;
          padding: 1.5rem 0; transition: 0.5s var(--ease-stitch);
        }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; padding: 0 var(--space-md); }
        .detail-nav.scrolled { padding: 1rem 0; }
        .back-link { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: #fff; }
        .logo { font-weight: 800; font-size: 0.9rem; }
        .icon-btn { background: none; border: none; font-size: 1.25rem; color: #fff; cursor: pointer; }

        .immersive-visual { height: 75vh; position: relative; overflow: hidden; }
        .visual-wrap { width: 100%; height: 100%; position: relative; }
        .visual-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .visual-vignette-bottom {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 40%;
          background: linear-gradient(to top, var(--background) 20%, transparent 100%);
        }
        .floating-label { position: absolute; bottom: 3rem; left: var(--space-md); }

        .product-intel { margin-top: -5vh; position: relative; z-index: 10; padding-bottom: 4rem; }
        .intel-header { margin-bottom: 4rem; }
        .product-title { font-size: 3.5rem; margin: 1rem 0 2rem; max-width: 800px; line-height: 1.1; }
        .price-box { display: flex; align-items: baseline; gap: 1.5rem; }
        .price { font-size: 2.5rem; color: var(--primary); }

        .intel-grid { display: grid; grid-template-columns: 1fr 380px; gap: 6rem; align-items: start; }
        .section-tag { color: var(--primary); margin-bottom: 2rem; letter-spacing: 0.2em; }
        .description-text { font-size: 1.25rem; line-height: 2.2; opacity: 0.7; margin-bottom: 5rem; word-break: keep-all; font-weight: 300; }
        
        .spec-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .spec-card { padding: 2.5rem 2rem; border-radius: 4px; display: flex; align-items: center; gap: 1rem; }
        .spec-card .dot { width: 4px; height: 4px; background: var(--primary); border-radius: 50%; opacity: 0.6; }

        .purchase-side { position: sticky; top: 120px; }
        .side-card { padding: 3rem 2rem; border-radius: 8px; }
        .size-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem; }
        .size-btn { 
          height: 54px; border: none; color: #fff; cursor: pointer; transition: 0.4s var(--ease-stitch);
          display: flex; align-items: center; justify-content: center; border-radius: 2px;
        }
        .size-btn.active { background: var(--primary); color: var(--on-primary); box-shadow: 0 10px 20px -10px var(--primary); }
        .size-btn:hover:not(.active) { transform: translateY(-3px); }

        .editorial-footer { margin-top: 3rem; padding: 0 1rem; }
        .trust-item { display: flex; gap: 1rem; align-items: center; }
        .trust-item .icon { font-size: 1.5rem; }
        .trust-item p { font-size: 0.8rem; opacity: 0.5; margin-top: 0.25rem; }

        .footer-action-layer {
          position: fixed; bottom: 2rem; left: 0; right: 0; z-index: 2000;
          display: flex; justify-content: center; padding: 0 1.5rem;
        }
        .action-bar-inner {
          width: 100%; max-width: 600px; display: flex; gap: 1rem; padding: 0.75rem;
        }
        .buy-btn { flex-grow: 1; }
        .contact-btn { min-width: 120px; }

        @media (max-width: 1024px) {
          .intel-grid { grid-template-columns: 1fr; gap: 4rem; }
          .purchase-side { position: relative; top: 0; }
          .immersive-visual { height: 60vh; }
          .product-title { font-size: 2.75rem; }
        }

        @media (max-width: 768px) {
          .product-title { font-size: 2.25rem; }
          .price { font-size: 1.75rem; }
          .intel-header { margin-bottom: 3rem; }
          .spec-grid { grid-template-columns: 1fr; }
          .description-text { font-size: 1.15rem; }
          .action-bar-inner { padding: 1rem; gap: 0.75rem; }
          .contact-btn { display: none; }
        }
      `}</style>
    </div>
  );
}
