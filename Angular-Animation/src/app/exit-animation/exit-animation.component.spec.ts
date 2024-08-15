import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitAnimationComponent } from './exit-animation.component';

describe('ExitAnimationComponent', () => {
  let component: ExitAnimationComponent;
  let fixture: ComponentFixture<ExitAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExitAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExitAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
