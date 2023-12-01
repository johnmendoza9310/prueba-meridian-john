import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { IBrands } from '../../../../common/models/brand.model';
import { Observable, Subscription } from 'rxjs';
import { CarService } from '../../../../common/services/car/car.service';
import { ICarModel } from '../../../../common/models/car-models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { YEARS } from '../../constants/years.constant';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css',
})
export class QuoteComponent implements OnInit, OnDestroy {
  public brands: IBrands[];
  public brandsSubs: Subscription;

  public models: ICarModel[];
  public modelsSubs: Subscription = new Subscription();

  public quoteForm: FormGroup;
  public width: number;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }

  constructor(public carService: CarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this._initForm();
    this.brandsSubs = this.carService
      .getBrands()
      .subscribe((res) => (this.brands = res));
  }
  ngOnDestroy(): void {
    this.brandsSubs.unsubscribe();
    this.modelsSubs.unsubscribe();
  }

  get years(): string[] {
    return YEARS;
  }

  getModels(): void {
    this.modelsSubs = this.carService
      .getModels(this.quoteForm.get('brand')?.value.id)
      .subscribe((data) => {
        this.models = data.models;
      });
  }

  submit(): void {}

  private _initForm(): void {
    this.quoteForm = this.fb.group({
      brand: [null, [Validators.required]],
      model: [null, [Validators.required]],
      year: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
  }
}
