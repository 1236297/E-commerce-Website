import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prodImg from '../Assets/image-product-1.jpg';
import cartImgtwo from '../Assets/icon-cart 2.svg';
import iconplusImg from '../Assets/icon-plus.svg';
import iconminusImg from '../Assets/icon-minus.svg';
import prodthumbImg from '../Assets/image-product-1-thumbnail.jpg';
import prodthumbImgtwo from '../Assets/image-product-2-thumbnail.jpg';
import prodthumbImgthree from '../Assets/image-product-3-thumbnail.jpg';
import prodthumbImgfour from '../Assets/image-product-4-thumbnail.jpg';
import leftArrow from '../Assets/icon-previous.svg'; // Import your left arrow icon
import rightArrow from '../Assets/icon-next.svg'; // Import your right arrow icon
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import prodImgone from '../Assets/image-product-1.jpg';
import prodImgtwo from '../Assets/image-product-2.jpg';
import prodImgthree from '../Assets/image-product-3.jpg';
import prodImgfour from '../Assets/image-product-4.jpg';

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <img className="fill-[#FF7D1A] hover:opacity-50" src={leftArrow} alt="Previous" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <img className="fill-[#FF7D1A] hover:opacity-50" src={rightArrow} alt="Next" />
  </button>
);

const Home = ({ addToCart, removeFromCart }) => {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const product = {
    id: 1,
    name: 'Product Name',
    price: '$125.00',
    image: 'https://via.placeholder.com/50', // replace with actual product image
    quantity: 0, // Adding quantity to the product object
  };

  const fullscreenRef = React.useRef(null);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    addToCart(productToAdd);
    setQuantity(0);
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    setOpen(true);
  };

  const slideshowRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    showArrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:ml-[100px] p-5 lg:p-20 justify-center'>
        <div className="w-full md:w-[570px]">
          {/* Use Slider component for mobile view */}
          <div className="block md:hidden">
            <Slider {...settings}>
              <div>
                <img className='w-full h-[570px] rounded-md' src={prodImgone} alt="Product 1" />
              </div>
              <div>
                <img className='w-full h-[570px] rounded-md' src={prodImgtwo} alt="Product 2" />
              </div>
              <div>
                <img className='w-full h-[570px] rounded-md' src={prodImgthree} alt="Product 3" />
              </div>
              <div>
                <img className='w-full h-[570px] rounded-md' src={prodImgfour} alt="Product 4" />
              </div>
            </Slider>
          </div>

          {/* Thumbnails for desktop view */}
          <div className='hidden md:block'>
            <img className='w-full h-[570px] rounded-md' src={prodImg} alt="Product" />
            <div className='pt-6 justify-center lg:justify-start md:flex hidden'>
              <button onClick={() => handleThumbnailClick(0)} className="w-[122px] h-[122px] mr-7 ring-none focus:opacity-60 focus:ring-[#ff7d1a] focus:ring-4 rounded-md z-30">
                <img className='w-[122px] h-[122px] mr-7 rounded-md border-0 outline-none border-white hover:opacity-75 active:opacity-70' src={prodthumbImg} alt="Thumbnail 1" />
              </button>
              <button onClick={() => handleThumbnailClick(1)} className="w-[122px] h-[122px] mr-7 ring-none focus:opacity-60 focus:ring-[#ff7d1a] focus:ring-4 rounded-md z-30">
                <img className='w-[122px] h-[122px] mr-7 rounded-md border-0 outline-none border-white hover:opacity-75 active:opacity-70' src={prodthumbImgtwo} alt="Thumbnail 2" />
              </button>
              <button onClick={() => handleThumbnailClick(2)} className="w-[122px] h-[122px] mr-7 ring-none focus:opacity-60 focus:ring-[#ff7d1a] focus:ring-4 rounded-md z-30">
                <img className='w-[122px] h-[122px] mr-7 rounded-md border-0 outline-none border-white hover:opacity-75 active:opacity-70' src={prodthumbImgthree} alt="Thumbnail 3" />
              </button>
              <button onClick={() => handleThumbnailClick(3)} className="w-[122px] h-[122px] ring-none focus:opacity-60 focus:ring-[#ff7d1a] focus:ring-4 rounded-md z-30">
                <img className='w-[122px] h-[122px] rounded-md border-0 outline-none border-white hover:opacity-75 active:opacity-70' src={prodthumbImgfour} alt="Thumbnail 4" />
              </button>
            </div>
          </div>
        </div>
        <div className='lg:w-[800px] lg:h-[500px] lg:ml-[0px] p-5 lg:p-20'>
          <h1 className='text-[#ff7d1a]'>Sneaker Company</h1>
          <h1 className='text-5xl pt-8 pb-10'>Fall Limited Edition <br /> Sneakers</h1>
          <p className='text-gray-500 font-normal text-lg pb-7'>
            These low-profile sneakers are your perfect casual wear <br /> companion. Featuring a
            durable rubber outer sole, they’ll <br /> withstand everything the weather can offer.
          </p>
          <div>
            <div className='flex flex-col md:flex-row md:items-start'>
              <div className='flex items-center'>
                <h1 className='text-4xl'>$125.00</h1>
                <div className='bg-opacity-25 bg-[#ff7d1a] text-[#ff7d1a] rounded-md items-center p-2 ml-4 justify-center flex'>50%</div>
              </div>
              <h1 className='text-sm pt-2 md:pt-0 text-[#b6bcc8] line-through md:ml-0 ml-4'>$250.00</h1>
            </div>
            <div className='flex flex-col md:flex-row md:w-[450px] sm:[320px] mt-4'>
              <div className='bg-[#e9effc] w-200px md:w-[150px] h-12 rounded-md items-center mb-4 md:mr-4 justify-center flex'>
                <button className='hover:opacity-50 pr-12 md:pr-0' onClick={decrementQuantity}>
                  <img src={iconminusImg} alt="Decrease quantity" />
                </button>
                <span><p className='pl-10 pr-10 ' id="output">{quantity}</p></span>
                <button className='hover:opacity-50 pl-12 md:pl-0' onClick={incrementQuantity}>
                  <img src={iconplusImg} alt="Increase quantity" />
                </button>
              </div>
              <button onClick={handleAddToCart} className='rounded-md bg-[#ff7d1a] p-3 md:pl-[100px] md:pr-[100px] w-full md:w-[305px] text-center inline-flex items-center justify-center hover:opacity-70 focus:opacity-50 text-white shadow-lg shadow-[#ff7d1a]'>
                <img className='w-4 h-4 mr-2' src={cartImgtwo} alt='Cart icon' />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: prodImgone },
            { src: prodImgtwo },
            { src: prodImgthree },
            { src: prodImgfour },
          ]}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }} 
          index={currentSlide}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          thumbnails={{
            position: "bottom",
            width: 120,
            height: 80,
            border: 0,
            borderRadius: 0,
            padding: 4,
            gap: 16,
            imageFit: "contain",
            vignette: true
          }}
          slideshow={{ ref: slideshowRef }}
          fullscreen={{ ref: fullscreenRef }}
        />
      </div>
    </>
  );
}

export default Home;
