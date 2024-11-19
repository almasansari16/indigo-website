'use client'
import "./style.css";
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "@/components/Common/Breadcrumb";

const imageData = [
  {
    frontSrc: '/images/tags/SS 25/Blue-Heaven-Front.png',
    backSrc: '/images/tags/SS 25/Blue-Heaven-Back.png'
  },
  {
    frontSrc: '/images/tags/SS 25/Conflux-Front.png',
    backSrc: '/images/tags/SS 25/Conflux-Back.png'
  },
  {
    frontSrc: '/images/tags/SS 25/Flexi-Ease-Front.png',
    backSrc: '/images/tags/SS 25/Flexi-Ease-Back.png'
  },
  {
    frontSrc: '/images/tags/SS 25/heritage-reborn-Front.png',
    backSrc: '/images/tags/SS 25/heritage-reborn-Back.png'
  },
  {
    frontSrc: '/images/tags/SS 25/Quill-Front.png',
    backSrc: '/images/tags/SS 25/Quill-Back.png'
  },
  {
    frontSrc: '/images/tags/SS 25/Vibrant-Essence-Front.png',
    backSrc: '/images/tags/SS 25/Vibrant-Essence-Back.png'
  },
];

const SS25 = () => {
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
      <div className="container mx-auto py-16 px-4">
        <Breadcrumb pageName="Collection SS 25" description="" currentPageName="SS 25" />
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div key={index} className="px-4">
              <div className="relative mx-auto" style={{ height: '340px', width: '170px' }}>
                <div className="flip-card" style={{ height: '100%', width: '100%' }}>
                  <div className="flip-card-inner" style={{ height: '100%', width: '100%' }}>
                    <div className="flip-card-front" style={{ height: '100%', width: '100%' }}>
                      <Image
                        src={item.frontSrc}
                        alt={`Slide ${index + 1} Front`}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flip-card-back" style={{ height: '100%', width: '100%' }}>
                      <Image
                        src={item.backSrc}
                        alt={`Slide ${index + 1} Back`}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SS25;
