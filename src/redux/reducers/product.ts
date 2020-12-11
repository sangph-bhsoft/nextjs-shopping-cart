import { createReducer } from 'typesafe-actions';
import { PRODUCT_SET, ProductActionType } from '../actions';
import { ProductState } from '../../types';

const INITIAL_STATE: ProductState = {
  obj: null,
};
const productReducer = createReducer<ProductState, ProductActionType>(INITIAL_STATE, {
  [PRODUCT_SET]: (state, action) => {
    return {
      ...state,
      obj: action.payload,
    };
  },
});

export default productReducer;
