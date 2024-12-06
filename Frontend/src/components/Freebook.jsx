import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json"
import Slider from "react-slick";
import Cards from './Cards';

const Freebook = () => {
  const filterData = list.filter((data) => data.category ==="Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='font-semibold text-xl pb-2 text-pink-500'>Free Offered Courses</h1>
        <p>🎓 Unlock your potential with our Free Offered Courses! Dive into a wide range of topics designed to empower and inspire you—absolutely free. Start learning today and take the first step towards your goals! 🌟📘</p>
        </div>
      <div>
      <Slider {...settings}>
        {filterData.map((item) => (<Cards item={item} key={item.id} />
        ))}
      </Slider>
      </div>
      </div>
    </>
  )
}

export default Freebook
