import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessContactFormsComponent } from './access-contact-forms.component';

describe('AccessContactFormsComponent', () => {
  let component: AccessContactFormsComponent;
  let fixture: ComponentFixture<AccessContactFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessContactFormsComponent]
    });
    fixture = TestBed.createComponent(AccessContactFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
