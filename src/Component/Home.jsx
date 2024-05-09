import React from 'react';
import prodImg from '../Assets/image-product-1.jpg'; 
import cartImgtwo from  '../Assets/icon-cart 2.svg';
import iconplusImg from  '../Assets/icon-plus.svg';
import iconminusImg from  '../Assets/icon-minus.svg';
import prodthumbImg from  '../Assets/image-product-1-thumbnail.jpg';
import prodthumbImgtwo from  '../Assets/image-product-2-thumbnail.jpg';
import prodthumbImgthree from  '../Assets/image-product-3-thumbnail.jpg';
import prodthumbImgfour from  '../Assets/image-product-4-thumbnail.jpg';
const Home = () => {
  return (
  <>
      <div className='flex p-20 justify-center  '>
        <div >
        <img className='w-[570px] h-[570px] rounded-md' src={prodImg} />
        <div className=' pt-6  flex'>
   
        <img className='w-[122px] h-[122px] mr-7 rounded-md border-2 border-white focus:opacity-50 focus:border-[#ff7d1a] hover:opacity-75 active:opacity-70  ' src={prodthumbImg} />
           


        <img className='w-[122px] h-[122px] mr-7 rounded-md border-2  border-white focus:opacity-50 focus:border-[#ff7d1a] hover:opacity-75 active:opacity-70  ' src={prodthumbImgtwo} alt=''/>
        <img className='w-[122px] h-[122px]  mr-7 rounded-md border-2  border-white focus:opacity-50 focus:border-[#ff7d1a] hover:opacity-75 active:opacity-70 ' src={prodthumbImgthree} alt=''/>
        <img className='w-[122px] h-[122px] rounded-md border-2   border-white focus:opacity-50 focus:border-[#ff7d1a] hover:opacity-75 active:opacity-70 ' src={prodthumbImgfour} alt=''/>
        </div>
        </div>
    <div className='w-[800px] h-[500px] p-20'>
          <h1 className='text-[#ff7d1a]'>Sneaker Company</h1>
          <h1 className='text-5xl pt-8 pb-10'>Fall Limited Edition <br/> Sneakers</h1>
          <p className='text-gray-500 font-normal text-lg pb-7'>
          These low-profile sneakers are your perfect casual wear  <br/> companion. Featuring a 
          durable rubber outer sole, they’ll  <br/>withstand everything the weather can offer.
          </p>
          <div>
            <div className='flex'>
            <h1 className='text-4xl'>
              $125.00
             
              </h1>
              <div className='bg-opacity-25 bg-[#ff7d1a] text-[#ff7d1a]  rounded-md items-center p-2 ml-4   justify-center flex' >50%</div>
              </div>
            
           
            <h1 className='text-sm pt-5 pb-10 text-[#b6bcc8] line-through'>
              $250.00
            </h1>
            <div className='flex'>
            <div className='bg-[#e9effc] w-[150px] h-12 rounded-md items-center mr-4  justify-center flex'>
            <button classname='hover:opacity-50 '><img src={iconminusImg}  ></img></button>
            <span><p className='pl-10 pr-10 '>0</p></span>
            <button className='hover:opacity-50 '><img src={iconplusImg} ></img></button>
            </div>
            
            <button className='rounded-md bg-[#ff7d1a] p-3 pl-20 pr-[100px] text-center inline-flex items-center me-2 hover:opacity-70  text-white shadow-lg shadow-[#ff7d1a]'>
             <img className='w-3.5 h-3.5 me-2 mr-6 ' src={cartImgtwo} alt=''></img>
             Add to cart
             </button>
             </div>

          </div>

        
        </div>
      </div>
  </>
  )
}

export default Home