import Link from 'next/link';
import React, { BaseSyntheticEvent, useCallback, useState } from 'react';
import { FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { usdCurrency } from '../../helper';
import { CartAdd, Product } from '../../types';

type ProductItemProps = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  addToCart: (item: CartAdd) => void;
  setProduct: (item: Product) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ toggleModal, product, addToCart, setProduct }) => {
  const handleViewProduct = useCallback(() => {
    toggleModal(true);
    setProduct(product);
  }, [setProduct, product, toggleModal]);
  const [show, setShow] = useState(false);
  const toggleImage = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    setShow((pre) => !pre);
  };
  return (
    <div onMouseEnter={toggleImage} onMouseLeave={toggleImage} className="relative">
      <div>
        <Link href={`/product/${product.id}`}>
          <div className="cursor-pointer">
            <img className={`${show ? 'hidden' : ''} animate-show `} src={product.imageUrl1} alt="prd1" />
            <img className={`${!show ? 'hidden' : ''} animate-show `} src={product.imageUrl2} alt="prd2" />
          </div>
        </Link>
        <div className="absolute flex flex-col top-3 left-3 z-10 ">
          <div className="bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full">-10%</div>
          <div className="bg-orange-400 text-white w-12 h-12 flex items-center justify-center rounded-full mt-2">
            new
          </div>
        </div>
        <div
          className={`${!show ? 'hidden' : ''} absolute flex flex-col top-3 right-3 z-10 space-y-2 animate-fadeProduct`}
        >
          <button className="w-10 h-10 bg-white items-center justify-center flex text-orange-400 focus:outline-none">
            <FaHeart />
          </button>
          <button
            onClick={() => addToCart({ product, quantity: 1 })}
            className="w-10 h-10 bg-white items-center justify-center flex text-blue-400 focus:outline-none"
          >
            <FaShoppingCart />
          </button>
          <button
            className="w-10 h-10 bg-white items-center justify-center flex text-gray-300 focus:outline-none"
            onClick={handleViewProduct}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="mt-2">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-black-400 text-xl cursor-pointer">{product.name}</h3>
        </Link>
        <div>
          <span className="text-sm text-gray-300 line-through">{usdCurrency(product.price)}</span>
          <span className="text-black-100 text-xl ml-2">{usdCurrency(product.promotion)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
