import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartState } from '../reducers/cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartProductsCount = createSelector(
  selectCartState,
  (state: CartState) => state.products.length
);