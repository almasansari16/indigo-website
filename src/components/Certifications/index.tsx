'use client'
import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageData = [
  { src: '/images/certificates/Certificate 01.png' },
  { src: '/images/certificates/Certificate 02.png' },
  { src: '/images/certificates/Certificate 03.png' },
  { src: '/images/certificates/Certificate 04.png' },
  { src: '/images/certificates/Certificate 05.png' },
  { src: '/images/certificates/Certificate 06.png' },
  { src: '/images/certificates/Certificate 07.png' },
  { src: '/images/certificates/Certificate 08.png' },
];

const Certifications = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <div className="container w-full mx-auto py-16 px-4">
        <SectionTitle
          title="Certifications"
          paragraph=''
          center
        />
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div key={index} className="">
              <div className="relative mx-auto" style={{ height: '700px', width: '700px' }}>
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  className="rounded-lg "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Certifications;
