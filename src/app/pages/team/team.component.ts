import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: `
    <div class="team-container">
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
            <div class="team-icon">👥</div>
          </div>
          <h1 class="hero-title">Meet Our Team</h1>
          <p class="hero-subtitle">
            The Seneca Science Club is led by passionate mentors who believe in making science 
            accessible, engaging, and collaborative.
          </p>
        </div>
      </section>

      <!-- Leadership Team Section -->
      <section class="leadership-section">
        <div class="container">
          <h2 class="section-title">Leadership Team</h2>
          <div class="team-grid">
            <div class="team-card" *ngFor="let member of teamMembers">
              <div class="member-photo">
                <img [src]="member.photo" [alt]="member.name" />
              </div>
              <div class="member-info">
                <h3>{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <p class="member-bio">{{ member.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Growing Team Section -->
      <section class="growing-team-section">
        <div class="container">
          <h2 class="section-title">Our Growing Team</h2>
          <div class="growing-content">
            <p class="growing-description">
              The Seneca Science Club is expanding, and more students are joining every semester 
              to bring fresh ideas and energy. Together, we form a diverse community of science 
              enthusiasts eager to learn, share, and make an impact.
            </p>
          </div>
        </div>
      </section>

      <!-- Social Links Section -->
      <section class="social-section">
        <div class="container">
          <h2 class="section-title">Stay Connected With Us</h2>
          <div class="social-links">
            <a href="#" class="social-link discord">
              <div class="social-icon">💬</div>
              <span>Discord</span>
            </a>
            <a href="#" class="social-link linkedin">
              <div class="social-icon">💼</div>
              <span>LinkedIn</span>
            </a>
            <a href="#" class="social-link instagram">
              <div class="social-icon">📸</div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .team-container {
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

    .team-icon {
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

    /* Section Titles */
    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 3rem;
      color: #ffffff;
      position: relative;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(135deg, #555 0%, #777 100%);
      border-radius: 2px;
    }

    /* Leadership Section */
    .leadership-section {
      padding: 80px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 40px;
      margin-top: 2rem;
    }

    .team-card {
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #333;
      text-align: center;
    }

    .team-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      border-color: #555;
    }

    .member-photo {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 25px;
      border: 4px solid #333;
      transition: border-color 0.3s ease;
    }

    .team-card:hover .member-photo {
      border-color: #555;
    }

    .member-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .member-info h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 10px;
    }

    .member-role {
      font-size: 1.1rem;
      color: #888;
      font-weight: 500;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .member-bio {
      color: #cccccc;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    /* Growing Team Section */
    .growing-team-section {
      padding: 80px 0;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      position: relative;
      z-index: 2;
    }

    .growing-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .growing-description {
      font-size: 1.2rem;
      color: #cccccc;
      line-height: 1.8;
    }

    /* Social Section */
    .social-section {
      padding: 80px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
    }

    .social-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #ffffff;
      padding: 30px;
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      border: 1px solid #333;
      transition: all 0.3s ease;
      min-width: 150px;
    }

    .social-link:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
      border-color: #555;
      text-decoration: none;
      color: #ffffff;
    }

    .social-icon {
      font-size: 3rem;
      margin-bottom: 15px;
    }

    .social-link span {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .discord:hover .social-icon { filter: hue-rotate(240deg); }
    .linkedin:hover .social-icon { filter: hue-rotate(200deg); }
    .instagram:hover .social-icon { filter: hue-rotate(300deg); }

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

      .section-title {
        font-size: 2rem;
      }

      .team-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .social-links {
        gap: 20px;
      }

      .social-link {
        min-width: 120px;
        padding: 25px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .team-icon {
        font-size: 4rem;
      }

      .social-links {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'XYZ',
      role: 'President',
      bio: 'Computer Science student with a passion for technology and innovation. XYZ leads the club\'s initiatives, focusing on creating opportunities for students to connect, collaborate, and explore new ideas.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Arshnoor Kaur',
      role: 'Vice President, Events',
      bio: 'Specializing in Biotechnology, Arshnoor organizes hands-on workshops and guest talks that bring science to life for students.',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'ABC',
      role: 'Treasurer',
      bio: 'Dedicated to building community engagement, ABC manages outreach, social media, and helps students stay informed about upcoming opportunities.',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];
}
