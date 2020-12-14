import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../../redux/actions';
import { cartListSelector, totalPriceSelector, totalProductCart } from '../../redux/selectors';
import { AppState, CartItem } from '../../types';
import HeaderCart from './HeaderCart';
import HeaderSearch from './HeaderSearch';
const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleCart = () => setOpen((pre) => !pre);
  const [active, setActive] = useState(false);
  const toggleSearch = () => setActive((pre) => !pre);
  const dispatch = useDispatch();
  const [isShadow, setIsShadow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 232) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const carts: CartItem[] = useSelector((state: AppState) => cartListSelector(state));
  const subTotal: number = useSelector((state: AppState) => totalPriceSelector(state));
  const totalProduct: number = useSelector((state: AppState) => totalProductCart(state));

  return (
    <>
      <header className={`py-7 sticky top-0 z-20 bg-white ${isShadow && 'shadow'}`}>
        <div className="flex items-center justify-between px-4 md:px-10">
          <div>
            <h1 className="text-black-300 text-3xl">
              <Link href="/">LEZADA</Link>
            </h1>
          </div>
          <nav>
            <ul className="hidden lg:flex">
              <li className="ml-12 hover:text-black-400 border-b-2 transition duration-500 ease-in-out border-white hover:border-black-400 text-gray-300 text-lg">
                <Link href="/">Home</Link>
              </li>
              <li className="ml-12 hover:text-black-400 border-b-2 transition duration-500 ease-in-out border-white hover:border-black-400 text-gray-300 text-lg">
                <Link href="/">Shop</Link>
              </li>
              <li className="ml-12 hover:text-black-400 border-b-2 transition duration-500 ease-in-out border-white hover:border-black-400 text-gray-300 text-lg">
                <Link href="/">Pages</Link>
              </li>
              <li className="ml-12 hover:text-black-400 border-b-2 transition duration-500 ease-in-out border-white hover:border-black-400 text-gray-300 text-lg">
                <Link href="/">About</Link>
              </li>
              <li className="ml-12 hover:text-black-400 border-b-2 transition duration-500 ease-in-out border-white hover:border-black-400 text-gray-300 text-lg">
                <Link href="/">Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <button
              className="ml-4 md:ml-8 lg:ml-10 text-black-100 font-light focus:outline-none"
              onClick={toggleSearch}
            >
              <FaSearch />
            </button>
            <button className="ml-4 md:ml-8 lg:ml-10 text-black-100 font-light focus:outline-none">
              <FaUser />
            </button>
            <button className="ml-4 md:ml-8 lg:ml-10 text-black-100 font-light focus:outline-none">
              <FaHeart />
            </button>
            <button
              onClick={toggleCart}
              className="ml-4 md:ml-8 lg:ml-10 text-black-100 font-light focus:outline-none relative"
            >
              <FaShoppingCart />
              {totalProduct ? (
                <span className="absolute -top-full -right-full bg-orange-400 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center">
                  {totalProduct}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </header>
      <HeaderSearch active={active} toggleSearch={toggleSearch} />
      <HeaderCart
        carts={carts}
        subTotal={subTotal}
        toggleCart={toggleCart}
        removeCart={(item) => dispatch(removeCart(item))}
        open={open}
      />
    </>
  );
};

export default Header;
