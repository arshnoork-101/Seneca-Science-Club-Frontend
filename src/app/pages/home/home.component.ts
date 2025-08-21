import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section">
      <!-- Science Tools Background -->
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
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="welcome-text">Welcome to</span>
          <span class="club-name">Seneca Science Club</span>
        </h1>
        <p class="hero-subtitle">
          Igniting curiosity, fostering innovation, and building a community of science enthusiasts
        </p>
        <div class="hero-buttons">
          <button class="btn btn-secondary" routerLink="/events">
            <span class="btn-icon">🔬</span>
            Explore Events
          </button>
          <button class="btn btn-secondary" routerLink="/blog">
            <span class="btn-icon">📚</span>
            Read Blog
          </button>
        </div>
      </div>
    </section>


    
    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <!-- Heading & Intro -->
        <div class="about-header">
          <h2 class="section-title">About Us</h2>
          <p class="about-intro">
            Seneca Science Club is a student-led community of curious minds passionate about exploring, learning, and sharing science. 
            We bring together students from all programs who are eager to engage with science beyond the classroom and build meaningful connections.
          </p>
        </div>

        <!-- Mission & Vision -->
        <div class="mission-vision-grid">
          <div class="mission-card">
            <div class="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To foster curiosity, innovation, and collaboration by creating opportunities for students to explore science through hands-on projects, events, and discussions.</p>
          </div>
          <div class="vision-card">
            <div class="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>To build a vibrant, inclusive community that inspires the next generation of scientists, innovators, and leaders at Seneca.</p>
          </div>
        </div>

        <!-- What We Do -->
        <div class="what-we-do">
          <h3 class="subsection-title">What We Do</h3>
          <div class="activities-grid">
            <div class="activity-item">
              <div class="activity-icon">🎓</div>
              <p>Host workshops, guest lectures, and competitions to enhance learning</p>
            </div>
            <div class="activity-item">
              <div class="activity-icon">🌍</div>
              <p>Organize science outreach and community events to spread awareness</p>
            </div>
            <div class="activity-item">
              <div class="activity-icon">🔬</div>
              <p>Create opportunities for student-led projects and research</p>
            </div>
            <div class="activity-item">
              <div class="activity-icon">🤝</div>
              <p>Provide a platform for networking with peers, faculty, and professionals</p>
            </div>
          </div>
        </div>

        <!-- Why Join Us (merged into About Us) -->
        <div class="why-join">
          <h3 class="subsection-title">Why Join Us</h3>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">🔬</div>
              <div class="benefit-content">
                <h4>Learn & Grow</h4>
                <p>Access to workshops, lectures, and hands-on experiments in various scientific disciplines</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🤝</div>
              <div class="benefit-content">
                <h4>Build Connections</h4>
                <p>Network with fellow students, faculty, and industry professionals in the science field</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🌟</div>
              <div class="benefit-content">
                <h4>Leadership Opportunities</h4>
                <p>Take on leadership roles and contribute to organizing events and activities</p>
              </div>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">🌍</div>
              <div class="benefit-content">
                <h4>Real-World Experience</h4>
                <p>Gain practical experience through field trips, competitions, and research projects</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Join Us & Stay Connected -->
        <div class="join-stay-connected">
          <div class="join-header">
            <h3 class="join-title">👉 Join Us & Stay Connected</h3>
            <p class="join-intro">
              Whether you're pursuing science as a career or simply curious about the world around you, 
              the Seneca Science Club is the place to explore, innovate, and connect. Be part of the journey 
              and stay updated with the latest science discoveries, events, and opportunities.
            </p>
          </div>
          
          <div class="join-actions">
            <button class="btn btn-primary-highlight" routerLink="/membership">
              <span class="btn-icon">🚀</span>
              Join Now
            </button>
            <button class="btn btn-secondary-outline" routerLink="/contact">
              <span class="btn-icon">💬</span>
              Contact Us
            </button>
          </div>

          <div class="social-connect">
            <p class="social-text">Connect with fellow science enthusiasts and build your professional network:</p>
            <div class="social-buttons">
              <a href="https://linkedin.com/company/senecascienceclub" target="_blank" class="social-btn linkedin">
                <mat-icon>business</mat-icon>
                <span>LinkedIn</span>
              </a>
              <a href="https://instagram.com/senecascienceclub" target="_blank" class="social-btn instagram">
                <mat-icon>camera_alt</mat-icon>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

`,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: #1a1a1a;
      color: white;
      position: relative;
      overflow: hidden;
      z-index: 2;
    }

    .science-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 10%;
      z-index: 1;
      overflow: hidden;
    }

    .large-science-tool {
      position: absolute;
      font-size: 6rem;
      opacity: 0.15;
      animation: floatAround 15s infinite linear;
      transform-origin: center;
    }

    .tool-1 { top: 8%; left: 12%; animation-delay: 0s; }
    .tool-2 { top: 15%; right: 8%; animation-delay: -2s; }
    .tool-3 { top: 22%; left: 6%; animation-delay: -4s; }
    .tool-4 { top: 18%; right: 25%; animation-delay: -6s; }
    .tool-5 { top: 28%; left: 18%; animation-delay: -8s; }
    .tool-6 { top: 32%; right: 12%; animation-delay: -10s; }
    .tool-7 { top: 68%; left: 14%; animation-delay: -12s; }
    .tool-8 { top: 72%; right: 22%; animation-delay: -14s; }
    .tool-9 { top: 78%; left: 8%; animation-delay: -16s; }
    .tool-10 { top: 75%; right: 15%; animation-delay: -18s; }
    .tool-11 { top: 82%; left: 28%; animation-delay: -1s; }
    .tool-12 { top: 85%; right: 6%; animation-delay: -3s; }
    .tool-13 { top: 88%; left: 16%; animation-delay: -5s; }
    .tool-14 { top: 92%; right: 18%; animation-delay: -7s; }
    .tool-15 { top: 12%; left: 45%; animation-delay: -9s; }
    .tool-16 { top: 88%; left: 42%; animation-delay: -11s; }

    @keyframes floatAround {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    .hero-gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(100, 41, 28, 0.1) 0%, rgba(0, 0, 0, 0.3) 70%);
      z-index: 1;
    }

    .hero-content {
      max-width: 900px;
      padding: 0 20px;
      z-index: 2;
      position: relative;
      animation: heroSlideIn 1.2s ease-out;
    }


    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-align: center;
      line-height: 1.2;
    }

    .welcome-text {
      display: block;
      color: #ffffff;
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
      opacity: 0;
      animation: fadeInUp 1s ease-out 0.3s forwards;
    }

    .club-name {
      display: block;
      color: rgb(190, 59, 127);
      font-size: 3.5rem;
      font-weight: 700;
      background: linear-gradient(45deg, #ff1493, #ff69b4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      opacity: 0;
      animation: fadeInUp 1s ease-out 0.8s forwards;
      transition: all 0.3s ease;
    }

    .club-name:hover {
      transform: scale(1.05);
      text-shadow: 0 0 20px rgba(255, 20, 147, 0.3);
    }

    .hero-subtitle {
      font-size: 1.4rem;
      margin-bottom: 3rem;
      color: #e0e0e0;
      line-height: 1.7;
      font-weight: 300;
      text-align: center;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 0.5rem;
    }

    .btn {
      padding: 15px 30px;
      border: 2px solid #ffffff;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      background: transparent;
      color: #ffffff;
    }

    .btn:hover {
      text-decoration: underline;
    }

    .btn-icon {
      font-size: 1.2rem;
    }

    .btn-primary {
      background: transparent;
      color: #ffffff;
      border: 2px solid #ffffff;
    }

    .secondary-btn {
      background: transparent;
      color: #ffffff;
      border: 2px solid #ffffff;
      padding: 12px 24px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      margin: 0 10px;
    }

    .secondary-btn:hover {
      text-decoration: underline;
    }


    .join-btn-simple {
      background: #8B0000;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }

    .join-btn-simple:hover {
      background: #A0522D;
      transform: none;
      box-shadow: none;
    }


    .about-section {
      padding: 20px 0;
      background-color: #1a1a1a;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px;
      width: 100%;
      box-sizing: border-box;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 30px;
      color: #ffffff;
      background: linear-gradient(45deg, #FF69B4, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .about-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .about-intro {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #e0e0e0;
      max-width: 800px;
      margin: 0 auto;
    }

    .mission-vision-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }

    .mission-card, .vision-card {
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      padding: 40px 30px;
      text-align: center;
      border: 1px solid #444;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .mission-card::before, .vision-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #FF69B4, #06b6d4);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .mission-card:hover::before, .vision-card:hover::before {
      opacity: 1;
    }

    .mission-card:hover, .vision-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(255, 105, 180, 0.2);
    }

    .card-icon {
      font-size: 4rem;
      margin-bottom: 20px;
      filter: drop-shadow(0 4px 8px rgba(255, 105, 180, 0.3));
    }

    .mission-card h3, .vision-card h3 {
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #FF69B4;
    }

    .mission-card p, .vision-card p {
      color: #cccccc;
      line-height: 1.7;
      font-size: 1.1rem;
    }

    .what-we-do {
      margin-bottom: 60px;
    }

    .subsection-title {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 40px;
      color: #ffffff;
    }

    .activities-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    .activity-item {
      display: flex;
      align-items: center;
      gap: 20px;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 15px;
      padding: 25px;
      border: 1px solid #444;
      transition: all 0.3s ease;
    }

    .activity-item:hover {
      transform: translateX(10px);
      border-color: #FF69B4;
      box-shadow: 0 8px 25px rgba(255, 105, 180, 0.15);
    }

    .activity-icon {
      font-size: 2.5rem;
      flex-shrink: 0;
    }

    .activity-item p {
      color: #e0e0e0;
      line-height: 1.6;
      margin: 0;
    }

    .why-join {
      margin-bottom: 60px;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 25px;
    }

    .benefit-card {
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      padding: 30px 20px;
      text-align: center;
      border: 1px solid #444;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .benefit-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, #FF69B4, #06b6d4);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .benefit-card:hover::before {
      opacity: 1;
    }

    .benefit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(6, 182, 212, 0.2);
    }

    .benefit-icon {
      font-size: 3rem;
      margin-bottom: 20px;
      filter: drop-shadow(0 2px 6px rgba(6, 182, 212, 0.3));
    }

    .benefit-content h4 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #06b6d4;
    }

    .benefit-content p {
      color: #cccccc;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .join-stay-connected {
      text-align: center;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 25px;
      padding: 50px 40px;
      border: 2px solid #444;
      position: relative;
      overflow: hidden;
    }

    .join-stay-connected::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #FF69B4, #06b6d4, #FF69B4);
      background-size: 200% 100%;
      animation: gradientShift 3s ease-in-out infinite;
    }

    .join-header {
      margin-bottom: 40px;
    }

    .join-title {
      font-size: 2.2rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 20px;
      background: linear-gradient(45deg, #FF69B4, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .join-intro {
      font-size: 1.2rem;
      line-height: 1.7;
      color: #e0e0e0;
      max-width: 700px;
      margin: 0 auto;
    }

    .join-actions {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }

    .btn-primary-highlight {
      background: linear-gradient(135deg, #FF69B4, #ff1493);
      border: 2px solid #FF69B4;
      color: white;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
    }

    .btn-primary-highlight:hover {
      background: linear-gradient(135deg, #ff1493, #FF69B4);
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(255, 105, 180, 0.5);
    }

    .btn-secondary-outline {
      background: transparent;
      border: 2px solid #06b6d4;
      color: #06b6d4;
      font-weight: 500;
    }

    .btn-secondary-outline:hover {
      background: rgba(6, 182, 212, 0.1);
      border-color: #67e8f9;
      color: #67e8f9;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.3);
    }

    .social-connect {
      border-top: 1px solid #444;
      padding-top: 30px;
    }

    .social-text {
      font-size: 1.1rem;
      color: #cccccc;
      margin-bottom: 20px;
    }

    .social-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .social-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border: 2px solid #444;
      border-radius: 12px;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .social-btn.linkedin:hover {
      border-color: #0077b5;
      box-shadow: 0 6px 20px rgba(0, 119, 181, 0.3);
      transform: translateY(-2px);
    }

    .social-btn.instagram:hover {
      border-color: #e4405f;
      box-shadow: 0 6px 20px rgba(228, 64, 95, 0.3);
      transform: translateY(-2px);
    }

    /* Responsive Design */
    @media (max-width: 1200px) {
      .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
    }

    @media (max-width: 768px) {
      .mission-vision-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .activities-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .activity-item {
        flex-direction: column;
        text-align: center;
        gap: 15px;
      }

      .activity-item:hover {
        transform: translateY(-5px);
      }

      .join-actions {
        flex-direction: column;
        align-items: center;
      }

      .social-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn {
        width: 100%;
        max-width: 300px;
      }

      .social-btn {
        width: 100%;
        max-width: 250px;
      }
    }

    @media (max-width: 480px) {
      .about-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .subsection-title {
        font-size: 1.6rem;
      }

      .about-intro {
        font-size: 1.1rem;
      }

      .join-stay-connected {
        padding: 40px 20px;
      }

      .join-title {
        font-size: 1.8rem;
      }

      .join-intro {
        font-size: 1.1rem;
      }
    }

    .features-section {
      padding: 80px 0;
      background: #1a1a1a;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
    }

    .feature-card {
      text-align: center;
      padding: 30px 20px;
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, #DA291C, #666666);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
    }

    .feature-icon mat-icon {
      color: white;
      font-size: 2.5rem;
    }

    .feature-card h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 15px;
      color: #ffffff;
    }

    .feature-card p {
      color: #cccccc;
      line-height: 1.6;
    }

    .social-section {
      padding: 50px 0;
      background-color: #1a1a1a;
    }

    .stay-connected-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .section-title-left {
      text-align: left;
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #ffffff;
    }

    .stay-connected-description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #cccccc;
      margin-bottom: 30px;
    }

    .social-links {
      display: flex;
      gap: 20px;
    }

    .social-link-button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 25px;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border: 2px solid #444;
      border-radius: 12px;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      font-weight: 500;
    }

    .social-link-button.linkedin:hover {
      border-color: #0077b5;
      box-shadow: 0 8px 25px rgba(0, 119, 181, 0.3);
      transform: translateY(-2px);
    }

    .social-link-button.instagram:hover {
      border-color:rgb(224, 108, 129);
      box-shadow: 0 8px 25px rgba(100, 145, 208, 0.3);
      transform: translateY(-2px);
    }

    .stay-connected-visual {
      display: flex;
      justify-content: center;
      align-items: center;
    }

.connection-icon {
  font-size: 6rem;
  padding: 2rem;
  border-radius: 50%;
  color: white;
  filter: drop-shadow(0 8px 24px rgba(14, 165, 233, 0.5));
  animation: pulse 2.5s ease-in-out infinite;
}



    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.8; }
      50% { transform: scale(1.05); opacity: 1; }
    }

    @media (max-width: 768px) {
      .stay-connected-layout {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
      }

      .section-title-left {
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }

      .connection-icon {
        font-size: 8rem;
      }
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .social-card {
      background: #2a2a2a;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      text-align: center;
      border: 1px solid #333;
    }

    .social-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 20px;
    }

    .social-header mat-icon {
      font-size: 2rem;
      color: #DA291C;
    }

    .social-header h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
    }

    .social-card p {
      color: #cccccc;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .social-link {
      text-decoration: none;
    }

    .cta-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #DA291C 0%, #000000 100%);
      color: white;
    }

    .cta-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .cta-content h2 {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .cta-content p {
      font-size: 1.2rem;
      margin-bottom: 40px;
      opacity: 0.9;
      line-height: 1.6;
    }

    .cta-actions {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    @media (max-width: 1400px) {
      .hero-content {
        max-width: 1100px;
      }
      
      .hero-title {
        font-size: 2.3rem;
      }
      
      .hero-tagline {
        font-size: 1.15rem;
      }
    }

    @media (max-width: 1200px) {
      .hero-content {
        max-width: 900px;
        padding: 0 40px;
      }
      
      .hero-title {
        font-size: 2.2rem;
      }
      
      .hero-tagline {
        font-size: 1.1rem;
      }
      
      .hero-subtitle {
        font-size: 1.05rem;
      }
    }

    @media (max-width: 992px) {
      .hero-section {
        padding: 100px 0;
        min-height: 85vh;
      }
      
      .hero-title {
        font-size: 2.1rem;
      }
      
      .hero-tagline {
        font-size: 1.05rem;
      }
      
      .cta-button {
        padding: 11px 22px;
        font-size: 0.95rem;
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
        min-height: 80vh;
      }
      
      .hero-content {
        padding: 0 20px;
      }

      .hero-title {
        font-size: 2rem;
      }
      
      .hero-tagline {
        font-size: 1rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
      }

      .hero-actions {
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      
      .cta-button {
        width: 100%;
        max-width: 300px;
        margin: 6px 0;
      }

      .highlights-grid {
        grid-template-columns: 1fr;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .social-grid {
        grid-template-columns: 1fr;
      }

      .cta-actions {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 480px) {
      .hero-section {
        padding: 60px 0;
        min-height: 75vh;
      }
      
      .hero-title {
        font-size: 1.8rem;
        margin-bottom: 15px;
      }
      
      .hero-tagline {
        font-size: 0.95rem;
      }
      
      .hero-subtitle {
        font-size: 0.95rem;
        margin-bottom: 30px;
      }
      
      .cta-button {
        padding: 10px 20px;
        font-size: 0.9rem;
      }
    }

    @media (max-width: 360px) {
      .hero-title {
        font-size: 1.6rem;
      }
      
      .hero-tagline {
        font-size: 0.9rem;
      }
      
      .hero-subtitle {
        font-size: 0.9rem;
      }
      
      .cta-button {
        padding: 8px 16px;
        font-size: 0.85rem;
      }
    }

    /* New Animation Keyframes */
    @keyframes glow {
      0% {
        text-shadow: 0 0 20px rgba(211, 82, 73, 0.5), 0 0 30px rgba(218, 41, 28, 0.3);
      }
      100% {
        text-shadow: 0 0 30px rgba(210, 54, 43, 0.8), 0 0 40px rgba(218, 41, 28, 0.5);
      }
    }

    @keyframes wordGlow {
      0% {
        text-shadow: 0 0 5px rgba(0, 191, 255, 0.3);
      }
      100% {
        text-shadow: 0 0 15px rgba(0, 191, 255, 0.6), 0 0 25px rgba(0, 191, 255, 0.3);
      }
    }

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes heroSlideIn {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes statFadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

  `]
})
export class HomeComponent implements OnInit {
  nextEvent: any = null;
  latestBlog: any = null;

  constructor(
    private eventService: EventService,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.loadHighlights();
  }

  loadHighlights() {
    // Load next event
    this.eventService.getEvents({ status: 'UPCOMING', limit: 1 }).subscribe(
      (response: any[]) => {
        if (response && response.length > 0) {
          this.nextEvent = response[0];
        }
      }
    );

    // Load latest blog post
    this.blogService.getPosts({ limit: 1 }).subscribe(
      (response: any[]) => {
        if (response && response.length > 0) {
          this.latestBlog = response[0];
        }
      }
    );
  }
}
