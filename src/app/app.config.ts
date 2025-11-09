import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { productsReducer } from './store/ngrx/products.reducer';
import { cartReducer } from './store/ngrx/cart.reducer';
import { authReducer } from './store/ngrx/auth.reducer';
import { ProductsEffects } from './store/ngrx/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideStore({ products: productsReducer, cart: cartReducer, auth: authReducer }),
    provideEffects([ProductsEffects])
  ]
};
