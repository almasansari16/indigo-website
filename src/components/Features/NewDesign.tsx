'use client'
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import "./style.css";
import { Feature } from "@/types/feature";
import Image from 'next/image';
// const featuresData: Feature[] = [
//   {
//     id: 3,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/ball-warping.jpg"
//         alt="Ball Warping"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Ball Warping",
//     paragraph: "Ball warping transforms individual yarns into tightly wound beams, ensuring uniform tension and alignment, setting the stage for high-quality fabric production at INDIGO.",
//   },
//   {
//     id: 1,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/rope-dyeing.jpg"
//         alt="Rope Dyeing"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Rope Dyeing",
//     paragraph: "Our rope dyeing technique applies vibrant colors to yarns, creating rich, consistent hues that enhance denim’s aesthetic, showcasing our commitment to innovative and beautiful fabric transformation.",
//   },
//   {
//     id: 4,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/rebeaming2.jpg"
//         alt="Rebeaming"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Rebeaming",
//     paragraph: "During Rebeaming, we transfer yarn between beams, adjusting tension for optimal alignment. This meticulous process ensures our fabric quality is consistently high, ready for seamless weaving.",
//   },
//   {
//     id: 5,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/sizing.jpg"
//         alt="Sizing"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Sizing",
//     paragraph: "Sizing strengthens and prepares yarns for the weaving stage, enhancing durability while ensuring smooth performance. We prioritize quality in this crucial step, ensuring lasting, beautiful denim.",
//   },
//   {
//     id: 6,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/weaving.jpg"
//         alt="Weaving"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Weaving",
//     paragraph: "In weaving, yarn transforms into beautiful, intricate fabrics through advanced technology and skilled craftsmanship, allowing us to create fashionable denim with unique patterns and textures that inspire creativity.",
//   },
//   {
//     id: 7,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/finishing.jpg"
//         alt="Finishing"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Finishing",
//     paragraph: "Our finishing process refines denim by enhancing texture and color while applying specialized treatments. This results in luxurious, ready-to-wear products that combine style, comfort, and durability.",
//   },
//   {
//     id: 8,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/inspection.jpg"
//         alt="Inspection"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Inspection",
//     paragraph: "We conduct thorough inspections to ensure every denim piece meets our quality standards, guaranteeing consistency and perfection in every roll, reflecting our commitment to excellence and customer satisfaction.",
//   },
//   {
//     id: 9,
//     icon: (
//       <Image
//         className="feature-icon"
//         src="/images/process/sampling.jpg"
//         alt="Sampling"
//         width={200}
//         height={200}
//       />
//     ),
//     title: "Sampling",
//     paragraph: "Sampling allows us to innovate and test new designs, creating prototypes that highlight our latest concepts. This collaborative approach encourages creativity and ensures our final products exceed expectations.",
//   },
// ];
const NewDesign = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
        
      </div>
    </div>
  );
};

export default NewDesign;
