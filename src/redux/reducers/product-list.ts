import { createReducer } from 'typesafe-actions';
import { PRODUCT_LOAD, ProductsActionType, PRODUCT_LOAD_SUCCESS, PRODUCT_LOAD_FAILURE } from '../actions';
import { ProductListState } from '../../types';

const INITIAL_STATE: ProductListState = {
  list: [],
  page: 1,
  loading: false,
  error: null,
  hasMore: true,
};
const productListReducer = createReducer<ProductListState, ProductsActionType>(INITIAL_STATE, {
  [PRODUCT_LOAD]: (state) => {
    return {
      ...state,
      loading: true,
    };
  },
  [PRODUCT_LOAD_SUCCESS]: (state, action) => {
    return {
      ...state,
      list: [...state.list, ...action.payload],
      page: state.page + 1,
      loading: false,
      hasMore: !!action.payload.length,
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

export default productListReducer;
