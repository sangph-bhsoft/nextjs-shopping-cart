import { CartItem } from '../types';

export const usdCurrency = (num: number = 0) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num);
};
export const getListCartFromLocalStorage = (): CartItem[] => {
  if (typeof window !== 'undefined') {
    const listCart = localStorage.getItem('carts');
    if (listCart) return JSON.parse(listCart);
    return [];
  }
  return [];
};

export const setListCartToLocalStorage = (carts: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('carts');
    localStorage.setItem('carts', JSON.stringify(carts));
  }
};

export const clearCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('carts');
  }
};
