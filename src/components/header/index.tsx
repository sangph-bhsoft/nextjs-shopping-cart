import Link from 'next/link';
import React, { SyntheticEvent, useRef, useEffect, useState, BaseSyntheticEvent } from 'react';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { usdCurrency } from '../../helper';
import { removeCart } from '../../redux/actions';
import { cartListSelector, totalPriceSelector, totalProductCart } from '../../redux/selectors';
import { AppState, CartItem } from '../../types';
const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const toggleCart = () => setOpen((pre) => !pre);
  const [active, setActive] = useState(false);
  const toggleSearch = () => setActive((pre) => !pre);
  const handleClick = (e: SyntheticEvent) => {
    if (e.target === ref.current) {
      toggleCart();
    }
  };

  const dispatch = useDispatch();

  const [isShadow, setIsShadow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 232) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };

  const handleScrollCart = (e: BaseSyntheticEvent) => {
    e.stopPropagation();
    setIsScroll((pre) => !pre);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const carts: CartItem[] = useSelector((state: AppState) => cartListSelector(state));
  const subTotal: number = useSelector((state: AppState) => totalPriceSelector(state));
  const totalProduct: number = useSelector((state: AppState) => totalProductCart(state));

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
          <button
            className="absolute top-4 right-4 text-xs focus:outline-none"
            onClick={() => dispatch(removeCart({ product }))}
          >
            <GrClose />
          </button>
        </div>
      );
    });
  };

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
      <div
        className={`${
          !active ? 'hidden' : 'flex'
        }  animate-fade bg-gray-100 z-50 fixed top-0 right-0 w-full h-screen flex items-center justify-center`}
      >
        <div className="w-3/5">
          <form>
            <input
              placeholder="Search product"
              className="w-full border-b-2 border-black-300 text-6xl bg-gray-100 focus:outline-none focus:placeholder-gray-100"
            />
          </form>
          <p className="text-gray-300 mt-2 text-xl">#Hit enter to search</p>
        </div>
        <button
          className="absolute top-8 right-8 text-5xl transform hover:rotate-45 transition duration-500 ease-in-out focus:outline-none"
          onClick={toggleSearch}
        >
          <GrClose />
        </button>
      </div>
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
                      onClick={toggleCart}
                      className="w-full bg-black-400 py-2 mb-2 text-center text-white hover:bg-orange-400"
                    >
                      VIEW CART
                    </button>
                  </Link>
                  <Link href="/check-out">
                    <button
                      onClick={toggleCart}
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
            onClick={toggleCart}
          >
            <GrClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
