import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="header-toolbar">
      <div class="header-content">
        <div class="logo-section">
          <button mat-button routerLink="/" class="logo-button">
            <img src="https://res.cloudinary.com/da9gwrtit/image/upload/v1755980280/ssc-logo_blczd3.jpg" 
                 alt="Seneca Science Club" />
          </button>
          <span class="logo-text">Seneca Science Club</span>
        </div>

        <nav class="nav-menu" [class.hidden]="isMobile">
          <button mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</button>
          <button mat-button routerLink="/events" routerLinkActive="active">Events</button>
          <button mat-button routerLink="/team" routerLinkActive="active">Team</button>
          <button mat-button routerLink="/articles" routerLinkActive="active">Articles</button>
          <button mat-button routerLink="/contact" routerLinkActive="active">Contact Us</button>
        </nav>

        <div class="user-section">
          <button mat-raised-button color="accent" routerLink="/join" class="join-btn">
            <mat-icon>person_add</mat-icon>
            Join Now
          </button>

          <button mat-icon-button (click)="toggleMobileMenu()" class="mobile-menu-btn" [class.hidden]="!isMobile">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <mat-sidenav-container class="mobile-nav-container" *ngIf="isMobile && mobileMenuOpen">
        <mat-sidenav #mobileNav mode="over" position="end" [opened]="true" class="mobile-nav">
          <mat-nav-list>
            <a mat-list-item routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              <mat-icon>home</mat-icon><span>Home</span>
            </a>
            <a mat-list-item routerLink="/events" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>event</mat-icon><span>Events</span>
            </a>
            <a mat-list-item routerLink="/team" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>group</mat-icon><span>Team</span>
            </a>
            <a mat-list-item routerLink="/articles" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>article</mat-icon><span>Articles</span>
            </a>
            <a mat-list-item routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>contact_support</mat-icon><span>Contact</span>
            </a>
            <mat-divider></mat-divider>
            <a mat-list-item routerLink="/join" (click)="closeMobileMenu()">
              <mat-icon>person_add</mat-icon><span>Join Now</span>
            </a>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content (click)="closeMobileMenu()"></mat-sidenav-content>
      </mat-sidenav-container>
    </mat-toolbar>

    <!-- Sticky Floating Join Button -->
    <button class="sticky-join-btn" [class.visible]="showStickyButton" (click)="navigateToJoin()">
      <mat-icon>rocket_launch</mat-icon>
      <span>Join Now</span>
    </button>
  `,
  styles: [`
    .header-toolbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: #1a1a1a;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      height: 90px;
      padding: 0 30px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%; max-width: 1400px;
      margin: 0 auto;
    }

    .logo-section {
      display: flex;
      align-items: center;
      margin-right: 40px;
    }

    .logo-section img { height: 60px; border-radius: 5px; margin: 5px; }
    .logo-button { margin: 12px; padding: 8px 12px; transition: all 0.3s ease; }
    .logo-text { font-size: 1.3rem; font-weight: 600; margin: 12px; color: #fff; text-transform: uppercase; letter-spacing: 1px; }

    .nav-menu {
      display: flex; gap: 2px; flex: 1; justify-content: center; margin: 0 10px;
    }
    .nav-menu button {
      color: #fff; background: none; border: none;
      font-size: 0.9rem; font-weight: 500;
      margin: 0 6px; padding: 12px 12px;
      text-transform: uppercase; letter-spacing: 0.5px;
      border-bottom: 3px solid transparent;
    }
    .nav-menu button:hover,
    .nav-menu button.active {
      border-bottom: 3px solid #fff;
    }

    .user-section { display: flex; align-items: center; gap: 8px; }

    .join-btn {
      background: rgba(255, 20, 147, 0.15); /* dark pink tint */
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      border: 2px solid #ff1493; /* dark pink border */
    }
    .join-btn:hover {
      background: rgba(255, 20, 147, 0.3); /* darker pink on hover */
      transform: translateY(-2px); /* slight upward movement */
      box-shadow: none;
    }

    .mobile-menu-btn { color: #fff; display: none; }
    .mobile-nav-container { position: fixed; top: 90px; left: 0; right: 0; bottom: 0; z-index: 999; background: rgba(0,0,0,0.5); }
    .mobile-nav { width: 280px; background: white; box-shadow: -2px 0 10px rgba(0,0,0,0.1); }

    @media (max-width: 768px) {
      .nav-menu { display: none; }
      .mobile-menu-btn { display: block; }
      .logo-text { display: none; }
      .join-btn { font-size: 0.85rem; padding: 8px 14px; }
    }
    @media (max-width: 480px) {
      .join-btn span { display: none; }
      .join-btn { padding: 8px 12px; font-size: 0.8rem; }
    }

    /* Sticky Floating Join Button */
    .sticky-join-btn {
      position: fixed;
      bottom: 30px; right: 30px;
      z-index: 1001;
      background: linear-gradient(45deg, #ff1493, #ff69b4, #ff85c1); /* pink shades */
      background-size: 200% 200%;
      color: white;
      padding: 15px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 8px 25px rgba(255, 20, 147, 0.4);
      transition: all 0.1s ease;
      animation: gradientShift 3s ease infinite, floatPulse 2s ease-in-out infinite;
      border: none;
      cursor: pointer;
      display: flex; align-items: center; gap: 8px;
      opacity: 0; transform: translateY(100px);
    }
    .sticky-join-btn.visible { opacity: 1; transform: translateY(0); }
    .sticky-join-btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 12px 30px rgba(255, 20, 147, 0.4);
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes floatPulse {
      0%,100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-2px) scale(1.02); }
    }
  `]
})
export class HeaderComponent implements OnInit {
  isMobile = false;
  mobileMenuOpen = false;
  showStickyButton = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) this.mobileMenuOpen = false;
  }

  toggleMobileMenu() { this.mobileMenuOpen = !this.mobileMenuOpen; }
  closeMobileMenu() { this.mobileMenuOpen = false; }
  navigateToJoin() { this.router.navigate(['/join']); }
}
