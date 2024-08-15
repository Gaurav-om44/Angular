import { StateService } from '../state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-display',
  templateUrl: './state-display.component.html',
  styleUrls: ['./state-display.component.css']
})
export class StateDisplayComponent implements OnInit {
  currentState?: string;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.state$.subscribe(state => {
      this.currentState = state;
    });
  }
}
