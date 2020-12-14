import Link from 'next/link';
import React from 'react';

const CartHeader = () => {
  return (
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
  );
};

export default CartHeader;
