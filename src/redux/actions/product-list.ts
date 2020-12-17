import { createAction, ActionType } from 'typesafe-actions';
import { Product } from '../../types';

export const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
export const PRODUCTS_LOAD_SUCCESS = 'PRODUCTS_LOAD_SUCCESS';
export const PRODUCTS_LOAD_FAILURE = 'PRODUCTS_LOAD_FAILURE';

export const loadProducts = createAction(PRODUCTS_LOAD)<undefined>();

export const setProducts = createAction(PRODUCTS_LOAD_SUCCESS)<Product[]>();

export const setErrorProducts = createAction(PRODUCTS_LOAD_FAILURE)<string>();

const productListAction = { loadProducts, setProducts, setErrorProducts };

export type ProductsActionType = ActionType<typeof productListAction>;
