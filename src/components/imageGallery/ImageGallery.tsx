// 'use client';
// import React, { useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// const ImageGallery = () => {
//   const [open, setOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const images = [
//     "/images/indigoals/goal_1.jpg",
//     "/images/indigoals/goal_2.jpg",
//     "/images/indigoals/goal_3.jpg",
//     "/images/indigoals/goal_4.jpg",
//     "/images/indigoals/goal_5.jpg",
//     "/images/indigoals/goal_6.jpg",
//     "/images/indigoals/goal_7.jpg",
//     "/images/indigoals/goal_8.jpg",
//     "/images/indigoals/goal_9.jpg",
//     "/images/indigoals/goal_10.jpg",
//     "/images/indigoals/goal_12.jpg",
//     "/images/indigoals/goal_13.jpg",
//     "/images/indigoals/goal_14.jpg",
//     "/images/indigoals/goal_15.jpg",
//     "/images/indigoals/goal_16.jpg",
//     "/images/indigoals/goal_17.jpg"
//   ];

//   return (
//     <section id="gallery" className="py-16">
//       <div className="container mx-auto">
//         <h2 className="mb-10 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] text-center ">
//         Highlighting Our CSR Allies
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Gallery ${index + 1}`}
//               className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
//               onClick={() => {
//                 setCurrentIndex(index);
//                 setOpen(true);
//               }}
//             />
//           ))}
//         </div>
//         <Lightbox
//           open={open}
//           close={() => setOpen(false)}
//           slides={images.map((src) => ({ src }))}
//           index={currentIndex}
//           // onIndexChange={setCurrentIndex}
//         />
//       </div>
//     </section>
//   );
// };

// export default ImageGallery;

'use client';
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "yet-another-react-lightbox/styles.css";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false, // Disable server-side rendering for this component
});

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/indigoals/goal_1.jpg",
    "/images/indigoals/goal_2.jpg",
    "/images/indigoals/goal_3.jpg",
    "/images/indigoals/goal_4.jpg",
    "/images/indigoals/goal_5.jpg",
    "/images/indigoals/goal_6.jpg",
    "/images/indigoals/goal_7.jpg",
    "/images/indigoals/goal_8.jpg",
    "/images/indigoals/goal_9.jpg",
    "/images/indigoals/goal_10.jpg",
    "/images/indigoals/goal_12.jpg",
    "/images/indigoals/goal_13.jpg",
    "/images/indigoals/goal_14.jpg",
    "/images/indigoals/goal_15.jpg",
    "/images/indigoals/goal_16.jpg",
    "/images/indigoals/goal_17.jpg",
  ];

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-10 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] text-center">
          Highlighting Our CSR Allies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentIndex}
          on={{
            click: ({ index }) => setCurrentIndex(index), // Handle image navigation
          }}
        />


      </div>
    </section>
  );
};

export default ImageGallery;

