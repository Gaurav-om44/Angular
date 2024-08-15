import { Component, OnInit } from '@angular/core';
import { of, forkJoin, combineLatest, zip, merge, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-combining-observables-demo',
  templateUrl: './combining-observables-demo.component.html',
  styleUrls: ['./combining-observables-demo.component.scss']
})
export class CombiningObservablesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.demoForkJoin();
    this.demoCombineLatest();
    this.demoZip();
    this.demoMerge();
  }

  demoForkJoin(): void {
    const obs1 = of('Hello');
    const obs2 = of('World');

    forkJoin([obs1, obs2]).pipe(
      tap(values => console.log('forkJoin values:', values)),
      catchError(this.handleError)
    ).subscribe();
  }

  demoCombineLatest(): void {
    const obs1 = of('Hello');
    const obs2 = of('World');

    combineLatest([obs1, obs2]).pipe(
      tap(values => console.log('combineLatest values:', values)),
      catchError(this.handleError)
    ).subscribe();
  }

  demoZip(): void {
    const obs1 = of('Hello');
    const obs2 = of('World');

    zip([obs1, obs2]).pipe(
      tap(values => console.log('zip values:', values)),
      catchError(this.handleError)
    ).subscribe();
  }

  demoMerge(): void {
    const obs1 = of('Hello');
    const obs2 = of('World');

    merge(obs1, obs2).pipe(
      tap(values => console.log('merge values:', values)),
      catchError(this.handleError)
    ).subscribe();
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
