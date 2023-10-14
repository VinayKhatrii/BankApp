import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookComponentComponent } from './passbook-component.component';

describe('PassbookComponentComponent', () => {
  let component: PassbookComponentComponent;
  let fixture: ComponentFixture<PassbookComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassbookComponentComponent]
    });
    fixture = TestBed.createComponent(PassbookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
