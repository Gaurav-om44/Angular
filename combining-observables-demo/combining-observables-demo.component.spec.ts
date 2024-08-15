import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiningObservablesDemoComponent } from './combining-observables-demo.component';

describe('CombiningObservablesDemoComponent', () => {
  let component: CombiningObservablesDemoComponent;
  let fixture: ComponentFixture<CombiningObservablesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombiningObservablesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombiningObservablesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
