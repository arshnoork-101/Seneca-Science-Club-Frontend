import { Component } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  template: `
    <div class="registration-container">
      <h1>Event Registration</h1>
      <p>Register for this event.</p>
    </div>
  `,
  styles: [`
    .registration-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class EventRegistrationComponent {}
