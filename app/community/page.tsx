"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Community() {
  const [activeVideo, setActiveVideo] = useState(0);

  const feeds = [
    {
      id: 0,
      user: "김민지 (20대) & 박성호 (40대)",
      title: "K-라틴 챌린지: 2단계 완성!",
      likes: "1.2k",
      comments: "156",
      tags: ["#3050프라임", "#K댄스", "#라인댄스"],
      videoThumb: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2938&auto=format&fit=crop"
    },
    {
      id: 1,
      user: "이소라 (20대) & 정미숙 (50대)",
      title: "엄마와 딸의 라인댄스 챌린지 💃",
      likes: "3.5k",
      comments: "240",
      tags: ["#가족댄스", "#청춘은지금", "#골든슈즈"],
      videoThumb: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2787&auto=format&fit=crop"
    },
    {
      id: 2,
      user: "엘리트 팀 (프로)",
      title: "신상 골드 프로 슈즈 착용 테스트",
      likes: "890",
      comments: "45",
      tags: ["#제품리뷰", "#전문가추천", "#2026에디션"],
      videoThumb: "https://images.unsplash.com/photo-1516475429286-465d81f91783?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <div className="community-feed">
      {/* 🔮 에디토리얼 탭 */}
      <div className="feed-tabs container">
        <button className="tab active label-caps">인기 차트</button>
        <button className="tab label-caps">최신 피드</button>
      </div>

      <main className="vertical-stack">
        {feeds.map((feed) => (
          <section key={feed.id} className="video-card">
            <div className="media-container">
              <img src={feed.videoThumb} alt={feed.title} className="feed-media" />
              <div className="media-overlay-bottom"></div>
              <div className="play-trigger">○</div>
            </div>
            
            <div className="feed-content-overlay">
              <div className="user-block">
                <div className="user-avatar tonal-lift-high pulse-on-click"></div>
                <div className="user-info">
                  <span className="user-name label-caps">{feed.user}</span>
                  <button className="follow-link label-caps gold-gradient-text">팔로우</button>
                </div>
              </div>
              <h2 className="display-text feed-title">{feed.title}</h2>
              <div className="tag-group">
                {feed.tags.map(tag => <span key={tag} className="label-caps tag-item">{tag}</span>)}
              </div>
            </div>

            <aside className="interaction-column">
               <div className="i-hit pulse-on-click">
                  <span className="i-icon">♡</span>
                  <span className="i-label label-caps">{feed.likes}</span>
               </div>
               <div className="i-hit pulse-on-click">
                  <span className="i-icon">◇</span>
                  <span className="i-label label-caps">{feed.comments}</span>
               </div>
               <div className="i-hit pulse-on-click">
                  <span className="i-icon">▢</span>
                  <span className="i-label label-caps">공유</span>
               </div>
            </aside>
          </section>
        ))}
      </main>

      {/* 🚀 업로드 버튼 */}
      <button className="fab-upload btn-stitch-primary pulse-on-click">
         챌린지 참여하기 +
      </button>

      <style jsx>{`
        .community-feed {
          background: #000; color: #fff; height: 100vh; overflow: hidden;
          padding-top: 6rem;
        }

        .container { padding: 0 var(--gutter); }

        .feed-tabs {
          display: flex; gap: 3rem; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 1rem;
        }
        .tab { background: none; border: none; color: #fff; opacity: 0.3; cursor: pointer; transition: 0.4s; }
        .tab.active { opacity: 1; border-bottom: 2px solid var(--primary); }

        .vertical-stack {
          height: calc(100vh - 10rem); overflow-y: auto; scroll-snap-type: y mandatory;
        }
        .vertical-stack::-webkit-scrollbar { display: none; }

        .video-card {
          height: 100%; width: 100%; position: relative; scroll-snap-align: start;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .media-container { width: 100%; height: 100%; position: relative; overflow: hidden; }
        .feed-media { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); }
        .media-overlay-bottom {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #000 0%, transparent 40%);
        }
        .play-trigger {
           position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
           font-size: 4rem; opacity: 0.2; color: #fff; font-weight: 100;
        }

        .feed-content-overlay {
          position: absolute; bottom: 8rem; left: 2rem; right: 8rem; z-index: 10;
        }

        .user-block { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .user-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--surface-3); border: 1px solid rgba(255,255,255,0.1); }
        .user-name { font-size: 0.8rem; letter-spacing: 0.1em; }
        .follow-link { background: none; border: none; font-size: 0.7rem; cursor: pointer; }

        .feed-title { font-size: 2.25rem; margin-bottom: 1.5rem; line-height: 1.1; }
        .tag-group { display: flex; gap: 1rem; opacity: 0.6; }

        .interaction-column {
          position: absolute; right: 1.5rem; bottom: 8rem;
          display: flex; flex-direction: column; gap: 2.5rem; align-items: center; z-index: 10;
        }
        .i-hit { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; cursor: pointer; }
        .i-icon { font-size: 1.75rem; color: #fff; font-weight: 200; }
        .i-label { font-size: 0.6rem; opacity: 0.5; }

        .fab-upload {
          position: fixed; bottom: 10rem; right: 2rem; z-index: 2000;
          border-radius: 99px; font-size: 0.8rem; box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        @media (min-width: 1024px) {
           .video-card { max-width: 480px; margin: 0 auto; border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); }
        }
      `}</style>
    </div>
  );
}
