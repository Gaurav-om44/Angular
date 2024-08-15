import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private stateSubject = new BehaviorSubject<string>('');
  state$ = this.stateSubject.asObservable();

  get currentState(): string {
    return this.stateSubject.value;
  }

  updateState(newState: string): void {
    this.stateSubject.next(newState);
  }
}
