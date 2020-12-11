import { createSelector } from 'reselect';
import sumBy from 'lodash/sumBy';
import { AppState, CartItem } from '../../types/index';

export const productListSelector = (state: AppState) => state.productList.list;
export const productSelector = (state: AppState) => state.product.obj;
export const cartListSelector = (state: AppState) => state.cart.carts;
export const totalPriceSelector = createSelector(cartListSelector, (items: CartItem[]) =>
  sumBy(items, (item: CartItem) => item.totalPrice),
);

export const totalProductCart = createSelector(cartListSelector, (items: CartItem[]) => items.length);
