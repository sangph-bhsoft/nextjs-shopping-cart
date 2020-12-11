import React, { useRef, SyntheticEvent, useState } from 'react';

import { FaHeart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { MdStar, MdStarBorder } from 'react-icons/md';
import { CartAdd, Product } from '../../types';

type ProductModalProps = {
  openModal: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
  addToCart: (item: CartAdd) => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ toggleModal, openModal, product, addToCart }) => {
  if (!product) return null;
  const [value, setValue] = useState(1);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleCloseModal = (e: SyntheticEvent) => {
    if (e.target === modalRef.current) {
      toggleModal(false);
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={handleCloseModal}
      className={`${
        !openModal ? 'hidden' : 'flex'
      } justify-center items-center fixed w-full h-full top-0 left-0  bg-gray-300 bg-opacity-50 z-20`}
    >
      <div className=" bg-white z-30 flex w-3/4 h-3/4 relative">
        <div className="w-368">
          <img className="w-full h-full" src={product.imageUrl1} alt={product.name} />
        </div>
        <div className="ml-6 pt-8 space-y-4">
          <h2 className="text-gray-300 text-2xl">{product.name}</h2>
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
            <p className="text-gray-300 text-xl leading-tight w-3/4">{product.description}</p>
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
        <button className="absolute top-4 right-4 text-xs  focus:outline-none" onClick={() => toggleModal(false)}>
          <GrClose />
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
