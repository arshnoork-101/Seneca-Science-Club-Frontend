import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <!-- Science Background -->
      <div class="science-background">
        <div class="large-science-tool tool-1">🧪</div>
        <div class="large-science-tool tool-2">🔬</div>
        <div class="large-science-tool tool-3">⚗️</div>
        <div class="large-science-tool tool-4">🔍</div>
        <div class="large-science-tool tool-5">🧬</div>
        <div class="large-science-tool tool-6">⚛️</div>
        <div class="large-science-tool tool-7">🌡️</div>
        <div class="large-science-tool tool-8">📊</div>
        <div class="large-science-tool tool-9">🔭</div>
        <div class="large-science-tool tool-10">💊</div>
        <div class="large-science-tool tool-11">🧫</div>
        <div class="large-science-tool tool-12">⚖️</div>
        <div class="large-science-tool tool-13">🌌</div>
        <div class="large-science-tool tool-14">🔋</div>
        <div class="large-science-tool tool-15">🧲</div>
        <div class="large-science-tool tool-16">📐</div>
      </div>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-visual">
            <div class="contact-icon">📞</div>
          </div>
          <h1 class="hero-title">Contact Us</h1>
          <p class="hero-subtitle">
            We'd love to hear from you! Whether you have questions, ideas, or want to get involved, 
            connect with us through any of our official platforms:
          </p>
        </div>
      </section>

      <!-- Contact Methods Section -->
      <section class="contact-methods">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-card discord">
              <div class="contact-icon-large">💬</div>
              <h3>Discord</h3>
              <p>Join our community server to stay updated and network with members.</p>
              <a href="#" class="contact-btn">Join Discord</a>
            </div>
            
            <div class="contact-card instagram">
              <div class="contact-icon-large">📸</div>
              <h3>Instagram</h3>
              <p>DM us for quick queries and event updates.</p>
              <a href="#" class="contact-btn">Follow Us</a>
            </div>
            
            <div class="contact-card linkedin">
              <div class="contact-icon-large">🔗</div>
              <h3>LinkedIn</h3>
              <p>Reach out for collaborations or professional connections.</p>
              <a href="#" class="contact-btn">Connect</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-container {
      background-color: #1a1a1a;
      color: #ffffff;
      min-height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .science-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      overflow: hidden;
    }

    .large-science-tool {
      position: absolute;
      font-size: 7rem;
      opacity: 0.15;
      animation: floatAround 15s infinite linear;
      transform-origin: center;
      color: #333;
    }

    .tool-1 { top: 5%; left: 5%; animation-delay: 0s; }
    .tool-2 { top: 5%; right: 5%; animation-delay: -2s; }
    .tool-3 { top: 20%; left: 8%; animation-delay: -4s; }
    .tool-4 { top: 20%; right: 8%; animation-delay: -6s; }
    .tool-5 { top: 35%; left: 2%; animation-delay: -8s; }
    .tool-6 { top: 35%; right: 2%; animation-delay: -10s; }
    .tool-7 { top: 50%; left: 5%; animation-delay: -12s; }
    .tool-8 { top: 50%; right: 5%; animation-delay: -14s; }
    .tool-9 { top: 65%; left: 8%; animation-delay: -16s; }
    .tool-10 { top: 65%; right: 8%; animation-delay: -18s; }
    .tool-11 { top: 80%; left: 2%; animation-delay: -1s; }
    .tool-12 { top: 80%; right: 2%; animation-delay: -3s; }
    .tool-13 { top: 95%; left: 5%; animation-delay: -5s; }
    .tool-14 { top: 95%; right: 5%; animation-delay: -7s; }
    .tool-15 { top: 10%; left: 50%; animation-delay: -9s; }
    .tool-16 { top: 90%; left: 50%; animation-delay: -11s; }

    @keyframes floatAround {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1f1f1f 100%);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      padding: 0 20px;
      animation: fadeInUp 1s ease-out;
    }

    .hero-visual {
      margin-bottom: 2rem;
    }

    .contact-icon {
      font-size: 6rem;
      opacity: 0.9;
      animation: pulse 2s infinite;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #b0b0b0;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Contact Methods Section */
    .contact-methods {
      padding: 80px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-top: 2rem;
    }

    .contact-card {
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      padding: 40px 30px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #333;
      text-align: center;
    }

    .contact-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border-color: #555;
    }

    .contact-icon-large {
      font-size: 4rem;
      margin-bottom: 25px;
      display: block;
    }

    .contact-card h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 15px;
    }

    .contact-card p {
      color: #cccccc;
      line-height: 1.6;
      margin-bottom: 25px;
      font-size: 0.95rem;
    }

    .contact-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-block;
      text-decoration: none;
    }

    .contact-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      background: linear-gradient(135deg, #444 0%, #666 100%);
      text-decoration: none;
      color: white;
    }

    .discord:hover .contact-icon-large { filter: hue-rotate(240deg); }
    .instagram:hover .contact-icon-large { filter: hue-rotate(300deg); }
    .linkedin:hover .contact-icon-large { filter: hue-rotate(200deg); }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .contact-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .contact-card {
        padding: 30px 25px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .contact-icon {
        font-size: 4rem;
      }

      .contact-icon-large {
        font-size: 3rem;
      }
    }
  `]
})
export class ContactComponent {}
