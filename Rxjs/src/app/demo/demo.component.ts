import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
 
@Component({
  selector: 'app-cancellation-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class CancellationDemoComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private manualSubscription: any;
 
  constructor() { }
 
  ngOnInit(): void {
    this.manualCancellation();
    this.autoCancellation();
  }
 
  manualCancellation(): void {
    const source$ = interval(1000);
    this.manualSubscription = source$.subscribe(val => console.log('Manual Observable:', val));
 
    // Manually cancel after 5 seconds
    setTimeout(() => {
      this.manualSubscription.unsubscribe();
      console.log('Manual Observable cancelled');
    }, 5000);
  }
 
  autoCancellation(): void {
    const source$ = interval(1000);
    source$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(val => console.log('Auto Observable:', val));
 
    // Automatically cancel after 5 seconds
    setTimeout(() => {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      console.log('Auto Observable cancelled');
    }, 5000);
  }
 
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
