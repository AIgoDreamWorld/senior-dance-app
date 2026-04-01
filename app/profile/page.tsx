"use client";

import React from 'react';
import Link from 'next/link';

export default function Profile() {
  return (
    <div className="sanctuary-hub">
      <div className="santuary-glow-sub"></div>
      
      <section className="profile-hero container">
        <div className="editorial-meta reveal-text">
          <span className="label-caps">MEMBER SANCTUARY / ELITE STATUS</span>
        </div>
        
        <div className="profile-header-group">
          <div className="avatar-monolith tonal-lift-high pulse-on-click">
             <div className="avatar-initials">AD</div>
          </div>
          <div className="profile-info">
             <h1 className="display-text profile-name">AI Dreamer</h1>
             <p className="label-caps gold-gradient-text">PLATINUM DANCER</p>
          </div>
        </div>
      </section>

      <section className="profile-stats container">
         <div className="stat-card tonal-lift-low">
             <span className="label-caps stat-label">PRACTICE HOURS</span>
             <span className="display-text stat-value">124</span>
         </div>
         <div className="stat-card tonal-lift-low">
             <span className="label-caps stat-label">CHALLENGES</span>
             <span className="display-text stat-value">12</span>
         </div>
         <div className="stat-card tonal-lift-low">
             <span className="label-caps stat-label">POINTS</span>
             <span className="display-text stat-value">2.4k</span>
         </div>
      </section>

      <section className="my-vault container">
         <h2 className="display-text section-title-sub">The Vault</h2>
         <div className="vault-grid">
            <div className="vault-item tonal-lift-high pulse-on-click">
               <div className="vault-icon">📁</div>
               <span className="label-caps">MY VIDEOS</span>
            </div>
            <div className="vault-item tonal-lift-high pulse-on-click">
               <div className="vault-icon">💳</div>
               <span className="label-caps">PAYMENTS</span>
            </div>
            <div className="vault-item tonal-lift-high pulse-on-click">
               <div className="vault-icon">⚙️</div>
               <span className="label-caps">SETTINGS</span>
            </div>
         </div>
      </section>

      <style jsx>{`
        .sanctuary-hub {
          padding-top: 10rem;
          padding-bottom: 20rem;
          min-height: 100vh;
          position: relative;
        }

        .container {
          padding-left: var(--gutter);
          padding-right: var(--gutter);
        }

        .santuary-glow-sub {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 100vw; height: 50vh;
          background: radial-gradient(circle at top, rgba(212, 175, 55, 0.08), transparent 70%);
          pointer-events: none;
        }

        .profile-header-group {
          display: flex; align-items: center; gap: 3rem; margin-top: 4rem; margin-bottom: 6rem;
        }

        .avatar-monolith {
          width: 120px; height: 120px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; font-family: var(--font-display);
          border: 1px solid rgba(255,255,255,0.05);
          color: var(--primary);
        }

        .profile-name { font-size: 3.5rem; line-height: 1; margin-bottom: 0.5rem; }

        .profile-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
          margin-bottom: 8rem;
        }

        .stat-card {
          padding: 2.5rem; border-radius: 2px; text-align: center;
          display: flex; flex-direction: column; gap: 1rem;
        }

        .stat-value { font-size: 2.5rem; }

        .section-title-sub { font-size: 2.5rem; margin-bottom: 3rem; }

        .vault-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;
        }

        .vault-item {
          padding: 3rem; display: flex; flex-direction: column; align-items: center; gap: 2rem;
          border-radius: 2px; cursor: pointer;
        }

        .vault-icon { font-size: 2rem; }

        @media (max-width: 768px) {
          .profile-header-group { flex-direction: column; text-align: center; gap: 2rem; }
          .profile-stats { grid-template-columns: 1fr; }
          .profile-name { font-size: 2.5rem; }
        }
      `}</style>
    </div>
  );
}
