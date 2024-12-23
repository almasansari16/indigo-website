
'use client';
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  { src: '/images/indigoals/image-1.jpg' },
  { src: '/images/indigoals/image-2.jpg' },
  { src: '/images/indigoals/image-3.jpg' },
  { src: '/images/indigoals/image-4.jpg' },
  { src: '/images/indigoals/image-5.jpg' },
  { src: '/images/indigoals/image-6.jpg' },
  { src: '/images/indigoals/image-7.jpg' },
  { src: '/images/indigoals/image-8.jpg' },
  { src: '/images/indigoals/image-9.jpg' },
  { src: '/images/indigoals/image-10.jpg' },
  { src: '/images/indigoals/image-11.jpg' },
  { src: '/images/indigoals/image-12.jpg' },
  { src: '/images/indigoals/image-13.jpg' },
  { src: '/images/indigoals/image-14.jpg' },
  { src: '/images/indigoals/image-15.jpg' },
  { src: '/images/indigoals/image-16.jpg' },
  { src: '/images/indigoals/image-17.jpg' },
  { src: '/images/indigoals/image-18.jpg' },


];

const IndigoalsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Remove arrows for a cleaner look
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <h2 className='text-3xl font-semibold mb-10 text-center'>Our IndiGoals Journey Towards The UNSDGs</h2>
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center mx-auto items-center px-4"
            >
              <div className="relative mx-auto max-w-[300px] md:max-w-[400px] lg:max-w-[300px] h-auto">
                <Image
                  src={item.src}
                  alt={`Certificate ${index + 1}`}
                  layout="responsive"
                  width={400} // Adjust for responsiveness
                  height={300} // Maintain aspect ratio
                  quality={100}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default IndigoalsSlider;
