import { createAction, props } from '@ngrx/store';

export const addToCart = createAction('[Cart] Add', props<{ product: any }>());
export const removeFromCart = createAction('[Cart] Remove', props<{ productId: any }>());
export const clearCart = createAction('[Cart] Clear');
