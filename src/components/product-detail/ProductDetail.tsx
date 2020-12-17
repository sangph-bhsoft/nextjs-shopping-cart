import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { CartAdd, Product } from '../../types';

type Props = {
  product: Product;
  addToCart: (item: CartAdd) => void;
};

const ProductDetail: React.FC<Props> = ({ product, addToCart }) => {
  const [value, setValue] = useState(1);
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-368">
          <img className="w-full h-full" src={product?.imageUrl1} alt={product?.name} />
        </div>
        <div className="ml-6 pt-8 space-y-4">
          <h2 className="text-gray-300 text-2xl">{product?.name}</h2>
          <div>
            <span className="text-gray-300 line-through">$ 17.00</span>
            <span className="text-xl text-black-200 ml-4">$ 15.00</span>
          </div>
          <div className="flex space-x-1 text-yellow-100 text-xl">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarBorder />
          </div>
          <div>
            <p className="text-gray-300 text-xl leading-tight w-3/4">{product?.description}</p>
          </div>
          <div className="flex items-center">
            <span>Quantity</span>
            <div className="flex ml-6 border-b border-gray-300 py-2">
              <button
                className="text-xl focus:outline-none"
                onClick={() =>
                  setValue((pre) => {
                    if (pre === 1) return pre;
                    return pre - 1;
                  })
                }
              >
                -
              </button>
              <input className="text-center focus:outline-none" value={value} readOnly />
              <button className="text-xl focus:outline-none" onClick={() => setValue(value + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              className="bg-black-200 text-white text-xl py-2 px-4"
              onClick={() =>
                addToCart({
                  product,
                  quantity: value,
                })
              }
            >
              ADD TO CART
            </button>
            <button className="bg-white text-black-400 border border-black-200 px-3 text-xl">
              <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
