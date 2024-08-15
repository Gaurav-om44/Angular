import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFrameComponent } from './key-frame.component';

describe('KeyFrameComponent', () => {
  let component: KeyFrameComponent;
  let fixture: ComponentFixture<KeyFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyFrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
