import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="contact-container">
      <!-- Science Tools Background -->
      <div class="science-background">
        <div class="large-science-tool tool-1">🧪</div>
        <div class="large-science-tool tool-2">🔬</div>
        <div class="large-science-tool tool-3">⚗️</div>
        <div class="large-science-tool tool-4">🔍</div>
        <div class="large-science-tool tool-5">🧬</div>
        <div class="large-science-tool tool-6">⚛️</div>
      </div>

      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Let's Connect</h1>
          <p class="hero-subtitle">
            Whether you have questions, ideas, or just want to get involved — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section class="contact-methods">
        <div class="container">
          <div class="contact-hybrid">

            <!-- Social Links -->
            <div class="social-section">
              <h2 class="section-title">Stay Connected</h2>
              <p class="section-subtitle">Reach out through our social platforms</p>
              <div class="social-links">
                <a href="#" class="social-link discord" target="_blank">
                  <div class="social-icon">💬</div>
                  <div class="social-info">
                    <h3>Discord</h3>
                    <p>Join our community server</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/seneca_science_club" class="social-link instagram" target="_blank">
                  <div class="social-icon">📸</div>
                  <div class="social-info">
                    <h3>Instagram</h3>
                    <p>Follow our latest updates</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/seneca-science-club" class="social-link linkedin" target="_blank">
                  <div class="social-icon">💼</div>
                  <div class="social-info">
                    <h3>LinkedIn</h3>
                    <p>Connect professionally</p>
                  </div>
                </a>
              </div>
            </div>
            
            <!-- Contact Form -->
            <div class="form-section">
              <h2 class="section-title">Send Us a Message</h2>
              <p class="section-subtitle">
                Have a question, idea, or collaboration in mind? We'd love to hear from you.
              </p>
              <form class="contact-form" (ngSubmit)="submitForm()">
                <div class="form-group">
                  <input type="text" [(ngModel)]="contactForm.name" name="name" placeholder="Your Name" class="form-input" required>
                </div>
                <div class="form-group">
                  <input type="email" [(ngModel)]="contactForm.email" name="email" placeholder="Your Seneca Email" class="form-input" required>
                </div>
                <textarea 
                  [(ngModel)]="contactForm.message" 
                  name="message" 
                  placeholder="Your Message" 
                  class="form-input w-full h-32 resize-none" rows="5"  
                  required>
                </textarea>

                <button type="submit" class="submit-btn" [disabled]="isSubmitting">
                  <span *ngIf="!isSubmitting">Send Message</span>
                  <span *ngIf="isSubmitting">Sending...</span>
                </button>
              </form>

              <div class="success-message" *ngIf="showSuccess">
                <div class="success-icon">✅</div>
                <p>Thanks! We'll get back to you soon.</p>
              </div>
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
      padding: 60px 0;
    }

    /* New Connect Header */
    .connect-header {
      text-align: center;
      margin-bottom: 50px;
    }

    /* Hero Section */
    .hero-section {
      position: relative;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
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
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 1rem 0;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: #b0b0b0;
      margin-bottom: 2.5rem;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto 2.5rem;
    }

    /* Science Background */
    .science-background {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }

    .large-science-tool {
      position: absolute;
      font-size: 7rem;
      opacity: 0.1;
      animation: floatAround 15s infinite linear;
      transform-origin: center;
      color: #333;
    }

    .tool-1 { top: 10%; left: 10%; animation-delay: 0s; }
    .tool-2 { top: 20%; right: 15%; animation-delay: -3s; }
    .tool-3 { top: 40%; left: 5%; animation-delay: -6s; }
    .tool-4 { top: 60%; right: 10%; animation-delay: -9s; }
    .tool-5 { top: 80%; left: 15%; animation-delay: -12s; }
    .tool-6 { top: 30%; right: 5%; animation-delay: -15s; }

    @keyframes floatAround {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-20px) rotate(5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
      75% { transform: translateY(-15px) rotate(3deg); }
    }

    /* Responsive science background */
    @media (max-width: 1200px) {
      .large-science-tool {
        font-size: 5.5rem;
        opacity: 0.08;
      }
      .tool-5, .tool-6 {
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
        font-size: 4.5rem;
        opacity: 0.05;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 10px;
      }
      .tool-3, .tool-4 {
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
        font-size: 3.5rem;
        opacity: 0.03;
        position: relative !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        flex: 1;
        text-align: center;
        margin: 15px 5px;
      }
      .tool-2 {
        display: none;
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

    .connect-subtitle {
      color: #b0b0b0;
      margin-top: 10px;
      font-size: 1.1rem;
    }

    .social-info h3{
      color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .contact-hybrid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }

    .social-section, .form-section {
      background: rgba(42, 42, 42, 0.9);
      border-radius: 20px;
      padding: 30px;
      border: 1px solid #333;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 2rem;
      text-align: center;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .form-section h2 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-subtitle {
      color: #b0b0b0;
      margin-bottom: 20px;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 15px;
      background: linear-gradient(145deg, #333, #2a2a2a);
      border-radius: 12px;
      text-decoration: none;
      color: #ffffff;
      transition: 0.3s;
      border: 1px solid #444;
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    }

    .social-icon {
      font-size: 2rem;
      min-width: 50px;
      text-align: center;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .form-input, .form-textarea {
      padding: 12px;
      border: 1px solid #444;
      border-radius: 8px;
      background: #1a1a1a;
      color: #ffffff;
      font-size: 1rem;
    }

    .form-input:focus, .form-textarea:focus {
      border-color: #06b6d4;
      outline: none;
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .submit-btn {
      background: linear-gradient(135deg, #06b6d4, #ff69b4);
      color: white;
      border: none;
      padding: 12px;
      margin: 13px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-message {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid #22c55e;
      border-radius: 8px;
      padding: 15px;
      margin-top: 15px;
    }

    .success-message p {
      margin: 0;
      color: #22c55e;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .contact-hybrid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;

  submitForm() {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;

      this.contactForm = { name: '', email: '', message: '' };

      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);
    }, 1500);
  }
}
