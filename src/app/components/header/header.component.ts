import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="header-toolbar">
      <div class="header-content">
        <div class="logo-section">
          <button mat-button routerLink="/" class="logo-button">
            <mat-icon class="logo-icon">science</mat-icon>
            <span class="logo-text">Seneca Science Club</span>
          </button>
        </div>

        <nav class="nav-menu" [class.hidden]="isMobile">
          <button mat-button routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            Home
          </button>
          <button mat-button routerLink="/events" routerLinkActive="active">
            Events
          </button>
          <button mat-button routerLink="/team" routerLinkActive="active">
            Team
          </button>
          <button mat-button routerLink="/articles" routerLinkActive="active">
            Articles
          </button>
          <button mat-button routerLink="/contact" routerLinkActive="active">
            Contact Us
          </button>
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
              <mat-icon>home</mat-icon>
              <span>Home</span>
            </a>
            <a mat-list-item routerLink="/events" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>event</mat-icon>
              <span>Events</span>
            </a>
            <a mat-list-item routerLink="/team" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>group</mat-icon>
              <span>Team</span>
            </a>
            <a mat-list-item routerLink="/articles" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>article</mat-icon>
              <span>Articles</span>
            </a>
            <a mat-list-item routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active">
              <mat-icon>contact_support</mat-icon>
              <span>Contact</span>
            </a>
            <mat-divider></mat-divider>
            <a mat-list-item routerLink="/join" (click)="closeMobileMenu()">
              <mat-icon>person_add</mat-icon>
              <span>Join Now</span>
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
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: #1a1a1a;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      height: 90px;
      padding: 0 30px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo-section {
      display: flex;
      align-items: center;
      margin-right: 40px;
    }

    .logo-button {
      display: flex;
      align-items: center;
      color: #1a237e;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: 700;
      margin-left: 12px;
      padding: 8px 12px;
      transition: all 0.3s ease;
    }

    .logo-icon {
      font-size: 1.8rem;
      color: #DA291C;
      margin-right: 8px;
    }

    .logo-text {
      font-size: 1.3rem;
      font-weight: 600;
      margin-left: 12px;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .nav-menu {
      display: flex;
      gap: 2px;
      flex: 1;
      justify-content: center;
      margin: 0 10px;
    }

    .nav-menu button {
      color: #ffffff;
      background: none;
      border: none;
      font-size: 0.9rem;
      font-weight: 500;
      margin: 0 6px;
      padding: 12px 12px;
      border-radius: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      position: relative;
      border-bottom: 3px solid transparent;
    }

    .nav-menu button:hover {
      color: #ffffff;
      border-bottom: 3px solid #ffffff;
      background: none;
    }

    .nav-menu button.active {
      color: #ffffff;
      border-bottom: 3px solid #ffffff;
      background: none;
    }

    .user-section {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .join-btn {
      background: transparent;
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      border: 2px solid rgb(190, 59, 127);
    }

    .join-btn:hover {
      transform: scale(1.1);
      box-shadow: none;
      transition : transform 0.8s ease-in-out;
    }

    .user-menu-btn {
      color: white;
      transition: all 0.3s ease;
      border-radius: 50%;
    }

    .user-menu-btn:hover {
      background-color: rgba(218, 41, 28, 0.2);
      transform: scale(1.1);
    }

    .mobile-menu-btn {
      color: #ffffff;
      display: none;
    }

    .mobile-nav-container {
      position: fixed;
      top: 90px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 999;
      background: rgba(0, 0, 0, 0.5);
    }

    .mobile-nav {
      width: 280px;
      background: white;
      box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    }

    .mobile-nav .mat-nav-list {
      padding-top: 0;
    }

    .mobile-nav .mat-list-item {
      height: 56px;
    }

    .mobile-nav .mat-icon {
      margin-right: 16px;
    }

    @media (max-width: 1200px) {
      .nav-menu button {
        margin: 0 8px;
        padding: 10px 14px;
        font-size: 0.85rem;
      }
    }

    @media (max-width: 992px) {
      .nav-menu button {
        margin: 0 4px;
        padding: 8px 10px;
        font-size: 0.8rem;
      }
      
      .logo-text {
        font-size: 1.2rem;
      }
      
      .logo-icon {
        font-size: 1.6rem;
      }
    }

    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .logo-text {
        font-size: 1.1rem;
      }
      
      .logo-icon {
        font-size: 1.5rem;
      }

      .header-content {
        padding: 0 15px;
      }
      
      .header-toolbar {
        height: 70px;
        padding: 0 15px;
      }
    }

    @media (max-width: 480px) {
      .logo-text {
        font-size: 1rem;
      }
      
      .logo-icon {
        font-size: 1.3rem;
      }

      .join-btn {
        padding: 8px 12px;
        font-size: 0.8rem;
        background-color: none;
      }
      
      .header-toolbar {
        height: 60px;
      }
    }

    @media (max-width: 360px) {
      .logo-text {
        display: none;
      }

      .join-btn span {
        display: none;
      }
      
      .join-btn {
        padding: 8px 12px;
      }
    }

    /* Sticky Floating Join Button */
    .sticky-join-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1001;
      background: linear-gradient(45deg, #DA291C, #ff4444, #ff6b5a);
      background-size: 200% 200%;
      color: white;
      padding: 15px 20px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 8px 25px rgba(218, 41, 28, 0.4);
      transition: all 0.3s ease;
      animation: gradientShift 3s ease infinite, floatPulse 2s ease-in-out infinite;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 0;
      transform: translateY(100px);
    }

    .sticky-join-btn.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .sticky-join-btn:hover {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 12px 35px rgba(218, 41, 28, 0.5);
    }

    .sticky-join-btn mat-icon {
      font-size: 1.2rem;
      transition: transform 0.3s ease-in-out;
    }

    .sticky-join-btn:hover mat-icon {
      transform: rotate(360deg);
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

    @keyframes floatPulse {
      0%, 100% {
        transform: translateY(0) scale(1);
      }
      50% {
        transform: translateY(-3px) scale(1.02);
      }
    }

    @media (max-width: 768px) {
      .sticky-join-btn {
        bottom: 20px;
        right: 20px;
        padding: 12px 16px;
        font-size: 0.8rem;
      }
    }

    @media (max-width: 480px) {
      .sticky-join-btn {
        bottom: 15px;
        right: 15px;
        padding: 10px 14px;
        font-size: 0.75rem;
      }
      
      .sticky-join-btn span {
        display: none;
      }
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
    
    // Listen for window resize
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  navigateToJoin() {
    this.router.navigate(['/join']);
  }
}
