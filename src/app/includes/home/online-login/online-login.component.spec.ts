import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLoginComponent } from './online-login.component';

describe('OnlineLoginComponent', () => {
  let component: OnlineLoginComponent;
  let fixture: ComponentFixture<OnlineLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineLoginComponent]
    });
    fixture = TestBed.createComponent(OnlineLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
