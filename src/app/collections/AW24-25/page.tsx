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
    frontSrc: '/images/tags/AW 24-25/Blueout-Front.png',
    backSrc: '/images/tags/AW 24-25/Blueout-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Confluence-Front.png',
    backSrc: '/images/tags/AW 24-25/Confluence-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Flexile-Front.png',
    backSrc: '/images/tags/AW 24-25/Flexile-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Plume-Front.png',
    backSrc: '/images/tags/AW 24-25/Plume-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Prism-Front.png',
    backSrc: '/images/tags/AW 24-25/Prism-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Terra-Mater-Front.png',
    backSrc: '/images/tags/AW 24-25/Terra-Mater-Back.png'
  },
  {
    frontSrc: '/images/tags/AW 24-25/Timeless Classics Final Front.png',
    backSrc: '/images/tags/AW 24-25/Timeless Classics Back Final.png'
  },
];


const AW2_25 = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
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
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <>
      <div className="container mx-auto py-16 px-4">
        <Breadcrumb pageName="Collection AW 24 25" description="" currentPageName="AW 24 25" />
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
  )
}

export default AW2_25;
