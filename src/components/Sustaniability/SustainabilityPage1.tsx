'use client';
import { useEffect, useState } from "react";
import Certifications from "@/components/Certifications";

const SustainabilityPage1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll animation
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  const photos = [
    '/images/Collaboration/001.jpg',
    '/images/Collaboration/002.jpg',
    '/images/Collaboration/003.jpg',
    '/images/Collaboration/004.jpg',
    '/images/Collaboration/005.jpg',
    '/images/Collaboration/006.jpg',
    '/images/Collaboration/007.jpg',
  ];

  const fullSizePhotos = [
    '/images/Collaboration/fullSize-01.jpg',
    '/images/Collaboration/fullSize-02.jpg',
    '/images/Collaboration/fullSize-03.jpg',
    '/images/Collaboration/fullSize-04.jpg',
    '/images/Collaboration/fullSize-05.jpg',
    '/images/Collaboration/fullSize-06.jpg',
    '/images/Collaboration/fullSize-07.jpg',
  ];

  return (
    <section className="pb-[60px] pt-[60px] sm:pb-[120px] sm:pt-[120px]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
          OUR CONTRIBUTION TOWARDS <br /> A GREENER WORLD.
        </h1>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7 mt-20">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => {
                console.log(fullSizePhotos[index]); // Debug value
                setSelectedImage(fullSizePhotos[index]);
              }}
            >
              <img
                src={photo}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-Size Image Overlay */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Full Size"
              className="max-w-full max-h-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-white">Image not available</p>
          )}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}


      <Certifications />

      {/* Fade-in animation */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default SustainabilityPage1;
