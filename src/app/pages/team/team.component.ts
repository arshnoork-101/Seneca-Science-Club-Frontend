import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  template: `
    <div class="team-container">
      <!-- Leadership Team Section -->
      <section class="leadership-section">
        <div class="container">
          <h1 class="page-title">Meet Our Leaders</h1>
          
          <div class="team-grid">
            <div class="leader-card" *ngFor="let leader of leaders">
              <div class="leader-image">
                <img [src]="leader.image" [alt]="leader.name" class="leader-photo" />
              </div>
              <div class="leader-info">
                <h3 class="leader-name">{{ leader.name }}</h3>
                <p class="leader-program">{{ leader.program }}</p>
                <p class="leader-fun-line">{{ leader.funLine }}</p>
              </div>
            </div>
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
    }


    .page-title {
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 4rem;
      margin-top: -10px;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Container */
    .container {
      max-width: 100%;
      margin: 0;
      padding: 0 20px;
      position: relative;
      z-index: 2;
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
      padding: 3rem 0;
      position: relative;
      z-index: 2;
      height: 100%;
    }


    .leader-image {
      width: 100%;
      height: 200px;
      overflow: hidden;
      border-radius: 15px 15px 0 0;
      position: relative;
    }

    .leader-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .leader-card:hover .leader-photo {
      transform: scale(1.05);
    }

    .leader-info {
      padding: 1rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .leader-card {
      animation: fadeInUp 0.6s ease-out;
      animation-fill-mode: both;
    }

    .leader-card:nth-child(1) { animation-delay: 0.1s; }
    .leader-card:nth-child(2) { animation-delay: 0.2s; }
    .leader-card:nth-child(3) { animation-delay: 0.3s; }
    .leader-card:nth-child(4) { animation-delay: 0.4s; }
    .leader-card:nth-child(5) { animation-delay: 0.5s; }
    .leader-card:nth-child(6) { animation-delay: 0.6s; }

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

    .leader-card {
      background: linear-gradient(145deg, #2a2a2a, #1f1f1f);
      border-radius: 20px;
      padding: 0.5rem;
      text-align: center;
      transition: all 0.3s ease;
      border: 1px solid #333;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .leader-card:hover {
      transform: translateY(-10px);
      border-color: #FF69B4;
      box-shadow: 0 20px 40px rgba(255, 105, 180, 0.2);
    }

    .leader-name {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 0.5rem;
    }

    .leader-program {
      font-size: 1rem;
      color: #FF69B4;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .leader-fun-line {
      font-size: 0.95rem;
      color: #b0b0b0;
      line-height: 1.6;
      font-style: italic;
      border-top: 1px solid #333;
      padding-top: 1rem;
      margin-top: 1rem;
    }


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

    .leader-card {
  display: flex;
  flex-direction: column;
  height: 100%; /* ensures equal height cards */
}

.leader-image {
  flex: 1; /* take up available height */
  height: 100%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
}

.leader-photo {
  width: 100%;
  height: 100%;
  object-fit: cover; /* keeps aspect ratio while filling */
}

  `]
})
export class TeamComponent {
  leaders = [
    {
      name: 'Oakar',
      program: 'President',
      funLine: 'Leading the club towards scientific excellence! 🚀',
      image: 'https://res.cloudinary.com/da9gwrtit/image/upload/v1756002674/oakar_xxb7zr.jpg'
    },
    {
      name: 'Arshnoor Kaur',
      program: 'Vice-President',
      funLine: 'Supporting innovation and collaboration! 🤝',
      image: 'https://res.cloudinary.com/da9gwrtit/image/upload/v1731818211/oc53fp15cp1gg5aogucq.jpg'
    },
    {
      name: 'Majo Mostajo',
      program: 'Treasurer',
      funLine: 'Managing resources for maximum scientific impact! 💰',
      image: 'https://res.cloudinary.com/da9gwrtit/image/upload/v1756002674/oakar_xxb7zr.jpg'
    }
  ];
}
