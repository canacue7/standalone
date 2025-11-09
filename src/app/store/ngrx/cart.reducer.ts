import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, clearCart } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialCartState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, { product }) => ({ ...state, items: [...state.items, product] })),
  on(removeFromCart, (state, { productId }) => ({ ...state, items: state.items.filter((i) => i.id !== productId) })),
  on(clearCart, (state) => ({ ...state, items: [] }))
);
