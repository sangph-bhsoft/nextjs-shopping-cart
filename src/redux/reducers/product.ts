import { createReducer } from 'typesafe-actions';
import { PRODUCT_SET, ProductActionType, PRODUCT_LOAD, PRODUCT_LOAD_FAILURE, PRODUCT_LOAD_SUCCESS } from '../actions';
import { ProductState } from '../../types';

const INITIAL_STATE: ProductState = {
  obj: null,
  productAsync: null,
  loading: false,
  error: null,
};
const productReducer = createReducer<ProductState, ProductActionType>(INITIAL_STATE, {
  [PRODUCT_SET]: (state, action) => {
    return {
      ...state,
      obj: action.payload,
    };
  },
  [PRODUCT_LOAD]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [PRODUCT_LOAD_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      productAsync: action.payload,
    };
  },
  [PRODUCT_LOAD_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  },
});

export default productReducer;
