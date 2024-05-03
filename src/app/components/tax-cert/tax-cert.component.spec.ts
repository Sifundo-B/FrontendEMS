import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCertComponent } from './tax-cert.component';

describe('TaxCertComponent', () => {
  let component: TaxCertComponent;
  let fixture: ComponentFixture<TaxCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxCertComponent]
    });
    fixture = TestBed.createComponent(TaxCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
