import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCounterComponent } from './auto-counter.component';

describe('AutoCounterComponent', () => {
  let component: AutoCounterComponent;
  let fixture: ComponentFixture<AutoCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoCounterComponent]
    });
    fixture = TestBed.createComponent(AutoCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
