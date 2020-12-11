import { createAction, ActionType } from 'typesafe-actions';
import { CartAdd } from '../../types/index';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = createAction(ADD_TO_CART)<CartAdd>();

export const removeCart = createAction(REMOVE_FROM_CART)<CartAdd>();

export const clearCart = createAction(CLEAR_CART)<undefined>();
const cartAction = { addToCart, removeCart, clearCart };

export type CartActionType = ActionType<typeof cartAction>;
