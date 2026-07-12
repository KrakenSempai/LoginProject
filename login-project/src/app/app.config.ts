import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

import { routes } from './app.routes';
import { oktaAuth } from './okta.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth })),
    {
      provide: OKTA_CONFIG,
      useFactory: (router: Router) => ({
        oktaAuth,
        onAuthRequired: () => router.navigate(['/login']),
        restoreOriginalUri: (_oktaAuth: any, originalUri: string) => {
          router.navigateByUrl(originalUri || '/home');
        },
      }),
      deps: [Router],
    },
  ],
};