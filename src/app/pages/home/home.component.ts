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
Discover, learn, and connect through science at Seneca College.
</p>
<div class="hero-buttons">
          <button class="btn btn-secondary" routerLink="/events">
            <span class="btn-icon">🔬</span>
            Explore Events
          </button>
          <button class="btn btn-secondary" routerLink="/blog">
            <span class="btn-icon">📚</span>
            Read Research
          </button>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="about-section">
      <div class="container">
        <!-- Heading & Intro with Mission & Vision -->
        <div class="about-header">
          <h2 class="section-title">About Us</h2>
          
          <div class="about-image-container">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                 alt="Students collaborating in science lab" 
                 class="about-main-image" />
          </div>
          
          <div class="about-intro">
            <p class="intro-line-1">Seneca Science Club brings together passionate science students.</p>
            <p class="intro-line-2">We explore cutting-edge research and foster scientific collaboration.</p>
          </div>
          
          <div class="mission-vision-cards">
            <div class="mission-card">
              <div class="card-header">
                <span class="card-icon">🎯</span>
                <h3 class="card-title">Mission</h3>
              </div>
              <p class="card-content">
                To foster <strong>curiosity</strong>, <strong>collaboration</strong>, and <strong>innovation</strong> through hands-on projects, events, and discussions.
              </p>
            </div>
            
            <div class="vision-card">
              <div class="card-header">
                <span class="card-icon">🌟</span>
                <h3 class="card-title">Vision</h3>
              </div>
              <p class="card-content">
                To build an <strong>inclusive</strong>, vibrant community that inspires the next generation of scientists and innovators at Seneca.
              </p>
            </div>
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
            <h3 class="join-title">👉 Stay Connected</h3>
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

    /* Responsive science background - reduce tool visibility on small screens */
    @media (max-width: 1200px) {
      .large-science-tool {
        font-size: 5rem;
        opacity: 0.12;
      }
      /* Hide some tools on medium screens */
      .tool-9, .tool-10, .tool-11, .tool-12, .tool-13, .tool-14, .tool-15, .tool-16 {
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
      .large-science-tool {
        font-size: 4rem;
        opacity: 0.08;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 10px;
      }
      /* Hide more tools on small screens - keep only essential ones */
      .tool-5, .tool-6, .tool-7, .tool-8 {
        display: none;
      }
    }

    @media (max-width: 480px) {
      .science-background {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
      }
      .large-science-tool {
        font-size: 3rem;
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
      .tool-3, .tool-4 {
        display: none;
      }
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



    .join-btn-simple {
      background: #8B0000;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }



    .about-section {
      padding: 0;
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
      margin-bottom: 80px;
    }

    .section-title {
      text-align: center;
      font-size: 2.8rem;
      font-weight: 800;
      margin-bottom: 40px;
      color: #ffffff;
      background: linear-gradient(45deg, #FF69B4, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .about-image-container {
      margin: 30px auto 40px auto;
      max-width: 600px;
    }

    .about-main-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease;
    }

    .about-intro {
      margin: 50px 0 60px 0;
      text-align: center;
    }

    .intro-line-1 {
      font-size: 1.4rem;
      line-height: 1.6;
      color: #ffffff;
      font-weight: 600;
      margin-bottom: 15px;
    }

    .intro-line-2 {
      font-size: 1.2rem;
      line-height: 1.6;
      color: #e0e0e0;
      font-style: italic;
      margin-bottom: 0;
    }

    .mission-vision-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-top: 60px;
    }

    .mission-card, .vision-card {
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      padding: 30px;
      border: 2px solid #444;
      position: relative;
      overflow: hidden;
    }

    .mission-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, rgba(255, 105, 180, 0.8), rgba(255, 105, 180, 0.4));
    }

    .vision-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, rgba(6, 182, 212, 0.8), rgba(6, 182, 212, 0.4));
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .card-icon {
      font-size: 2.5rem;
      filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.1));
    }

    .card-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: rgb(190, 59, 127);
      margin: 0;
    }

    .card-content {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #e0e0e0;
      margin: 0;
    }

    .card-content strong {
      color: rgb(190, 59, 127);
      font-weight: 700;
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
      background: linear-gradient(45deg, #FF69B4, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .activities-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
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
      padding: 60px 40px;
      position: relative;
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
      background: transparent;
      border: 2px solid rgb(190, 59, 127);
      color: rgb(190, 59, 127);
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .btn-primary-highlight:hover {
      background: rgba(190, 59, 127, 0.1);
      transform: translateY(-2px);
    }


    .btn-secondary-outline {
      background: transparent;
      border: 2px solid #06b6d4;
      color: #06b6d4;
      font-weight: 500;
    }


    .social-connect {
      border-top: 1px solid #444;
      padding-top: 30px;
    }

    .connect-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 15px;
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



    /* Responsive Design */
    @media (max-width: 1200px) {
      .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px;
      }
    }

    @media (max-width: 768px) {
      .about-header {
        text-align: center;
      }

      .section-title {
        text-align: center;
      }

      .mission-vision-cards {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .about-intro {
        text-align: center;
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

    @media (max-width: 768px) {
      .about-header {
        text-align: center;
      }

      .section-title {
        text-align: center;
      }

      .mission-vision-cards {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .about-intro {
        text-align: center;
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
      
      .welcome-text {
        font-size: 2.2rem;
      }
      
      .club-name {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.2rem;
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
      
      .welcome-text {
        font-size: 1.8rem;
      }
      
      .club-name {
        font-size: 2rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
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
      
      .welcome-text {
        font-size: 1.5rem;
      }
      
      .club-name {
        font-size: 1.7rem;
      }
      
      .hero-subtitle {
        font-size: 1rem;
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
