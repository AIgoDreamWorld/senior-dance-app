"use client";

import React from 'react';

export default function Profile() {
  const user = {
    name: "AIDreamWorld",
    tier: "프라임 멤버",
    stats: [
      { label: "함께한 날", value: "124일" },
      { label: "챌린지", value: "32개" },
      { label: "콜렉션", value: "4개" }
    ],
    collections: [
      { id: 1, title: "#3050라인댄스", img: "youthful_passionate_dancer_model_1775027942388.png" },
      { id: 2, title: "#엘리트슈즈_착용샷", img: "prime_dance_model_exclusive_1775027245869.png" },
      { id: 3, title: "#부천_정기공연", img: "korean_community_dancing_mix_1775028456302.png" }
    ]
  };

  return (
    <div className="sanctuary-hub">
      <header className="hub-header container">
        <div className="profile-top">
          <div className="avatar-monolith tonal-lift-high pulse-on-click">
            <div className="avatar-inner"></div>
          </div>
          <div className="user-details">
            <span className="label-caps accent-color gold-gradient-text">{user.tier}</span>
            <h1 className="display-text user-name">{user.name}</h1>
            <button className="btn-stitch-secondary label-caps profile-edit">프로필 수정</button>
          </div>
        </div>

        <div className="stats-row">
          {user.stats.map(s => (
            <div key={s.label} className="stat-card tonal-lift-low">
              <span className="label-caps stat-label">{s.label}</span>
              <span className="display-text stat-value">{s.value}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="vault-section container">
        <div className="section-head flex-between">
           <div className="label-caps accent-color">나의 보관함 /03</div>
           <button className="label-caps text-link">새 폴더 +</button>
        </div>
        
        <div className="vault-grid">
           {user.collections.map(c => (
             <div key={c.id} className="vault-item tonal-lift-low">
               <div className="vault-thumb">
                 <img src={c.img} alt={c.title} />
                 <div className="thumb-overlay"></div>
               </div>
               <div className="vault-info">
                 <h3 className="label-caps vault-title">{c.title}</h3>
                 <span className="label-caps vault-meta">미디어 12개</span>
               </div>
             </div>
           ))}
        </div>
      </main>

      <footer className="hub-footer container">
         <div className="footer-line"></div>
         <div className="settings-list">
            <div className="setting-item flex-between pulse-on-click">
               <span className="label-caps">주문 및 배송 조회</span>
               <span className="arrow">→</span>
            </div>
            <div className="setting-item flex-between pulse-on-click">
               <span className="label-caps">관심 상품 목록</span>
               <span className="arrow">→</span>
            </div>
            <div className="setting-item flex-between pulse-on-click">
               <span className="label-caps">고객 센터</span>
               <span className="arrow">→</span>
            </div>
         </div>
      </footer>

      <style jsx>{`
        .sanctuary-hub { padding-top: 10rem; padding-bottom: 20vh; background: var(--background); }
        .container { padding: 0 var(--gutter); }

        .profile-top { display: flex; align-items: center; gap: 3rem; margin-bottom: 5rem; }
        .avatar-monolith {
          width: 140px; height: 180px; background: var(--surface-3); border-radius: 4px;
          position: relative; overflow: hidden;
        }
        .avatar-inner { width: 100%; height: 100%; background: linear-gradient(135deg, #1A1C20 0%, #121316 100%); }
        .user-name { font-size: 3.5rem; margin-top: 0.5rem; margin-bottom: 1.5rem; letter-spacing: -0.01em; font-weight: 300; }
        .profile-edit { padding: 0.6rem 1.2rem; font-size: 0.6rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 2px; }

        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 8rem; }
        .stat-card { padding: 2.5rem; background: var(--surface-1); border-radius: 4px; border: 1px solid rgba(255,255,255,0.03); }
        .stat-label { font-size: 0.6rem; opacity: 0.4; margin-bottom: 0.75rem; display: block; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: var(--primary); }

        .vault-section { margin-bottom: 8rem; }
        .section-head { margin-bottom: 3rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); }

        .vault-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .vault-item { cursor: pointer; transition: 0.4s; }
        .vault-thumb { aspect-ratio: 4/5; overflow: hidden; border-radius: 4px; position: relative; margin-bottom: 1.5rem; }
        .vault-thumb img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); transition: 0.8s; }
        .thumb-overlay { position: absolute; inset: 0; background: linear-gradient(to top, #000 0%, transparent 60%); }
        .vault-info { text-align: left; }
        .vault-title { font-size: 0.75rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; opacity: 0.9; }
        .vault-meta { font-size: 0.55rem; opacity: 0.4; }

        .vault-item:hover img { transform: scale(1.05); filter: brightness(0.9); }

        .footer-line { width: 100%; height: 1px; background: rgba(255,255,255,0.08); margin-bottom: 4rem; }
        .settings-list { display: flex; flex-direction: column; gap: 1rem; }
        .setting-item { padding: 1.5rem 0; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.03); }
        .setting-item:hover { color: var(--primary); }

        @media (max-width: 1024px) {
           .vault-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
           .profile-top { flex-direction: column; text-align: center; gap: 2rem; }
           .avatar-monolith { width: 120px; height: 150px; }
           .user-name { font-size: 2.5rem; }
           .stats-row { grid-template-columns: 1fr; gap: 1rem; }
           .vault-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </div>
  );
}
