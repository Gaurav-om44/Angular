import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


@Component({
  selector: 'app-key-frame',
  templateUrl: './key-frame.component.html',
  styleUrl: './key-frame.component.css',
  animations: [
    trigger('bounce', [
      transition('* => *', [
        animate('3s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-60px)', offset: 0.5 }),
          style({ transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class KeyFrameComponent {

}
