import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaccountComponent } from './addaccount.component';

describe('AddaccountComponent', () => {
  let component: AddaccountComponent;
  let fixture: ComponentFixture<AddaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddaccountComponent]
    });
    fixture = TestBed.createComponent(AddaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
