import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="gallery-container">
      <!-- Animated Science Tools Background -->
      <div class="floating-science-icon icon-1">🧪</div>
      <div class="floating-science-icon icon-2">🔬</div>
      <div class="floating-science-icon icon-3">⚗️</div>
      <div class="floating-science-icon icon-4">🔍</div>
      <div class="floating-science-icon icon-5">🧬</div>
      <div class="floating-science-icon icon-6">⚛️</div>
      <div class="floating-science-icon icon-7">🌡️</div>
      <div class="floating-science-icon icon-8">📊</div>
      <div class="floating-science-icon icon-9">🔭</div>
      <div class="floating-science-icon icon-10">💊</div>
      <div class="floating-science-icon icon-11">🧫</div>
      <div class="floating-science-icon icon-12">⚖️</div>
      <div class="floating-science-icon icon-13">🌌</div>
      <div class="floating-science-icon icon-14">🔋</div>
      <div class="floating-science-icon icon-15">🧲</div>
      <div class="floating-science-icon icon-16">📐</div>
      <div class="floating-science-icon icon-17">🌊</div>
      <div class="floating-science-icon icon-18">⚡</div>
      
      <div class="content">
        <h1>Gallery</h1>
        <p>Photos and videos from our events and activities.</p>
      </div>
    </div>
  `,
  styles: [`
    .gallery-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      background-color: #1a1a1a;
      color: #ffffff;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      animation: fadeIn 1s ease-in;
    }

    .content {
      position: relative;
      z-index: 2;
    }

    .floating-science-icon {
      position: absolute;
      font-size: 7rem;
      opacity: 0.2;
      animation: float 15s ease-in-out infinite;
      z-index: 0;
    }

    .icon-1 { top: 8%; left: 1%; color: #ff69b4; animation-delay: 0s; }
    .icon-2 { top: 12%; left: 95%; color: #00bfff; animation-delay: 1s; }
    .icon-3 { top: 20%; left: 48%; color: #ffffff; animation-delay: 2s; }
    .icon-4 { top: 28%; left: 2%; color: #32cd32; animation-delay: 3s; }
    .icon-5 { top: 32%; left: 96%; color: #ffa500; animation-delay: 4s; }
    .icon-6 { top: 40%; left: 25%; color: #da70d6; animation-delay: 5s; }
    .icon-7 { top: 44%; left: 75%; color: #40e0d0; animation-delay: 6s; }
    .icon-8 { top: 52%; left: 3%; color: #ffd700; animation-delay: 7s; }
    .icon-9 { top: 56%; left: 97%; color: #ff6347; animation-delay: 8s; }
    .icon-10 { top: 64%; left: 35%; color: #98fb98; animation-delay: 9s; }
    .icon-11 { top: 68%; left: 15%; color: #ff1493; animation-delay: 10s; }
    .icon-12 { top: 72%; left: 85%; color: #00ced1; animation-delay: 11s; }
    .icon-13 { top: 80%; left: 55%; color: #9370db; animation-delay: 12s; }
    .icon-14 { top: 16%; left: 20%; color: #ffa07a; animation-delay: 13s; }
    .icon-15 { top: 36%; left: 60%; color: #20b2aa; animation-delay: 14s; }
    .icon-16 { top: 60%; left: 8%; color: #f0e68c; animation-delay: 15s; }
    .icon-17 { top: 24%; left: 80%; color: #87ceeb; animation-delay: 16s; }
    .icon-18 { top: 48%; left: 40%; color: #ffb347; animation-delay: 17s; }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .floating-science-icon {
        font-size: 5rem;
        opacity: 0.15;
      }
    }

    @media (max-width: 480px) {
      .floating-science-icon {
        font-size: 4rem;
        opacity: 0.12;
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    h1 {
      color: #ffffff;
      margin-bottom: 20px;
      animation: slideInFromLeft 1s ease-out;
    }

    p {
      color: #cccccc;
      line-height: 1.6;
      animation: slideInFromLeft 1s ease-out 0.2s both;
    }

    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `]
})
export class GalleryComponent {}
