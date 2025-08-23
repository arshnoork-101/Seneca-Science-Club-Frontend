import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <div class="events-container">
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
        <div class="hero-background-icons">
          <div class="hero-science-icon tool-1">🧪</div>
          <div class="hero-science-icon tool-2">🔬</div>
          <div class="hero-science-icon tool-3">⚗️</div>
          <div class="hero-science-icon tool-4">🔍</div>
          <div class="hero-science-icon tool-5">🧬</div>
          <div class="hero-science-icon tool-6">⚛️</div>
          <div class="hero-science-icon tool-7">🌡️</div>
          <div class="hero-science-icon tool-8">📊</div>
          <div class="hero-science-icon tool-9">🔭</div>
          <div class="hero-science-icon tool-10">💊</div>
          <div class="hero-science-icon tool-11">🧫</div>
          <div class="hero-science-icon tool-12">⚖️</div>
        </div>
        <div class="hero-content">
          <h1 class="hero-title">Discover, Learn, and Connect Through Science</h1>
          <p class="hero-subtitle">
            From hands-on workshops to inspiring talks, the Seneca Science Club brings opportunities 
            to explore new ideas and engage with the scientific community.
          </p>
          <button class="hero-cta-btn" (click)="scrollToUpcoming()">
            <span class="btn-icon">📅</span>
            View Upcoming Events
          </button>
        </div>
      </section>

          <!-- Why Attend Section -->
    <section class="why-attend">
      <div class="container">
        <h2 class="section-title">Why Attend Our Events?</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">🧪</div>
            <h3>Hands-On Experience</h3>
            <p>Participate in experiments, workshops, and real-world projects that bring science to life.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🌍</div>
            <h3>Networking Opportunities</h3>
            <p>Connect with peers, faculty, and industry professionals in the scientific community.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">🚀</div>
            <h3>Career Growth</h3>
            <p>Gain insights and inspiration from leading scientists and innovators in various fields.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Upcoming Events Section -->
    <section class="upcoming-events" id="upcoming-events">
      <div class="container">
        <h2 class="section-title">Upcoming Events</h2>
        <div class="events-grid" *ngIf="upcomingEvents.length > 0">
          <div class="event-card" *ngFor="let event of upcomingEvents">
            <div class="event-image">
              <img [src]="event.image" [alt]="event.title" />
              <div class="event-date-badge">
                <span class="month">{{ event.date | date:'MMM' }}</span>
                <span class="day">{{ event.date | date:'dd' }}</span>
              </div>
            </div>
            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <div class="event-meta">
                <p class="event-datetime">
                  <mat-icon>schedule</mat-icon>
                  TBD • TBD
                </p>
                <p class="event-location">
                  <mat-icon>location_on</mat-icon>
                  {{ event.location }}
                </p>
              </div>
              <p class="event-description">{{ event.description }}</p>
              <button class="register-btn">
                <mat-icon>person_add</mat-icon>
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div *ngIf="upcomingEvents.length === 0" class="no-events">
          <mat-icon>event_busy</mat-icon>
          <h3>No Upcoming Events</h3>
          <p>Stay tuned for exciting events coming soon!</p>
        </div>
      </div>
    </section>

    <!-- Past Events Section -->
    <section class="past-highlights">
      <div class="container">
        <h2 class="section-title">Past Events</h2>
        <div class="events-grid">
          <div class="event-card" *ngFor="let event of pastEvents">
            <div class="event-image">
              <img [src]="event.image" [alt]="event.title" />
              <div class="event-date-badge">
                <span class="month">{{ event.dateObj | date:'MMM' }}</span>
                <span class="day">{{ event.dateObj | date:'dd' }}</span>
              </div>
            </div>
            <div class="event-content">
              <h3>{{ event.title }}</h3>
              <div class="event-meta">
                <p class="event-datetime">
                  <mat-icon>schedule</mat-icon>
                  {{ event.date }}
                </p>
                <p class="event-location">
                  <mat-icon>location_on</mat-icon>
                  {{ event.location }}
                </p>
              </div>
              <p class="event-description">{{ event.description }}</p>
              <button class="know-more-btn" (click)="openEventModal(event)">
                <mat-icon>info</mat-icon>
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Modal -->
    <div class="modal-overlay" *ngIf="selectedEvent" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">&times;</button>
        
        <div class="modal-header">
          <img [src]="selectedEvent.image" [alt]="selectedEvent.title" class="modal-image">
          <h2>{{ selectedEvent.title }}</h2>
          <p class="event-date">{{ selectedEvent.date }}</p>
        </div>

        <div class="modal-body">
          <div class="section">
            <h3>📌 Core Details</h3>
            <div class="detail-grid">
              <div class="detail-item">
                <strong>Event Title & Date:</strong> {{ selectedEvent.title }} - {{ selectedEvent.date }}
              </div>
              <div class="detail-item">
                <strong>Location:</strong> {{ selectedEvent.location }}
              </div>
              <div class="detail-item">
                <strong>Attendance:</strong> {{ selectedEvent.attendance }}
              </div>
            </div>
          </div>

          <div class="section">
            <h3>📝 Content Recap</h3>
            <div class="content-recap">
              <div class="recap-item">
                <strong>Highlights:</strong>
                <ul>
                  <li *ngFor="let highlight of selectedEvent.highlights">{{ highlight }}</li>
                </ul>
              </div>
              <div class="recap-item">
                <strong>Key Takeaways:</strong>
                <ul>
                  <li *ngFor="let takeaway of selectedEvent.takeaways">{{ takeaway }}</li>
                </ul>
              </div>
              <div class="recap-item" *ngIf="selectedEvent.memorableMoments">
                <strong>Memorable Moments:</strong>
                <p>{{ selectedEvent.memorableMoments }}</p>
              </div>
            </div>
          </div>

          <div class="section" *ngIf="selectedEvent.media">
            <h3>📸 Media</h3>
            <div class="media-gallery">
              <img *ngFor="let photo of selectedEvent.media" [src]="photo" class="gallery-image" (click)="openImageLightbox(photo)">
            </div>
          </div>

          <div class="section">
            <h3>📊 Impact</h3>
            <div class="impact-section">
              <div class="feedback" *ngIf="selectedEvent.feedback">
                <strong>Feedback Summary:</strong>
                <p>{{ selectedEvent.feedback }}</p>
              </div>
              <div class="stats" *ngIf="selectedEvent.stats">
                <strong>Engagement Stats:</strong>
                <p>{{ selectedEvent.stats }}</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h3>👥 Acknowledgments</h3>
            <p>{{ selectedEvent.acknowledgments }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Image Lightbox -->
    <div class="lightbox-overlay" *ngIf="selectedImage" (click)="closeLightbox()">
      <div class="lightbox-content">
        <button class="lightbox-close" (click)="closeLightbox()">&times;</button>
        <img [src]="selectedImage" class="lightbox-image" (click)="$event.stopPropagation()">
      </div>
    </div>

    </div>
  `,
  styles: [`
    .events-container {
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
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      padding: 0 20px;
      animation: fadeInUp 1s ease-out;
    }

    .hero-title {
      position: relative;
      z-index: 2;
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1;
      margin: 0;
      background: linear-gradient(135deg, #ff69b4, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #b0b0b0;
      margin-bottom: 0.5 rem;
      line-height: 1.6;
      max-width: 600px;
      padding: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-cta-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }

    .hero-cta-btn:hover {
      transform: translateY(-2px);
      background: #555;
    }

    .btn-icon {
      font-size: 1.2rem;
    }

    /* Container */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Hero Background Icons */
    .hero-background-icons {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      z-index: 1;
    }

    .hero-science-icon {
      position: absolute;
      font-size: 6rem;
      opacity: 0.15;
      animation: heroFloat 15s infinite linear;
      transform-origin: center;
      color: #444;
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

    @keyframes heroFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
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

    /* Upcoming Events Section */
    .upcoming-events {
      padding: 40px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .events-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin-top: 2rem;
    }

    .event-card {
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #333;
    }

    .event-card:hover {
      transform: translateY(-5px);
      border-color: #555;
    }

    .event-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .event-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .event-card:hover .event-image img {
      transform: scale(1.05);
    }

    .event-date-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      padding: 8px 12px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .event-date-badge .month {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    .event-date-badge .day {
      display: block;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .event-content {
      padding: 25px;
    }

    .event-content h3 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 15px;
      line-height: 1.3;
    }

    .event-meta {
      margin-bottom: 15px;
    }

    .event-meta p {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 8px 0;
      color: #b0b0b0;
      font-size: 0.9rem;
    }

    .event-meta mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #888;
    }

    .event-description {
      color: #cccccc;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .register-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      justify-content: center;
    }

    .register-btn:hover {
      transform: translateY(-2px);
      background: #555;
    }

    .no-events {
      text-align: center;
      padding: 60px 20px;
      color: #888;
    }

    .no-events mat-icon {
      font-size: 4rem;
      width: 4rem;
      height: 4rem;
      margin-bottom: 20px;
      color: #555;
    }

    .no-events h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #aaa;
    }

    /* Past Events Section */
    .past-highlights {
      padding: 80px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .know-more-btn {
      background: linear-gradient(135deg, #333 0%, #555 100%);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      justify-content: center;
      font-size: 0.9rem;
    }

    .know-more-btn:hover {
      transform: translateY(-2px);
      background: #555;
    }

    .know-more-btn mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(5px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .modal-content {
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      max-width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      border: 1px solid #444;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 20px;
      background: none;
      border: none;
      font-size: 2rem;
      color: #888;
      cursor: pointer;
      z-index: 1001;
      transition: color 0.3s ease;
    }

    .close-btn:hover {
      color: #FF69B4;
    }

    .modal-header {
      text-align: center;
      padding: 20px 20px 15px;
      border-bottom: 1px solid #333;
    }

    .modal-image {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: 15px;
      margin-bottom: 20px;
      margin-top: 10px;
    }

    .modal-header h2 {
      color: #ffffff;
      font-size: 1.8rem;
      margin-bottom: 10px;
      font-weight: 600;
    }

    .event-date {
      color: #FF69B4;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .modal-body {
      padding: 10px;
    }

    .section {
      margin-bottom: 10px;
    }

    .section h3 {
      color: #FF69B4;
      font-size: 1.3rem;
      margin-bottom: 8px;
      font-weight: 600;
    }

    .detail-grid {
      display: grid;
      gap: 8px;
    }

    .detail-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 10px;
      border-radius: 10px;
      border-left: 3px solid #FF69B4;
    }

    .detail-item strong {
      color: #ffffff;
      display: block;
      margin-bottom: 5px;
    }

    .content-recap {
      display: grid;
      gap: 10px;
    }

    .recap-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 12px;
      border-radius: 10px;
    }

    .recap-item strong {
      color: #ffffff;
      display: block;
      margin-bottom: 10px;
    }

    .recap-item ul {
      margin: 0;
      padding-left: 20px;
      color: #e0e0e0;
    }

    .recap-item li {
      margin-bottom: 8px;
      line-height: 1.5;
    }

    .media-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
    }

    .gallery-image {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 10px;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .gallery-image:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }

    .impact-section {
      display: grid;
      gap: 10px;
    }

    .feedback, .stats {
      background: rgba(255, 255, 255, 0.05);
      padding: 12px;
      border-radius: 10px;
    }

    .feedback strong, .stats strong {
      color: #ffffff;
      display: block;
      margin-bottom: 10px;
    }

    .feedback p, .stats p {
      color: #e0e0e0;
      line-height: 1.6;
      margin: 0;
    }

    /* Why Attend Section */
    .why-attend {
      padding: 80px 0;
      background: #1a1a1a;
      position: relative;
      z-index: 2;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-top: 3rem;
    }

    .benefit-card {
      text-align: center;
      padding: 40px 30px;
      background: linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%);
      border-radius: 20px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      border: 1px solid #333;
    }

    .benefit-card:hover {
      transform: translateY(-10px);
      border-color: #555;
    }

    .benefit-icon {
      font-size: 4rem;
      margin-bottom: 25px;
      display: block;
    }

    .benefit-card h3 {
      font-size: 1.4rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 15px;
    }

    .benefit-card p {
      color: #cccccc;
      line-height: 1.6;
    }

    /* Call to Action Section */
    .events-cta {
      padding: 40px 0;
      background: linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%);
      position: relative;
      z-index: 2;
    }

    .cta-content {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 50px;
      align-items: center;
    }

    .cta-visual {
      text-align: center;
    }

    .collaboration-icon {
      font-size: 8rem;
      opacity: 0.9;
      animation: pulse 2s infinite;
    }

    .cta-text h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 20px;
      line-height: 1.3;
    }

    .cta-text p {
      font-size: 1.1rem;
      color: #e0e0e0;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 15px 30px;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .btn-primary {
      background: rgba(255, 255, 255, 0.2);
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .btn-primary:hover {
      background: rgba(85, 85, 85, 0.3);
      transform: translateY(-2px);
    }

    .btn-secondary {
      background: transparent;
      color: #ffffff;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .btn-secondary:hover {
      background: rgba(85, 85, 85, 0.1);
      transform: translateY(-2px);
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

      .events-grid {
        grid-template-columns: 1fr;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }

      .cta-content {
        grid-template-columns: 1fr;
        gap: 30px;
        text-align: center;
      }

      .cta-text h2 {
        font-size: 2rem;
      }

      .cta-buttons {
        justify-content: center;
      }

      .btn {
        flex: 1;
        min-width: 200px;
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

      .events-grid {
        grid-template-columns: 1fr;
      }

      .cta-text h2 {
        font-size: 1.8rem;
      }
    }

    /* --- Fix close button spacing --- */
.close-btn {
  top: 10px;   /* reduce vertical space */
  right: 10px; /* tuck it in tighter */
}

/* Add spacing between close button and modal image */
.modal-header {
  position: relative;
  padding: 40px 20px 15px; /* extra top padding so close button doesn’t overlap image */
}

/* --- Tighten modal spacing --- */
.modal-body {
  padding: 15px 20px; /* consistent padding */
}

.section {
  margin: -10px;
  padding: 30px;
}

.section:last-child {
  margin-bottom: 0; /* remove trailing empty space */
}

.recap-item,
.detail-item,
.feedback,
.stats {
  margin-bottom: 10px; /* prevent stacked items from having too much white space */
}

    /* Image Lightbox */
    .lightbox-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 10px;
    }

    .lightbox-close {
      position: absolute;
      top: -60px;
      right: 0;
      background: none;
      border: none;
      font-size: 2.5rem;
      color: white;
      cursor: pointer;
      z-index: 2001;
      transition: color 0.3s ease;
    }

    .lightbox-close:hover {
      color: #FF69B4;
    }

  `]
})
export class EventsComponent implements OnInit {
  upcomingEvents: any[] = [];
  pastEvents: any[] = [];
  selectedEvent: any = null;
  selectedImage: string | null = null;

  constructor() {}

  ngOnInit() {
    // Sample upcoming events data
    this.upcomingEvents = [
      {
        id: 1,
        title: 'Chemistry Lab Workshop',
        description: 'Fun hands-on chemistry experiments and lab techniques.',
        date: new Date('2024-12-15'),
        time: 'TBD',
        location: 'TBD',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=200&fit=crop'
      },
      {
        id: 2,
        title: 'Space & Physics Talk',
        description: 'Learn about space exploration and physics discoveries.',
        date: new Date('2024-12-22'),
        time: 'TBD',
        location: 'TBD',
        image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=200&fit=crop'
      },
      {
        id: 3,
        title: 'Biology Lab Session',
        description: 'Explore cells and DNA using microscopes and lab tools.',
        date: new Date('2025-01-10'),
        time: 'TBD',
        location: 'TBD',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop'
      }
    ];

    // Past events data
    this.pastEvents = [
      {
        id: 1,
        title: 'Meet and Greet',
        description: 'Our inaugural event where members got to know each other and learned about the club\'s mission and upcoming activities.',
        date: 'Friday, August 8, 2024',
        location: 'Seneca York Campus - The Hive, 3:30PM-5:00PM',
        attendance: 'Great turnout with enthusiastic participation from new and returning students',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        dateObj: new Date('2024-08-08'),
        highlights: [
          'Welcome presentation introducing the Seneca Science Club',
          'Interactive icebreaker activities to help members connect',
          'Overview of planned events and activities for the semester',
          'Q&A session about club membership and opportunities'
        ],
        takeaways: [
          'Built strong foundation for community within the club',
          'Established clear communication channels for future events',
          'Generated excitement for upcoming workshops and activities'
        ],
        memorableMoments: 'The energy in the room was incredible as students from different programs came together, sharing their passion for science and forming new friendships.',
        media: [
          'https://res.cloudinary.com/da9gwrtit/image/upload/v1755902352/IMG-20250822-WA0017_e0zmcc.jpg',
          'https://res.cloudinary.com/da9gwrtit/image/upload/v1755902353/IMG-20250822-WA0021_qmjaik.jpg'
        ],
        feedback: 'Members expressed great enthusiasm for future events and appreciated the welcoming atmosphere. Many commented on how well-organized the event was.',
        stats: 'High engagement throughout the event with active participation in discussions and networking activities.',
        acknowledgments: 'Thanks to all participants who made this inaugural event a success! Special appreciation for the enthusiasm and energy everyone brought to The Hive.'
      }
    ];
  }

  scrollToUpcoming() {
    const element = document.getElementById('upcoming-events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  subscribeToUpdates() {
    // Placeholder for subscription functionality
    alert('Thank you for your interest! Event subscription feature coming soon.');
  }

  openEventModal(event: any) {
    this.selectedEvent = event;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedEvent = null;
    document.body.style.overflow = 'auto';
  }

  openImageLightbox(imageUrl: string) {
    this.selectedImage = imageUrl;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.selectedImage = null;
    document.body.style.overflow = 'auto';
  }
}
