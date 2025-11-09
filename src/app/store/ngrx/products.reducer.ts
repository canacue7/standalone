import { createReducer, on } from '@ngrx/store';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './products.actions';

export interface ProductsState {
  products: any[];
  loading: boolean;
  error: any | null;
}

export const initialProductsState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

export const productsReducer = createReducer(
  initialProductsState,
  on(loadProducts, (state) => ({ ...state, loading: true, error: null })),
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products, loading: false })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
