import { Component } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  template: `
    <div class="event-detail-container">
      <h1>Event Details</h1>
      <p>Detailed information about the event.</p>
    </div>
  `,
  styles: [`
    .event-detail-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  `]
})
export class EventDetailComponent {}
