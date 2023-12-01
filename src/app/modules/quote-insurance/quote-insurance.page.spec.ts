import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInsurancePage } from './quote-insurance.page';

describe('QuoteInsuranceComponent', () => {
  let component: QuoteInsurancePage;
  let fixture: ComponentFixture<QuoteInsurancePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteInsurancePage],
    }).compileComponents();

    fixture = TestBed.createComponent(QuoteInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
