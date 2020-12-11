import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { AppState, CartItem } from '../../types';
import { cartListSelector, totalPriceSelector } from '../../redux/selectors';
import { usdCurrency } from '../../helper';
import { addToCart, clearCart, removeCart } from '../../redux/actions';
import CartList from '../../components/cart/CartList';

const index = () => {
  const dispatch = useDispatch();
  const carts: CartItem[] = useSelector((state: AppState) => cartListSelector(state));
  const totalPrice: number = useSelector((state: AppState) => totalPriceSelector(state));

  return (
    <>
      <div className="py-10 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-400">
        <div className="container lg:mx-auto px-3 md:px-8 lg:px-12">
          <h1 className="text-black-200 text-3xl mb-2">Cart</h1>
          <div>
            <ul className="flex">
              <li className="li-link relative text-gray-300">
                <Link href="/">Home</Link>
              </li>
              <li className="text-black-200">cart</li>
            </ul>
          </div>
        </div>
      </div>
      {carts.length ? (
        <>
          <div className="container lg:mx-auto px-3 md:px-8 lg:px-12 py-20">
            <CartList
              carts={carts}
              addToCart={(item) => dispatch(addToCart(item))}
              removeCart={(item) => dispatch(removeCart(item))}
            />
            <div className="border-b border-gray-300 flex items-center justify-end py-8">
              <button
                className="bg-black-200 text-white hover:bg-white hover:text-black-200 focus:outline-none py-3 border-black-100 border px-12 text-sm"
                onClick={() => dispatch(clearCart())}
              >
                CLEAR CART
              </button>
            </div>
          </div>
          <div className="container lg:mx-auto px-3 md:px-8 lg:px-12 py-20">
            <div className="flex justify-end">
              <div className="bg-gray-100 w-2/5 flex items-center justify-center flex-col px-8 py-4 space-y-10">
                <h1 className="uppercase text-black-200 text-2xl">Cart Total</h1>
                <div className="flex items-center justify-between w-full">
                  <span>SUBTOTAL</span>
                  <span>{usdCurrency(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span>TOTAL</span>
                  <span className="text-2xl">{usdCurrency(totalPrice)}</span>
                </div>
                <button className="bg-black-200 text-white hover:bg-white hover:text-black-200 focus:outline-none py-3 border-black-100 border px-12 text-sm uppercase">
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container lg:mx-auto px-3 md:px-8 lg:px-12 py-20">
          <div className="w-full items-center justify-center flex flex-col">
            <div className="text-8xl text-orange-300">
              <FaShoppingCart />
            </div>
            <p className="text-center text-gray-300 text-2xl py-4">No item your cart</p>
            <button className="bg-black-200 text-white hover:bg-white hover:text-black-200 focus:outline-none py-3 border-black-100 border px-12 text-sm uppercase">
              <Link href="/">Shop Now</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
