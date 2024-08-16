import { createReducer, on } from '@ngrx/store';
import { addToCart } from '../actions/cart.action';

export interface CartState {
  products: any[];
}

export const initialState: CartState = {
  products: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  }))
);
