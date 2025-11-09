import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartFeature = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(selectCartFeature, (s) => s?.items ?? []);
export const selectCartCount = createSelector(selectCartItems, (items) => items.length);
export const selectCartTotal = createSelector(selectCartItems, (items) => items.reduce((sum, it) => sum + (it.price ?? 0), 0));
