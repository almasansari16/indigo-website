// 'use client';
// import React from 'react';
// import SectionTitle from '../Common/SectionTitle';
// import Image from 'next/image';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const imageData = [
//   { src: '/images/certificates/Certificate 01.png' },
//   { src: '/images/certificates/Certificate 02.png' },
//   { src: '/images/certificates/Certificate 03.png' },
//   { src: '/images/certificates/Certificate 04.png' },
//   { src: '/images/certificates/Certificate 05.png' },
//   { src: '/images/certificates/Certificate 06.png' },
//   { src: '/images/certificates/Certificate 07.png' },
//   { src: '/images/certificates/Certificate 08.png' },
// ];

// const Certifications = () => {
//   const settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false, // Remove arrows for a cleaner look
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container w-full mx-auto py-16 px-4">
//       <SectionTitle title="Certifications" paragraph="" center />
//       <Slider {...settings}>
//           {imageData.map((item, index) => (
//             <div key={index} className="justify-center items-center">
//               <div className="relative mx-auto" style={{ height: '700px', width: '700px' }}>
//                 <Image
//                   src={item.src}
//                   alt={`Slide ${index + 1}`}
//                   layout="fill"
//                   objectFit="contain"
//                   quality={100}
//                   className="rounded-lg "
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//     </div>
//   );
// };

// export default Certifications;



'use client';
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
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
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
    <div className="container mx-auto py-4 px-4 flex flex-col items-center">
      <SectionTitle title="Certifications" paragraph="" center />
      <div className="w-full max-w-7xl">
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center px-4"
            >
              <div className="relative max-w-[300px] md:max-w-[500px] lg:max-w-[700px] h-auto">
                <Image
                  src={item.src}
                  alt={`Certificate ${index + 1}`}
                  layout="responsive"
                  width={500} // Adjust for responsiveness
                  height={400} // Maintain aspect ratio
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

export default Certifications;
