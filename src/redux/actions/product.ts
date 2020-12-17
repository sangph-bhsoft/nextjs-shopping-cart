import { createAction, ActionType } from 'typesafe-actions';
import { Product } from '../../types';

export const PRODUCT_SET = 'PRODUCT_SET';
export const PRODUCT_LOAD = 'PRODUCT_LOAD';
export const PRODUCT_LOAD_SUCCESS = 'PRODUCT_LOAD_SUCCESS';
export const PRODUCT_LOAD_FAILURE = 'PRODUCT_LOAD_FAILURE';

export const setProduct = createAction(PRODUCT_SET)<Product>();
export const loadProductAsync = createAction(PRODUCT_LOAD)<number>();
export const setProductAsync = createAction(PRODUCT_LOAD_SUCCESS)<Product>();
export const setErrorProductAsync = createAction(PRODUCT_LOAD_FAILURE)<string>();

const productAction = { setProduct, loadProductAsync, setProductAsync, setErrorProductAsync };

export type ProductActionType = ActionType<typeof productAction>;
