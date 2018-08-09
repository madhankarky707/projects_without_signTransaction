import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlypaymentComponent } from './monthlypayment.component';

describe('MonthlypaymentComponent', () => {
  let component: MonthlypaymentComponent;
  let fixture: ComponentFixture<MonthlypaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlypaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
