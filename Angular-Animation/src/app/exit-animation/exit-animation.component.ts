import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-exit-animation',
  templateUrl: './exit-animation.component.html',
  styleUrls: ['./exit-animation.component.css'],
  animations: [
    trigger('fadeOut', [
      state('void', style({ opacity: 1 })),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ExitAnimationComponent {
  showElement = true;

  toggleElement() {
    this.showElement = !this.showElement;
  }
}
