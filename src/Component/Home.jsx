import React from 'react';
import prodImg from '../Assets/image-product-1.jpg'; 

const Home = () => {
  return (
  <>
      <div className='flex p-20 justify-center  '>
        <img className='w-[500px] h-[500px] rounded-md' src={prodImg} />
        <div className='w-[800px] h-[500px] p-20'>
          <h1 className='text-[#ff7d1a]'>Sneaker Company</h1>
            <p>
         
                Fall Limited Edition Sneakers

These low-profile sneakers are your perfect casual wear companion. Featuring a 
durable rubber outer sole, they’ll withstand everything the weather can offer.

$125.00
50%
$250.00

0
Add to cart
            </p>
        
        </div>
      </div>
  </>
  )
}

export default Home