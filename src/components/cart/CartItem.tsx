import Link from 'next/link';
import React from 'react';
import { GrClose } from 'react-icons/gr';
import { usdCurrency } from '../../helper';
import { CartAdd, CartItem } from '../../types';

type Props = {
  cartItem: CartItem;
  addToCart: (item: CartAdd) => void;
  removeCart: (item: CartAdd) => void;
};

const CartItemCom: React.FC<Props> = ({ addToCart, removeCart, cartItem }) => {
  return (
    <tr
      className="border border-gray-100 items-center justify-center space-y-1 flex flex-col lg:table-row relative"
      key={cartItem.product.id}
    >
      <td className="lg:px-4 lg:py-2 text-emerald-800 text-left w-full lg:w-32">
        <Link href="/">
          <img src={cartItem.product.imageUrl1} className="w-full" alt="prd-cart" />
        </Link>
      </td>
      <td className="px-4 py-2 text-emerald-800 text-left text-xl text-gray-300">{cartItem.product.name}</td>
      <td className="px-4 py-2 text-emerald-800 text-left">{usdCurrency(cartItem.product.price)}</td>
      <td className="px-4 py-2 text-emerald-800 text-left">
        <div className="border-b border-gray-300 flex items-center w-28">
          <button
            className="text-xl text-black-200 focus:outline-none"
            onClick={() => removeCart({ product: cartItem.product, quantity: 1 })}
          >
            -
          </button>
          <input value={cartItem.quantity} readOnly className="text-center w-full focus:outline-none" />
          <button
            className="text-xl text-black-200 focus:outline-none"
            onClick={() => addToCart({ product: cartItem.product, quantity: 1 })}
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-2 text-emerald-800 text-left">{usdCurrency(cartItem.totalPrice)}</td>
      <td className="px-4 py-2 text-emerald-800 text-left absolute top-2 right-2 z-10 lg:static">
        <button
          className="w-12 h-12 border focus:outline-none items-center justify-center flex hover:border-yellow-100"
          onClick={() => removeCart({ product: cartItem.product })}
        >
          <GrClose />
        </button>
      </td>
    </tr>
  );
};

export default CartItemCom;
