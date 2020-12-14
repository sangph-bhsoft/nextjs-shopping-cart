import { createReducer } from 'typesafe-actions';
import { clearCartFromLocalStorage, getListCartFromLocalStorage, setListCartToLocalStorage } from '../../helper/index';

import { ADD_TO_CART, CartActionType, REMOVE_FROM_CART, CLEAR_CART } from '../actions';
import { CartItem, CartState } from '../../types';

const INITIAL_STATE: CartState = {
  carts: getListCartFromLocalStorage(),
};

const cartReducer = createReducer<CartState, CartActionType>(INITIAL_STATE, {
  [ADD_TO_CART]: (state, action) => {
    const { product, quantity } = action.payload;
    const index = state.carts.findIndex((item) => item.product.id === product.id);
    const newState = { ...state };
    if (index !== -1) {
      newState.carts = newState.carts.map((item: CartItem) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity + quantity,
              totalPrice: item.totalPrice + quantity * item.product.price,
            }
          : { ...item },
      );
    } else {
      const cartItem: CartItem = {
        product,
        quantity,
        totalPrice: product.price * quantity,
      };
      newState.carts = [...newState.carts, cartItem];
    }
    setListCartToLocalStorage(newState.carts);
    return newState;
  },
  [REMOVE_FROM_CART]: (state, action) => {
    const { product, quantity } = action.payload;
    const cartItem: CartItem = state.carts.find((item) => item.product.id === product.id);
    const newState = { ...state };
    if (!quantity || cartItem.quantity === 1) {
      newState.carts = newState.carts.filter((item) => item.product.id !== product.id);
    } else {
      newState.carts = state.carts.map((item: CartItem) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity - quantity,
              totalPrice: item.totalPrice + quantity - item.product.price,
            }
          : { ...item },
      );
    }
    setListCartToLocalStorage(newState.carts);
    return newState;
  },
  [CLEAR_CART]: () => {
    clearCartFromLocalStorage();
    return INITIAL_STATE;
  },
});

export default cartReducer;
