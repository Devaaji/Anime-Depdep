import React from 'react'
import Slider from "react-slick";
import AllGenre from '../../pages/allGenre/AllGenre';
import Banner1 from '../../assets/banner-anime.jpg'
import Banner2 from '../../assets/banner-anime2.jpg'
import Banner3 from '../../assets/banner-anime3.png'

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return <div className='w-full'>
    <Slider {...settings}>
      <div className='w-full'>
        <img className='w-full h-64 md:h-96 object-cover ' src={Banner1} alt="" />
      </div>
      <div className='w-full'>
        <img className='w-full h-64  md:h-96 object-cover' src={Banner2} alt="" />
      </div>
      <div className='w-full'>
        <img className='w-full h-64 md:h-96 object-cover' src={Banner3} alt="" />
      </div>
    </Slider>
    <AllGenre />
  </div>
}

export default Header;
