import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  template: `
    <div class="join-container">
      <div class="science-background" aria-hidden="true">
        <div class="floating-science-icon icon-01">🧪</div>
        <div class="floating-science-icon icon-02">🔬</div>
        <div class="floating-science-icon icon-03">⚗️</div>
        <div class="floating-science-icon icon-04">🧬</div>
        <div class="floating-science-icon icon-05">🔍</div>
        <div class="floating-science-icon icon-06">⚛️</div>
        <div class="floating-science-icon icon-07">🧫</div>
        <div class="floating-science-icon icon-08">📡</div>
        <div class="floating-science-icon icon-09">🌡️</div>
        <div class="floating-science-icon icon-10">💊</div>
        <div class="floating-science-icon icon-11">🧫</div>
        <div class="floating-science-icon icon-12">⚖️</div>
        <div class="floating-science-icon icon-13">🌌</div>
        <div class="floating-science-icon icon-14">🔋</div>
        <div class="floating-science-icon icon-15">🧲</div>
        <div class="floating-science-icon icon-16">📐</div>
        <div class="floating-science-icon icon-17">🌊</div>
        <div class="floating-science-icon icon-18">⚡</div>
      </div>

      <div class="content">
        <h1>Join Seneca Science Club</h1>
        <p>Become part of our science community!</p>

        <!-- Hard, obvious CTA to SSF signup -->
        <a
          class="cta-btn"
          href="https://clubs.ssfinc.ca/GENIUS/club_signup"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open SSF club signup in a new tab"
        >
          Join via SSF Portal
          <span class="sr-only">(opens in new tab)</span>
        </a>

        <!-- Optional inline/help text with a secondary link -->
        <p class="helper">
          This takes you to the official SSF portal to complete your membership.
          If the button doesn’t work for any reason, use this
          <a class="inline-link" href="https://clubs.ssfinc.ca/GENIUS/club_signup" target="_blank" rel="noopener noreferrer">
            direct link
          </a>.
        </p>

        <!-- Example Let's Connect Card -->
        <div class="connect-card">
          <h3>Let’s Connect</h3>
          <p>Follow us on social media and stay updated with events.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .join-container {
      padding: 20px;
      width: 100%;
      min-height: 100vh;
      background-color: #1a1a1a;
      color: #ffffff;
      position: relative;
      overflow: hidden;
      animation: fadeIn 0.8s ease-in;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .science-background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }

    .floating-science-icon {
      position: absolute;
      font-size: 7rem;
      opacity: 0.18;
      animation: float 15s ease-in-out infinite;
      z-index: 0;
      user-select: none;
    }

    /* Unique positions (no duplicates) */
    .icon-01 { top: 8%;  left: 2%;  color: #ff69b4;  animation-delay: 0s; }
    .icon-02 { top: 12%; right: 2%; color: #00bfff;  animation-delay: 1s; }
    .icon-03 { top: 20%; left: 48%; color: #ffffff;  animation-delay: 2s; }
    .icon-04 { top: 28%; left: 6%;  color: #32cd32;  animation-delay: 3s; }
    .icon-05 { top: 32%; right: 4%; color: #ffa500;  animation-delay: 4s; }
    .icon-06 { top: 40%; left: 25%; color: #da70d6;  animation-delay: 5s; }
    .icon-07 { top: 44%; right: 10%; color: #40e0d0;  animation-delay: 6s; }
    .icon-08 { top: 52%; left: 4%;  color: #ffd700;  animation-delay: 7s; }
    .icon-09 { top: 56%; right: 6%; color: #ff6347;  animation-delay: 8s; }
    .icon-10 { top: 64%; left: 35%; color: #98fb98;  animation-delay: 9s; }
    .icon-11 { top: 68%; left: 15%; color: #ff1493;  animation-delay: 10s; }
    .icon-12 { top: 72%; right: 8%; color: #00ced1;  animation-delay: 11s; }
    .icon-13 { top: 80%; left: 55%; color: #9370db;  animation-delay: 12s; }
    .icon-14 { top: 16%; left: 20%; color: #ffa07a;  animation-delay: 13s; }
    .icon-15 { top: 36%; left: 60%; color: #20b2aa;  animation-delay: 14s; }
    .icon-16 { top: 60%; left: 8%;  color: #f0e68c;  animation-delay: 15s; }
    .icon-17 { top: 24%; right: 12%; color: #87ceeb;  animation-delay: 16s; }
    .icon-18 { top: 48%; left: 40%; color: #ffb347;  animation-delay: 17s; }

    .content {
      position: relative;
      z-index: 5;
      max-width: 800px;
    }

    h1 { font-size: 60px; color: #fff; margin: 0 0 12px; animation: slideInFromLeft 1s ease-out; }
    p  { color: #cccccc; line-height: 2; animation: fadeInUp 1.2s ease-out 0.3s both; }

    /* CTA styled with Seneca red */
    .cta-btn {
      display: inline-block;
      margin-top: 18px;
      padding: 14px 22px;
      border-radius: 999px;
      font-weight: 700;
      text-decoration: none;
      background: rgb(218,41,28); /* Seneca red */
      color: #ffffff;
      box-shadow: 0 10px 24px rgba(218,41,28,0.25);
      transition: transform .08s ease, box-shadow .2s ease, filter .2s ease;
    }
    .cta-btn:hover { transform: translateY(-1px); box-shadow: 0 14px 28px rgba(218,41,28,0.35); filter: brightness(1.03); }
    .cta-btn:active { transform: translateY(0); box-shadow: 0 8px 18px rgba(218,41,28,0.25); }

    .helper { margin-top: 10px; font-size: .95rem; }
    .inline-link { color: #ffffff; border-bottom: 1px dotted #fff; text-decoration: none; }
    .inline-link:hover { opacity: .9; }

    .sr-only {
      position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
    }

    /* Let's Connect card — dark, opaque */
    .connect-card {
      background-color: #1e1e1e; /* solid dark */
      border-radius: 12px;
      padding: 20px;
      margin-top: 25px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.6);
      text-align: center;
    }
    .connect-card h3 { margin-bottom: 10px; color: #ffffff; }
    .connect-card p { color: #cccccc; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideInFromLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0) scale(1); }
      25% { transform: translateY(-30px) rotate(10deg) scale(1.08); }
      50% { transform: translateY(-15px) rotate(-8deg) scale(0.96); }
      75% { transform: translateY(-25px) rotate(5deg) scale(1.03); }
    }

    /* Responsive science background - reduce tool visibility on small screens */
    @media (max-width: 1200px) {
      .floating-science-icon {
        font-size: 6rem;
        opacity: 0.12;
      }
      /* Hide some tools on medium screens */
      .icon-09, .icon-10, .icon-11, .icon-12, .icon-13, .icon-14, .icon-15, .icon-16, .icon-17, .icon-18 {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .science-background {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
      }
      .floating-science-icon {
        font-size: 5rem;
        opacity: 0.08;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 10px;
      }
      /* Hide more tools on small screens */
      .icon-05, .icon-06, .icon-07, .icon-08 {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .science-background {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
      }
      .floating-science-icon {
        font-size: 4.5rem;
        opacity: 0.05;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 15px 5px;
      }
      /* Keep only 2 tools on very small screens */
      .icon-03, .icon-04 {
        display: none;
      }
      .cta-btn { width: 100%; }
    }
  `]
})
export class JoinComponent {}
