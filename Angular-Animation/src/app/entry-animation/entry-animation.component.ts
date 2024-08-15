import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-entry-animation',
  templateUrl: './entry-animation.component.html',
  styleUrls: ['./entry-animation.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        animate(5000)
      ])
    ])
  ]
})
export class EntryAnimationComponent {}
