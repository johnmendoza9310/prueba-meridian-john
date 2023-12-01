import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './components/quote/quote.component';

const routes: Routes = [
  {
    path: '',
    component: QuoteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuoteInsurangeRoutingModule {}
