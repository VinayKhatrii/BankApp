import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLoanAppliedComponent } from './access-loan-applied.component';

describe('AccessLoanAppliedComponent', () => {
  let component: AccessLoanAppliedComponent;
  let fixture: ComponentFixture<AccessLoanAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessLoanAppliedComponent]
    });
    fixture = TestBed.createComponent(AccessLoanAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
