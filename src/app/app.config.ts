import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROOT_ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROOT_ROUTES),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
