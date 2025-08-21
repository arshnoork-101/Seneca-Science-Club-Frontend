import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-container">
      <h1>Login</h1>
      <p>Sign in to your account</p>
    </div>
  `,
  styles: [`
    .login-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      background-color: #000000;
      color: #ffffff;
      min-height: 100vh;
    }

    h1 {
      color: #ffffff;
      margin-bottom: 20px;
    }

    p {
      color: #cccccc;
      line-height: 1.6;
    }
  `]
})
export class LoginComponent {}
