'use client'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Feature } from "@/types/feature";
import "./style.css"; // Make sure you have any custom styles here

const featuresData: Feature[] = [
  {
    id: 3,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/ball-warping.jpg"
        alt="Ball Warping"
        width={200}
        height={200}
      />
    ),
    title: "Ball Warping",
    paragraph: "Ball warping transforms individual yarns into tightly wound beams, ensuring uniform tension and alignment, setting the stage for high-quality fabric production at INDIGO.",
  },
  {
    id: 1,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/rope-dyeing.jpg"
        alt="Rope Dyeing"
        width={200}
        height={200}
      />
    ),
    title: "Rope Dyeing",
    paragraph: "Our rope dyeing technique applies vibrant colors to yarns, creating rich, consistent hues that enhance denim’s aesthetic, showcasing our commitment to innovative and beautiful fabric transformation.",
  },
  {
    id: 4,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/rebeaming2.jpg"
        alt="Rebeaming"
        width={200}
        height={200}
      />
    ),
    title: "Rebeaming",
    paragraph: "During Rebeaming, we transfer yarn between beams, adjusting tension for optimal alignment. This meticulous process ensures our fabric quality is consistently high, ready for seamless weaving.",
  },
  {
    id: 5,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/sizing.jpg"
        alt="Sizing"
        width={200}
        height={200}
      />
    ),
    title: "Sizing",
    paragraph: "Sizing strengthens and prepares yarns for the weaving stage, enhancing durability while ensuring smooth performance. We prioritize quality in this crucial step, ensuring lasting, beautiful denim.",
  },
  {
    id: 6,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/weaving.jpg"
        alt="Weaving"
        width={200}
        height={200}
      />
    ),
    title: "Weaving",
    paragraph: "In weaving, yarn transforms into beautiful, intricate fabrics through advanced technology and skilled craftsmanship, allowing us to create fashionable denim with unique patterns and textures that inspire creativity.",
  },
  {
    id: 7,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/finishing.jpg"
        alt="Finishing"
        width={200}
        height={200}
      />
    ),
    title: "Finishing",
    paragraph: "Our finishing process refines denim by enhancing texture and color while applying specialized treatments. This results in luxurious, ready-to-wear products that combine style, comfort, and durability.",
  },
  {
    id: 8,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/inspection.jpg"
        alt="Inspection"
        width={200}
        height={200}
      />
    ),
    title: "Inspection",
    paragraph: "We conduct thorough inspections to ensure every denim piece meets our quality standards, guaranteeing consistency and perfection in every roll, reflecting our commitment to excellence and customer satisfaction.",
  },
  {
    id: 9,
    icon: (
      <Image
        className="feature-icon"
        src="/images/process/sampling.jpg"
        alt="Sampling"
        width={200}
        height={200}
      />
    ),
    title: "Sampling",
    paragraph: "Sampling allows us to innovate and test new designs, creating prototypes that highlight our latest concepts. This collaborative approach encourages creativity and ensures our final products exceed expectations.",
  },
];

const ProcessSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    centerMode: true, // This centers the slides
    centerPadding: "0",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="w-[100%] items-center max-w-7xl ">
        <Slider {...settings}>
          {featuresData.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center p-4">
              <div className="relative transition-transform transform hover:scale-105 mb-4 h-[250px] w-[250px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                {item.icon}
              </div>
              <h3 className="raleway mb-2 text-lg font-bold text-black dark:text-white">{item.title}</h3>
              <p className="raleway text-sm font-medium leading-relaxed text-primary">{item.paragraph}</p>
            </div>

          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProcessSlider;
