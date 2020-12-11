import React, { useState, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import ProductList from '../components/product/ProductList';
import ProductModal from '../components/product/ProductModal';
import { addToCart, loadProducts, setProduct } from '../redux/actions';
import { AppState, CartAdd, Product } from '../types';
import Loading from '../components/product/Loading';
import { productListSelector, productSelector } from '../redux/selectors';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const index = () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const fetchProduct = useCallback(() => dispatch(loadProducts()), [dispatch]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const products: Product[] = useSelector((state: AppState) => productListSelector(state));
  const hasMore: boolean = useSelector((state: AppState) => state.productList.hasMore);
  const product: Product = useSelector((state: AppState) => productSelector(state));
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = useCallback(() => setOpenModal((pre) => !pre), []);

  const handleAddToCart = (item: CartAdd) => {
    dispatch(addToCart(item));
    addToast('Added to Cart', { appearance: 'success', autoDismiss: true });
  };

  return (
    <>
      <div className="container lg:mx-auto px-3 md:px-8 lg:px-12">
        <div className="overflow-hidden">
          <Slider {...settings}>
            <div className="relative">
              <div>
                <img src="/images/slide1.jpg" alt="slide1" />
              </div>
              <div className="absolute flex slide-content flex-col">
                <h2 className="text-xs md:text-xl text-blue-400 ">ACCESSORIES</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl  text-black-400  py-0  md:py-4  lg:py-6">
                  Bottle Grinder,
                  <br />
                  Small, 2-Piece
                </h1>
                <button className="bg-black-400 border py-2 md:py-3 text-xs md:text-sm text-white hover:bg-blue-100 hover:border-black-400 hover:text-black-400 w-2/3 transition duration-300 ease-in-out">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="relative">
              <div>
                <img src="/images/slide1.jpg" alt="slide1" />
              </div>
              <div className="absolute flex slide-content flex-col">
                <h2 className="text-xs md:text-xl text-blue-400 ">ACCESSORIES</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl  text-black-400  py-0  md:py-4  lg:py-6">
                  Bottle Grinder,
                  <br />
                  Small, 2-Piece
                </h1>
                <button className="bg-black-400 border py-3 text-sm text-white hover:bg-blue-100 hover:border-black-400 hover:text-black-400 w-2/3 transition duration-300 ease-in-out">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="relative">
              <div>
                <img src="/images/slide1.jpg" alt="slide1" />
              </div>
              <div className="absolute flex slide-content flex-col">
                <h2 className="text-xs md:text-xl text-blue-400 ">ACCESSORIES</h2>
                <h1 className="text-2xl md:text-4xl lg:text-5xl  text-black-400  py-0  md:py-4  lg:py-6">
                  Bottle Grinder,
                  <br />
                  Small, 2-Piece
                </h1>
                <button className="bg-black-400 border py-3 text-sm text-white hover:bg-blue-100 hover:border-black-400 hover:text-black-400 w-2/3 transition duration-300 ease-in-out">
                  SHOP NOW
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="container lg:mx-auto lg:px-12 mt-20 mb-12">
        <div className="flex items-center justify-center">
          <ul className="flex items-center justify-between space-x-8 md:space-x-16">
            <li className="text-2xl md:text-4xl lg:text-5xl hover:text-black-400  text-gray-300">
              <a href="/">New</a>
            </li>
            <li className="text-2xl md:text-4xl lg:text-5xl hover:text-black-400  text-gray-300">
              <a href="/">Popular</a>
            </li>
            <li className="text-2xl md:text-4xl lg:text-5xl hover:text-black-400  text-gray-300">
              <a href="/">Sale</a>
            </li>
          </ul>
        </div>
      </div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProduct}
        hasMore={hasMore}
        loader={<Loading />}
        style={{ overflow: 'hidden' }}
      >
        <ProductList
          addToCart={handleAddToCart}
          setProduct={(p) => dispatch(setProduct(p))}
          toggleModal={toggleModal}
          products={products}
        />
      </InfiniteScroll>

      {/* ------Modal Product------ */}
      <ProductModal toggleModal={toggleModal} addToCart={handleAddToCart} openModal={openModal} product={product} />
      {/* ------end Modal------ */}
    </>
  );
};

export default index;
