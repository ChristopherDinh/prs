import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestLineComponent } from './purchaserequest-line.component';

describe('PurchaserequestLineComponent', () => {
  let component: PurchaserequestLineComponent;
  let fixture: ComponentFixture<PurchaserequestLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
