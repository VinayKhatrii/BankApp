import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesOutBestComponent } from './makes-out-best.component';

describe('MakesOutBestComponent', () => {
  let component: MakesOutBestComponent;
  let fixture: ComponentFixture<MakesOutBestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MakesOutBestComponent]
    });
    fixture = TestBed.createComponent(MakesOutBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
