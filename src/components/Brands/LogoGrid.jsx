import Image from "next/image";
import "./style.css"


const LogoGrid = () => {
  const logos = [
    { src: "/images/brands/01.png", alt: "Levi's" },
    { src: "/images/brands/02.png", alt: "H&M" },
    { src: "/images/brands/03.png", alt: "Ann Taylor" },
    { src: "/images/brands/04.png", alt: "ASOS" },
    { src: "/images/brands/05.png", alt: "Tom Tailor" },
    { src: "/images/brands/06.png", alt: "Inditex" },
    { src: "/images/brands/07.png", alt: "Reitmans" },
    { src: "/images/brands/08.png", alt: "Next" },
    { src: "/images/brands/09.png", alt: "Springfield" },
    { src: "/images/brands/10.png", alt: "Tiffosi Denim" },
    { src: "/images/brands/11.png", alt: "Guess" },
    { src: "/images/brands/12.png", alt: "Kappahl" },
    { src: "/images/brands/13.png", alt: "Hugo Boss" },
  ];

  return (
    <div className="grid-container">
      {logos.map((logo, index) => (
        <div key={index} className="grid-item">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={150}
            height={50}
            className="logo"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;
