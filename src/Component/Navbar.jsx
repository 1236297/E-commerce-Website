import React, { useState } from 'react';
import 'flowbite';
import logoImg from '../Assets/logo.svg';
import AvatarImg from '../Assets/image-avatar.png';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import prodImgthumb from '../Assets/image-product-1-thumbnail.jpg';
import deleteImg from '../Assets/icon-delete.svg';

const Navbar = ({ cartItems, removeFromCart }) => {
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [nav, setNav] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <>
      <div className='ml-[100px]'>
        <div className='md:w-[1300px] w-[500px] flex justify-between items-center text-gray-400 md:border-b-[1px] text-l'>
          <img className='hidden md:block h-[20px] m-5 md:pr-[0px]' src={logoImg} alt="Logo" />
          <div className="md:hidden flex items-center">
            <div onClick={handleNav} className="mr-4">
              {nav ? <AiOutlineCloseCircle size={24} /> : <AiOutlineMenu size={24} />}
            </div>
            <img className='h-[20px] m-5 md:pr-[0px]' src={logoImg} alt="Logo" />
          </div>
          <ul className={`ml-[10px] font-normal md:flex items-center hidden ${nav ? '' : 'hidden'}`}>
            <li className='p-5 pb-[22px] hover:border-b-[4px] hover:border-orange-400'>
              <a href="/">Collection</a>
            </li>
            <li className='p-5 pb-[22px] hover:border-b-[4px] hover:border-orange-400'>
              <a href="/">Men</a>
            </li>
            <li className='p-5 pb-[22px] hover:border-b-[4px] hover:border-orange-400'>
              <a href="/">Women</a>
            </li>
            <li className='p-5 pb-[22px] hover:border-b-[4px] hover:border-orange-400'>
              <a href="/">About</a>
            </li>
            <li className='p-5 pb-[22px] hover:border-b-[4px] hover:border-orange-400'>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className="flex items-center ml-auto">
            <div className='relative'>
              <button
                onClick={togglePopover}
                type="button"
                className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
                aria-label="Cart"
              >
                <svg width="22" height="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 
                    1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 
                    2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 
                    0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 
                    1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                    fill="#69707D"
                    fillRule="nonzero"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute inset-0 object-right-top -mr-6">
                    <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                      {cartCount}
                    </div>
                  </span>
                )}
              </button>
              {popoverOpen && (
                <div className="absolute z-10 w-64 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="px-3 pt-2 pb-4 bg-white border-b border-gray-200 rounded-t-lg">
                    <h3 className="font-semibold text-gray-900">Cart</h3>
                  </div>
                  {cartItems.length === 0 ? (
                    <div className="px-3 py-4 font-bold text-center">
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="px-3 py-4">
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center mb-2">
                          <img src={prodImgthumb} alt={item.name} className="h-10 w-10 rounded" />
                          <div className="ml-2">
                            <p className="text-sm">{item.name}</p>
                            <p className="text-sm text-gray-500">
                              {item.price} x {item.quantity} = ${(item.price.replace('$', '') * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <button onClick={() => removeFromCart(item.id)}>
                            <img src={deleteImg} alt="Delete" />
                          </button>
                        </div>
                      ))}
                      <button className='rounded-md bg-[#ff7d1a] p-3 w-full text-center inline-flex items-center justify-center hover:opacity-70 focus:opacity-50 text-white shadow-lg shadow-[#ff7d1a] mt-4'>
                        Checkout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <img className='h-[35px] m-5 rounded-full hover:ring-2 hover:ring-orange-400' src={AvatarImg} alt="Avatar" />
            </div>
          </div>
        </div>
        {nav && (
          <div className='fixed top-0 left-0 w-[60%] sm:w-[80%] md:w-[60%] h-full bg-[#ffffff] text-gray-300 border-r border-gray-900 z-50'>
            <div className='p-4'>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-3xl text-black'>Menu</h1>
                <AiOutlineCloseCircle size={24} className='text-black' onClick={handleNav} />
              </div>
              <ul className='pt-4'>
                <li className='p-5 text-black'>
                  <a href="/">Collection</a>
                </li>
                <li className='p-5 text-black'>
                  <a href="/">Men</a>
                </li>
                <li className='p-5 text-black'>
                  <a href="/">Women</a>
                </li>
                <li className='p-5 text-black'>
                  <a href="/">About</a>
                </li>
                <li className='p-5 text-black'>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
