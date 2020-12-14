import React from 'react';
import { CartAdd, CartItem } from '../../types';
import CartItemCom from './CartItem';

type Props = {
  carts: CartItem[];
  addToCart: (item: CartAdd) => void;
  removeCart: (item: CartAdd) => void;
};

const CartList: React.FC<Props> = ({ carts, addToCart, removeCart }) => {
  const renderCarts = () => {
    return carts.map((item: CartItem) => {
      return <CartItemCom cartItem={item} addToCart={addToCart} removeCart={removeCart} key={item.product.id} />;
    });
  };
  return (
    <table className=" pl-2 w-full">
      <thead className="border border-gray-100 hidden lg:table-header-group">
        <tr>
          <th className="px-4 py-2 text-emerald-800 text-left font-flow" colSpan={2}>
            PRODUCT
          </th>

          <th className="px-4 py-2 text-emerald-800 text-left font-flow">PRICE</th>
          <th className="px-4 py-2 text-emerald-800 text-left font-flow">QUANTITY</th>
          <th className="px-4 py-2 text-emerald-800 text-left font-flow">TOTAL</th>
          <th className="px-4 py-2 text-emerald-800 text-left font-flow">&nbsp;</th>
        </tr>
      </thead>
      <tbody>{renderCarts()}</tbody>
    </table>
  );
};

export default CartList;
