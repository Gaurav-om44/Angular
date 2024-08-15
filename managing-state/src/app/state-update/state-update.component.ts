import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-update',
  templateUrl: './state-update.component.html',
  styleUrls: ['./state-update.component.css']
})
export class StateUpdateComponent {
  newState: string;

  constructor(private stateService: StateService) {
    this.newState = this.stateService.currentState;
  }

  updateState() {
    this.stateService.updateState(this.newState);
  }
}
