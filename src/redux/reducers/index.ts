import { combineReducers } from 'redux';
import modal from './modal';
import productList from './product-list';
import product from './product';
import cart from './cart';
const rootReducer = combineReducers({
  modal,
  productList,
  product,
  cart,
});

export default rootReducer;
