import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Seneca Science Club</h3>
          <p>Igniting curiosity, fostering innovation, and building a community of science enthusiasts at Seneca College.</p>
          <div class="social-links">
            <a href="https://instagram.com/senecascienceclub" target="_blank" class="social-link">
              <mat-icon>camera_alt</mat-icon>
            </a>
            <a href="https://linkedin.com/company/senecascienceclub" target="_blank" class="social-link">
              <mat-icon>business</mat-icon>
            </a>
            <a href="mailto:scienceclub@senecacollege.ca" class="social-link">
              <mat-icon>email</mat-icon>
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/events">Events</a></li>
            <li><a routerLink="/team">Team</a></li>
            <li><a routerLink="/articles">Articles</a></li>
            <li><a routerLink="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Get Involved</h4>
          <ul class="footer-links">
            <li><a routerLink="/join">Join Now</a></li>
            <li><a routerLink="/events">Attend Events</a></li>
            <li><a routerLink="/contact">Contact Us</a></li>
            <li><a routerLink="/articles">Write for Articles</a></li>
            <li><a routerLink="/team">Meet the Team</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Info</h4>
          <div class="contact-info">
            <p><mat-icon>location_on</mat-icon> Seneca College, Toronto, ON</p>
            <p><mat-icon>email</mat-icon> scienceclub&#64;senecacollege.ca</p>
            <p><mat-icon>phone</mat-icon> (416) 491-5050</p>
            <p><mat-icon>schedule</mat-icon> Mon-Fri: 9AM-5PM</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2024 Seneca Science Club. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a routerLink="/contact">Contact Us</a>
            <a routerLink="/team">Our Team</a>
            <a routerLink="/join">Join Club</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2a2a2a;
      color: #ffffff;
      padding-top: 60px;
      position: relative;
      z-index: 10;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 40px;
      margin-bottom: 40px;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #ecf0f1;
    }

    .footer-section h4 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 20px;
      color: #ecf0f1;
    }

    .footer-section p {
      color: #bdc3c7;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #34495e;
      color: white;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }

    .social-link:hover {
      background-color: #DA291C;
    }

    .social-link mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: #DA291C;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      color: #bdc3c7;
    }

    .contact-info mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #DA291C;
    }

    .footer-bottom {
      border-top: 1px solid #444;
      padding: 20px 0;
      background: linear-gradient(135deg, #333333 0%, #3a3a3a 100%);
    }

    .footer-bottom-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .footer-bottom p {
      color: #bdc3c7;
      margin: 0;
    }

    .footer-bottom-links {
      display: flex;
      gap: 20px;
    }

    .footer-bottom-links a {
      color: #bdc3c7;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #DA291C;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 30px;
        padding: 0 15px;
      }

      .footer-section h3 {
        font-size: 1.3rem;
      }

      .footer-section h4 {
        font-size: 1.1rem;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 15px;
      }

      .footer-bottom-links {
        justify-content: center;
        flex-wrap: wrap;
      }

      .contact-info p {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .footer {
        padding-top: 30px;
      }

      .footer-content {
        gap: 25px;
        padding: 0 10px;
      }

      .footer-section h3 {
        font-size: 1.2rem;
        margin-bottom: 15px;
      }

      .footer-section h4 {
        font-size: 1rem;
        margin-bottom: 15px;
      }

      .footer-section p {
        font-size: 0.9rem;
        margin-bottom: 15px;
      }

      .social-links {
        justify-content: center;
        gap: 12px;
      }

      .social-link {
        width: 36px;
        height: 36px;
      }

      .footer-links li {
        margin-bottom: 8px;
      }

      .footer-links a {
        font-size: 0.9rem;
      }

      .contact-info p {
        font-size: 0.85rem;
        justify-content: center;
        margin-bottom: 8px;
      }

      .footer-bottom {
        padding: 15px 0;
      }

      .footer-bottom-content {
        padding: 0 10px;
      }

      .footer-bottom p {
        font-size: 0.85rem;
      }

      .footer-bottom-links a {
        font-size: 0.8rem;
      }

      .footer-bottom-links {
        gap: 15px;
      }
    }

    @media (max-width: 360px) {
      .footer-content {
        padding: 0 5px;
      }

      .footer-section h3 {
        font-size: 1.1rem;
      }

      .footer-section h4 {
        font-size: 0.95rem;
      }

      .footer-section p {
        font-size: 0.85rem;
      }

      .social-link {
        width: 32px;
        height: 32px;
      }

      .footer-bottom-links {
        flex-direction: column;
        gap: 10px;
      }
    }
  `]
})
export class FooterComponent {}
