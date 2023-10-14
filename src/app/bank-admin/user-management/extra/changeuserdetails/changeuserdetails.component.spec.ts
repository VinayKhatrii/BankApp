import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeuserdetailsComponent } from './changeuserdetails.component';

describe('ChangeuserdetailsComponent', () => {
  let component: ChangeuserdetailsComponent;
  let fixture: ComponentFixture<ChangeuserdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeuserdetailsComponent]
    });
    fixture = TestBed.createComponent(ChangeuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
