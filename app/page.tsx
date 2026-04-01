"use client";

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 🌑 전역 배경 효과 */}
      <div className="sanctuary-glow"></div>

      {/* 🎭 비대칭 스토리텔링 히어로 */}
      <section className="monolith-hero">
        <div className="hero-background">
          <img 
            src="premium_korean_dance_community_1775029746666.png" 
            alt="Cyber-Zen Performance" 
            className="hero-media"
          />
          <div className="media-overlay"></div>
        </div>
        
        <div className="hero-content container">
          <div className="editorial-meta reveal-text">
            <span className="label-caps">K-DANCE PRIME 큐레이션 / 2026 에디션</span>
          </div>
          <h1 className="display-text hero-title">
            <span className="reveal-text">삶의 정교한</span><br/>
            <span className="reveal-text gold-gradient-text italic">리듬</span>
          </h1>
          
          <div className="hero-bottom flex-between">
            <div className="discovery-actions">
              <Link href="/community" className="btn-stitch-primary">피드 둘러보기</Link>
              <Link href="/shop" className="btn-stitch-secondary">룩북 보기</Link>
            </div>
            <div className="scroll-indicator label-caps">스크롤하여 발견하기 ↓</div>
          </div>
        </div>
      </section>

      {/* 🎬 댄스 버티컬 - 젠 쇼츠 */}
      <section className="editorial-section">
        <div className="section-head container">
          <div className="label-caps accent-color">01 / 라이브 피드</div>
          <div className="flex-between align-end">
            <h2 className="display-text section-title">Zen 쇼츠</h2>
            <Link href="/community" className="label-caps text-link">전체 보기 →</Link>
          </div>
        </div>
        
        <div className="shorts-slider scroll-hide">
          {[
            { id: 1, title: '라인의 영혼', tag: '프리미엄', img: 'youthful_passionate_dancer_model_1775027942388.png' },
            { id: 2, title: '옵시디언 리듬', tag: '리미티드', img: 'senior_dance_model_exclusive_1775027245869.png' },
            { id: 3, title: '골든 펄스', tag: '엘리트', img: 'korean_community_dancing_mix_1775028456302.png' }
          ].map((item) => (
            <div key={item.id} className="short-editorial-card tonal-lift-low">
              <div className="card-visual">
                <img src={item.img} alt={item.title} />
                <div className="card-overlay">
                  <span className="label-caps card-tag">{item.tag}</span>
                  <h3 className="display-text card-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 👞 엘리트 몰 - 큐레이션 그리드 */}
      <section className="editorial-section last-section">
        <div className="section-head container">
           <div className="label-caps accent-color">02 / 큐레이션</div>
           <h2 className="display-text section-title">엘리트 에센셜</h2>
        </div>
        
        <div className="curation-list container">
          {[
            { id: 'essential-01', name: '라라 디바즈 메쉬 댄스화', desc: '초경량 통기성으로 하루 종일 편안하게.', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop', tag: '가성비 1위' },
            { id: 'shoes-01', name: '옵시디언 프로', desc: '전문 가죽 공예로 탄생한 최상급 슈즈.', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop', tag: 'BEST SELLER' },
            { id: 'essential-02', name: 'TS스포츠 알롱제 A1', desc: '한국인 발 체형에 맞춘 단체복 정석.', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop', tag: '재구매 1위' },
            { id: 'wear-01', name: '젠 에디션 퍼포먼스', desc: '룩과 퍼포먼스를 모두 잡은 시그니처.', img: 'https://images.unsplash.com/photo-1539109132314-347596ad99e1?q=80&w=800&auto=format&fit=crop', tag: 'EDITORIAL' }
          ].map((p) => (
            <Link key={p.id} href={`/product/${p.id}`} className="curation-card tonal-lift-high pulse-on-click">
              <div className="curation-visual">
                <div className="circle-frame">
                  <img src={p.img} alt={p.name} />
                </div>
              </div>
              <div className="curation-info">
                <span className="label-caps gold-gradient-text">{p.tag}</span>
                <h3 className="display-text curation-name">{p.name}</h3>
                <p className="dim-text">{p.desc}</p>
                <span className="label-button label-caps">지금 소장하기</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✉️ 푸터 */}
      <footer className="editorial-footer container">
        <div className="footer-line"></div>
        <div className="footer-content">
          <h2 className="display-text italic">"시니어 리듬의 <br/>미래를 정의하다."</h2>
          <div className="footer-meta flex-between">
            <span className="label-caps">© 2026 K-DANCE PRIME</span>
            <span className="label-caps">개인정보처리방침 / 이용약관</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .container {
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }

        .flex-between { display: flex; justify-content: space-between; align-items: center; }
        .align-end { align-items: flex-end; }
        .italic { font-style: italic; }

        /* Hero Section */
        .monolith-hero {
          height: 100vh; position: relative; display: flex; align-items: flex-end; padding-bottom: 6rem;
        }
        .hero-background { position: absolute; inset: 0; z-index: 1; }
        .hero-media { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.5) contrast(1.1); }
        .media-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, var(--background) 10%, rgba(13,14,16,0.2) 50%, rgba(13,14,16,0.6) 100%);
        }
        .hero-content { position: relative; z-index: 10; width: 100%; }
        .hero-title { font-size: clamp(3.5rem, 10vw, 6rem); margin: 2rem 0 4rem; line-height: 1.1; }
        .hero-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 3rem; }
        .discovery-actions { display: flex; gap: 1.5rem; }
        .scroll-indicator { opacity: 0.4; font-size: 0.65rem; }

        /* General Sections */
        .editorial-section { padding-top: var(--section-gap); }
        .section-head { margin-bottom: 4rem; }
        .section-title { font-size: clamp(2rem, 8vw, 3rem); margin-top: 0.5rem; }
        .accent-color { color: var(--primary); }

        /* Shorts Slider */
        .shorts-slider {
          display: flex; gap: 2rem; overflow-x: auto; padding: 0 var(--gutter) 4rem;
          scroll-snap-type: x mandatory;
        }
        .short-editorial-card {
          min-width: 320px; height: 560px; flex-shrink: 0;
          border-radius: 4px; overflow: hidden; scroll-snap-align: start;
          transition: 0.6s var(--ease-stitch);
        }
        .card-visual { height: 100%; position: relative; }
        .card-visual img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: 1.2s var(--ease-stitch); }
        .card-overlay {
          position: absolute; inset: 0; padding: 2.5rem;
          display: flex; flex-direction: column; justify-content: flex-end;
          background: linear-gradient(to top, var(--background) 0%, transparent 60%);
        }
        .card-title { font-size: 1.75rem; margin-top: 0.5rem; font-weight: 300; }
        .short-editorial-card:hover img { transform: scale(1.08); opacity: 1; }

        /* Curation Grid */
        .curation-list { display: grid; gap: 3rem; margin-bottom: var(--section-gap); }
        .curation-card {
           display: flex; align-items: center; gap: 2.5rem; padding: 3rem 2rem;
           border-radius: 2px; transition: var(--transition-fast);
        }
        .circle-frame {
           width: 140px; height: 140px; border-radius: 50%; overflow: hidden;
           background: var(--surface-3); box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .circle-frame img { width: 100%; height: 100%; object-fit: cover; }
        .curation-info { flex: 1; }
        .curation-name { font-size: 1.5rem; margin: 0.5rem 0 1rem; }
        .dim-text { color: var(--on-surface-muted); line-height: 1.6; margin-bottom: 2rem; }
        .label-button { color: var(--primary); border-bottom: 1px solid var(--primary); padding-bottom: 4px; cursor: pointer; }

        /* Footer */
        .editorial-footer { padding-bottom: 20vh; }
        .footer-line { width: 100%; height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 6rem; }
        .footer-content h2 { font-size: 3rem; line-height: 1.2; margin-bottom: 4rem; text-align: left; }
        .footer-meta { opacity: 0.3; font-size: 0.65rem; }

        @media (max-width: 768px) {
          .monolith-hero { padding-bottom: 4rem; }
          .hero-title { font-size: 3rem; margin-bottom: 3rem; }
          .discovery-actions { flex-direction: column; width: 100%; }
          .curation-card { flex-direction: column; text-align: center; gap: 1.5rem; }
          .circle-frame { width: 180px; height: 180px; }
          .footer-content h2 { font-size: 2rem; }
        }
      `}</style>
    </>
  );
}
