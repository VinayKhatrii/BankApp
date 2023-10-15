import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplicationsComponent } from './new-applications.component';

describe('NewApplicationsComponent', () => {
  let component: NewApplicationsComponent;
  let fixture: ComponentFixture<NewApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewApplicationsComponent]
    });
    fixture = TestBed.createComponent(NewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
