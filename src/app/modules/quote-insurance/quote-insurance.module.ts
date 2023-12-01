import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuoteInsurangeRoutingModule } from './quote-insurance-routing.module';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteInsurancePage } from './quote-insurance.page';
import { CarService } from '../../common/services/car/car.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuoteComponent, QuoteInsurancePage],
  imports: [
    CommonModule,
    QuoteInsurangeRoutingModule,
    QuoteInsurangeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarService]
})
export class QuoteInsuranceModule { }
