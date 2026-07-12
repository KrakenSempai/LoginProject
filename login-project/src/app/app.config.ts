import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { oktaAuth } from './okta.config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), importProvidersFrom(OktaAuthModule.forRoot({ oktaAuth })),]
};
