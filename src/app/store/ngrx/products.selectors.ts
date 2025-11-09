import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsFeature = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(selectProductsFeature, (s) => s?.products ?? []);
export const selectProductsLoading = createSelector(selectProductsFeature, (s) => s?.loading ?? false);
export const selectProductsError = createSelector(selectProductsFeature, (s) => s?.error ?? null);
