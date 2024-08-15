import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  template: `
    <p>Component Lifecycle Example</p>
  `
})
export class LifecycleExampleComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { 
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // Perform initialization tasks here
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    // React to changes in input properties
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
    // Clean up resources here
  }
}
