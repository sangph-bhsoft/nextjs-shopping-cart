import React from 'react';
import { CartAdd, Product } from '../../types';
import ProductItem from './ProductItem';

type ProductListProps = {
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: Product[];
  addToCart: (item: CartAdd) => void;
  setProduct: (item: Product) => void;
};

const ProductList: React.FC<ProductListProps> = ({ toggleModal, products, addToCart, setProduct }) => {
  const renderListProduct = () => {
    return products.map((item) => (
      <ProductItem
        addToCart={addToCart}
        setProduct={setProduct}
        key={item.id}
        product={item}
        toggleModal={toggleModal}
      />
    ));
  };
  return (
    <div className="container lg:mx-auto px-3 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10">
        {renderListProduct()}
      </div>
    </div>
  );
};

export default React.memo(ProductList);
