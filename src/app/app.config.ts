import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from '@ngx-translate/http-loader';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({prefix:'./i18n/', suffix:'.json'}),
      fallbackLang: 'en'
    }),
    provideRouter(routes)
  ]
};
