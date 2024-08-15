import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-state-transition',
  templateUrl: './state-transition.component.html',
  styleUrls: ['./state-transition.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({ backgroundColor: 'blue', transform: 'scale(1)' })),
      state('state2', style({ backgroundColor: 'green', transform: 'scale(1.5)' })),
      transition('state1 <=> state2', [
        animate(500)
      ])
    ])
  ]
})
export class StateTransitionComponent {
  currentState = 'state1';

  toggleState() {
    this.currentState = this.currentState === 'state1' ? 'state2' : 'state1';
  }
}
