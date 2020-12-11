import { createReducer } from 'typesafe-actions';
import { ADD_TO_CART, CartActionType, REMOVE_FROM_CART, CLEAR_CART } from '../actions';
import { CartItem, CartState } from '../../types';

const INITIAL_STATE: CartState = {
  carts: [],
};

const cartReducer = createReducer<CartState, CartActionType>(INITIAL_STATE, {
  [ADD_TO_CART]: (state, action) => {
    const { product, quantity } = action.payload;
    const index = state.carts.findIndex((item) => item.product.id === product.id);
    if (index !== -1) {
      return {
        ...state,
        carts: state.carts.map((item: CartItem) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: item.totalPrice + quantity * item.product.price,
              }
            : { ...item },
        ),
      };
    }

    const cartItem: CartItem = {
      product,
      quantity,
      totalPrice: product.price * quantity,
    };
    return {
      ...state,
      carts: [...state.carts, cartItem],
    };
  },
  [REMOVE_FROM_CART]: (state, action) => {
    const { product, quantity } = action.payload;
    if (!quantity) {
      return {
        ...state,
        carts: state.carts.filter((item) => item.product.id !== product.id),
      };
    }
    return {
      ...state,
      carts: state.carts.map((item: CartItem) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: item.quantity - quantity,
              totalPrice: item.totalPrice + quantity - item.product.price,
            }
          : { ...item },
      ),
    };
  },
  [CLEAR_CART]: () => {
    return INITIAL_STATE;
  },
});

export default cartReducer;
