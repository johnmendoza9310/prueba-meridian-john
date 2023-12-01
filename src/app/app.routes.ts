import { Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: 'cotizar-seguro',
    loadChildren: () =>
      import('./modules/quote-insurance/quote-insurance.module').then(
        (m) => m.QuoteInsuranceModule
      ),
  },
  {
    path: '',
    redirectTo: '/cotizar-seguro',
    pathMatch: 'full',
  },
];
