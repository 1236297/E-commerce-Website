import React from 'react';
import logoImg from  '../Assets/logo.svg';
import cartImg from  '../Assets/icon-cart.svg';
import AvatarImg from  '../Assets/image-avatar.png';
import Card from './Card';
const Navbar = () => {
  return (
  <>
  <div className=' pl-48'>
  <div className=' w-[1200px] pl-10 flex justify-center  text-gray-400 border-b-2 border-gray-200   text-l'>
    
  <ul className=' hidden md:flex flex-row'>
    <img className='h-[20px] m-5' src={logoImg} />
    <li className='p-5'> <a href="/">Collection</a></li>
    <li className='p-5'> <a href="/" >Men</a></li>
    <li className='p-5'> <a href="/">Women</a></li>
    <li className='p-5'> <a  href="/"> About</a></li>
     <li className='p-5'> <a href="/">Contact</a></li>
  </ul>
  <div>
    <img className='h-[20px] m-5 pl-[450px]' src={cartImg} onClick={() => window.location.href = "/Cart"}/>
  </div>
  <div>
    <img className='h-[30px] m-5 ' src={AvatarImg} />
  </div>
  
  </div>
  
  </div>
  </>
  )
}

export default Navbar