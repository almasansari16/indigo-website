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
    id: 1,
    frontSrc: '/images/tags/AW 24-25/Blueout-Front.png',
    backSrc: '/images/tags/AW 24-25/Blueout-Back.png'
  },
  {
    id: 2,
    frontSrc: '/images/tags/AW 24-25/Confluence-Front.png',
    backSrc: '/images/tags/AW 24-25/Confluence-Back.png'
  },
  {
    id: 3,
    frontSrc: '/images/tags/AW 24-25/Flexile-Front.png',
    backSrc: '/images/tags/AW 24-25/Flexile-Back.png'
  },
  {
    id: 4,
    frontSrc: '/images/tags/AW 24-25/Plume-Front.png',
    backSrc: '/images/tags/AW 24-25/Plume-Back.png'
  },
  {
    id: 5,
    frontSrc: '/images/tags/AW 24-25/Prism-Front.png',
    backSrc: '/images/tags/AW 24-25/Prism-Back.png'
  },
  {
    id: 6,
    frontSrc: '/images/tags/AW 24-25/Terra-Mater-Front.png',
    backSrc: '/images/tags/AW 24-25/Terra-Mater-Back.png'
  },
  {
    id: 7,
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
      <Breadcrumb pageName="Collection AW 24 25" description="" currentPageName="AW 24 25" />
      <div className="flex justify-center">
        <img
          src="/images/lookbook/AW_25_26.jpg"
          alt="AW 23 24 Cover"
          width={1200} // Original width
          height={400} // Fixed height
          className="rounded-lg shadow-lg responsive-image"
        />
      </div>
      <div className="container mx-auto py-16 px-4">
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div key={item.id} className="px-4">
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
