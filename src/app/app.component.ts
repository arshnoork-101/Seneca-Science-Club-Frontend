import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 128px); /* Account for header and footer */
      padding-top: 64px; /* Account for fixed header */
      background-color: #1a1a1a;
      transition: all 0.3s ease;
    }

    :host {
      display: block;
      animation: fadeIn 0.5s ease-in;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class AppComponent {
  title = 'Seneca Science Club';
}
