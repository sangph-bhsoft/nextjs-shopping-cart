import Link from 'next/link';
import React, { BaseSyntheticEvent, SyntheticEvent, useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { usdCurrency } from '../../helper';
import { CartAdd, CartItem } from '../../types';

type Props = {
  open: boolean;
  carts: CartItem[];
  subTotal: number;
  toggleCart: React.Dispatch<React.SetStateAction<boolean>>;
  removeCart: (item: CartAdd) => void;
};

const HeaderCart: React.FC<Props> = ({ open, toggleCart, carts, subTotal, removeCart }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  const handleScrollCart = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    setIsScroll((pre) => !pre);
  };

  const handleClick = (e: SyntheticEvent) => {
    if (e.target === ref.current) {
      toggleCart(false);
    }
  };

  const renderListCart = () => {
    return carts.map(({ product, quantity }) => {
      return (
        <div className="flex py-4 border-b border-gray-200 relative" key={product.id}>
          <div className="w-20">
            <img src={product.imageUrl1} alt={product.name} />
          </div>
          <div className="w-full ml-2 flex flex-col justify-start h-full">
            <p className="text-gray-300">{product.name}</p>
            <div>
              <span className="text-gray-300">{quantity} x</span>
              <span className="text-black-400"> {usdCurrency(product.price)}</span>
            </div>
          </div>
          <button className="absolute top-4 right-4 text-xs focus:outline-none" onClick={() => removeCart({ product })}>
            <GrClose />
          </button>
        </div>
      );
    });
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`${!open ? 'hidden' : 'flex'} fixed w-full h-screen top-0 left-0  bg-gray-300 bg-opacity-50 z-20`}
    >
      <div className="absolute right-0 top-0 h-full bg-white w-80 sm:w-96 z-30 animate-rightTo">
        <div className="flex flex-col px-4 items-center justify-center ">
          <div className="border-b w-full pt-6 pb-1 border-gray-200">Cart</div>
          {carts.length ? (
            <>
              <div
                className={`w-full  max-h-80 ${isScroll ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
                onMouseEnter={handleScrollCart}
                onMouseLeave={handleScrollCart}
              >
                {renderListCart()}
              </div>
              <div className="flex w-full items-center justify-between border-gray-200 border-t border-b py-4">
                <span className="text-black-200 text-xl">Subtotal :</span>
                <span className="text-black-200">{usdCurrency(subTotal)}</span>
              </div>
              <div className="w-full py-5">
                <Link href="/cart">
                  <button
                    onClick={() => toggleCart(false)}
                    className="w-full bg-black-400 py-2 mb-2 text-center text-white hover:bg-orange-400"
                  >
                    VIEW CART
                  </button>
                </Link>
                <Link href="/check-out">
                  <button
                    onClick={() => toggleCart(false)}
                    className="w-full bg-black-400 py-2 text-center text-white hover:bg-orange-400"
                  >
                    CHECK OUT
                  </button>
                </Link>
              </div>
              <div className="w-full">
                <p className="text-left text-xl text-black-100">Free Shipping on All Orders Over $100!</p>
              </div>
            </>
          ) : (
            <div className="w-full pt-2">
              <p className="text-gray-300 text-xl">No item your cart</p>
            </div>
          )}
        </div>
        <button
          className="absolute top-8 right-4 text-xs transform hover:rotate-45 transition duration-500 ease-in-out focus:outline-none"
          onClick={() => toggleCart(false)}
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default HeaderCart;
