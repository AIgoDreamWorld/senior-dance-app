"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Community() {
  const [activeVideo, setActiveVideo] = useState(0);

  const feeds = [
    {
      id: 0,
      user: "김민지 (20s) & 박성호 (45s)",
      title: "K-라틴 챌린지: 2단계 완성!",
      likes: "1.2k",
      comments: "156",
      tags: ["#3050프라임", "#K댄스", "#라인댄스"],
      videoThumb: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2938&auto=format&fit=crop"
    },
    {
      id: 1,
      user: "이소라 (24s) & 정미숙 (52s)",
      title: "엄마와 딸의 라인댄스 챌린지 💃",
      likes: "3.5k",
      comments: "240",
      tags: ["#가족댄스", "#청춘은지금", "#골드슈즈"],
      videoThumb: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: 2,
      user: "Elite Team (Pro)",
      title: "신상 골드 프로 슈즈 착용 테스트",
      likes: "890",
      comments: "45",
      tags: ["#제품리뷰", "#전문가추천", "#2026Edtion"],
      videoThumb: "https://images.unsplash.com/photo-1516475429286-465d81f91783?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <div className="community-container">
      {/* 🔮 내비게이션 */}
      <nav className="comm-nav glass">
        <Link href="/" className="back-btn">←</Link>
        <div className="comm-tabs">
          <span className="active">인기 챌린지</span>
          <span>최신 피드</span>
        </div>
        <button className="search-btn">🔍</button>
      </nav>

      {/* 🎬 세로형 영상 피드 (Mobile-First Layout) */}
      <main className="video-feed">
        {feeds.map((feed, index) => (
          <section key={feed.id} className="video-card">
            <div className="video-placeholder" style={{ backgroundImage: `url(${feed.videoThumb})` }}>
               <div className="play-overlay">▶</div>
            </div>
            
            {/* 영상 위 정보 레이어 */}
            <div className="video-info-layer">
              <div className="user-profile">
                <div className="avatar"></div>
                <div className="user-meta">
                  <span className="user-name">{feed.user}</span>
                  <button className="follow-btn">팔로우</button>
                </div>
              </div>
              <h2 className="video-title">{feed.title}</h2>
              <div className="tag-cloud">
                {feed.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>

            {/* 측면 액션 버튼 */}
            <aside className="side-actions">
              <div className="action-item">
                <div className="icon-circle">❤️</div>
                <span>{feed.likes}</span>
              </div>
              <div className="action-item">
                <div className="icon-circle">💬</div>
                <span>{feed.comments}</span>
              </div>
              <div className="action-item">
                <div className="icon-circle">🔄</div>
                <span>공유</span>
              </div>
            </aside>
          </section>
        ))}
      </main>

      {/* 🚀 고정 업로드 버튼 */}
      <button className="btn-upload gold-gradient">나도 챌린지 도전하기 +</button>

      <style jsx>{`
        .community-container { background: #000; color: #fff; height: 100vh; overflow: hidden; position: relative; }
        
        .comm-nav { position: fixed; top: 0; width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 2rem; z-index: 100; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .back-btn { font-size: 2rem; color: #fff; text-decoration: none; }
        .comm-tabs { display: flex; gap: 2rem; font-weight: 700; font-size: 1.1rem; }
        .comm-tabs .active { color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 5px; }

        .video-feed { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }
        .video-card { height: 100vh; width: 100%; position: relative; scroll-snap-align: start; }
        
        .video-placeholder { 
          width: 100%; height: 100%; background-position: center; background-size: cover; 
          display: flex; align-items: center; justify-content: center;
        }
        .play-overlay { font-size: 5rem; opacity: 0.5; color: #fff; }

        .video-info-layer { position: absolute; bottom: 120px; left: 1.5rem; right: 80px; z-index: 10; font-family: 'Inter', sans-serif; }
        .user-profile { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .avatar { width: 50px; height: 50px; border-radius: 50%; background: var(--primary); border: 2px solid #fff; }
        .user-name { font-weight: 700; font-size: 1.2rem; }
        .follow-btn { background: var(--primary); border: none; color: #000; padding: 0.3rem 0.8rem; border-radius: 5px; font-weight: 800; font-size: 0.85rem; }
        .video-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; text-shadow: 0 2px 10px rgba(0,0,0,0.8); }
        .tag-cloud { display: flex; gap: 0.8rem; }
        .tag { color: var(--primary); font-weight: 600; font-size: 0.9rem; }

        .side-actions { position: absolute; right: 1rem; bottom: 120px; display: flex; flex-direction: column; gap: 2rem; align-items: center; }
        .action-item { text-align: center; font-size: 0.9rem; }
        .icon-circle { width: 55px; height: 55px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 5px; cursor: pointer; }

        .btn-upload { position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); width: 85%; max-width: 400px; height: 65px; border-radius: 20px; border: none; color: #000; font-size: 1.3rem; font-weight: 900; box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4); z-index: 100; cursor: pointer; transition: transform 0.2s; }
        .btn-upload:active { transform: translateX(-50%) scale(0.95); }

        @media (min-width: 900px) {
           .video-card { max-width: 450px; margin: 0 auto; border-left: 1px solid #333; border-right: 1px solid #333; }
        }
      `}</style>
    </div>
  );
}
