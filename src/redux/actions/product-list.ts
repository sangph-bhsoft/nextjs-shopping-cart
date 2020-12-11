import { createAction, ActionType } from 'typesafe-actions';
import { Product } from '../../types';

export const PRODUCT_LOAD = 'PRODUCT_LOAD';
export const PRODUCT_LOAD_SUCCESS = 'PRODUCT_LOAD_SUCCESS';
export const PRODUCT_LOAD_FAILURE = 'PRODUCT_LOAD_FAILURE';

export const loadProducts = createAction(PRODUCT_LOAD)<undefined>();

export const setProducts = createAction(PRODUCT_LOAD_SUCCESS)<Product[]>();

export const setErrorProducts = createAction(PRODUCT_LOAD_FAILURE)<string>();

const productListAction = { loadProducts, setProducts, setErrorProducts };

export type ProductsActionType = ActionType<typeof productListAction>;
