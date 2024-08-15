import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAnimationComponent } from './entry-animation.component';

describe('EntryAnimationComponent', () => {
  let component: EntryAnimationComponent;
  let fixture: ComponentFixture<EntryAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntryAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntryAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
