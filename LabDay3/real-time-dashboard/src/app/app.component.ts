import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>Welcome to Real-Time Data Dashboard!</h1>
    </div>
    <app-dashboard></app-dashboard>
  `,
  styles: []
})
export class AppComponent {
  title = 'real-time-dashboard';
}
