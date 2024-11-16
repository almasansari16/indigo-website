'use client'
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Certifications from "@/components/Certifications";
import { useEffect } from "react";




const Sustainability = () => {
  // Add scroll animation
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
  return (
    <>
      <section className="pb-[120px] pt-[120px]">

        <div
          style={{
            // backgroundImage: `url(/images/sustainability/sustainability-img2.jpg)`,
            backgroundSize: 'cover',
            width: '100%',
            height: '500px',
          }}
          className="flex items-center justify-center fade-in"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center text-center">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[800px]">
                  <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xs:text-3xl sm:text-4xl md:text-5xl"
                  // className="mb-5 text-3xl font-bold leading-tight text-[#090e34] xs:text-4xl sm:text-5xl md:text-6xl"
                  >
                    OUR CONTRIBUTION TOWARDS A GREENER WORLD.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Guidelines Section */}
        <div className="mb-8 max-w-[70%] md:mb-0 lg:mb-12 m-auto mt-[100px] fade-in">
          <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xs:text-3xl sm:text-4xl md:text-5xl">
            SUSTAINABILITY GUIDELINES
          </h1>
          <p className="text-lg text-center font-medium leading-relaxed text-body-color">
            <b>Weave greener for a greener future</b><br />
            We believe in making denim for a greener
            tomorrow which is why we aim to adopt practices that
            are sustainable and help lower our carbon footprint.
          </p>
        </div>
        <hr className="w-1/2 mx-auto my-8 border-t-2 border-green-500 fade-in" />
        <div className="container mx-auto px-4 my-40">
          {/* Sustainable Fibers Section with Image Hover */}
          <div className="container mx-auto px-4 my-40 fade-in">
            {/* <h2 className="text-center mb-5 text-3xl font-bold">SUSTAINABLE FIBERS</h2> */}
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-4 px-4 hover:scale-105 transition-transform">
                <Image
                  src="/images/sustainability/fiber4.jpg"
                  alt="sustainable fiber"
                  width={400}
                  height={200}
                  style={{ height: '300px' }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center lg:col-span-4">
                <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xs:text-3xl sm:text-4xl md:text-5xl">SUSTAINABLE FIBERS</h1>
              </div>
              {[1, 3, 2, 5].map((i) => (
                <div key={i} className="hover:scale-105 transition-transform">
                  <Image
                    src={`/images/sustainability/fiber${i}.jpg`}
                    alt="sustainable fiber"
                    width={400}
                    height={250}
                    style={{ height: '250px' }}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>


        <div className="container mx-auto px-4 my-60">
          <div className="container mx-auto px-4 my-40 fade-in">
            {/* <h2 className="text-center mb-5 text-3xl font-bold">
              SUSTAINABLE DYEING</h2> */}
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-4 px-4 hover:scale-105 transition-transform">
                <Image
                  src="/images/sustainability/dyeing1.jpg"
                  alt="sustainable fiber"
                  width={400}
                  height={200}
                  style={{ height: '300px' }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center lg:col-span-4">
                <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xs:text-3xl sm:text-4xl md:text-5xl"> SUSTAINABLE DYEING</h1>
              </div>
              {[4, 3, 2, 5].map((i) => (
                <div key={i} className="hover:scale-105 transition-transform">
                  <Image
                    src={`/images/sustainability/dyeing${i}.jpg`}
                    alt="sustainable fiber"
                    width={400}
                    height={250}
                    style={{ height: '250px' }}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 my-60">
          <div className="container mx-auto px-4 my-40 fade-in">
            <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-4 px-4 hover:scale-105 transition-transform">
                <Image
                  src="/images/sustainability/process2.jpg"
                  alt="sustainable fiber"
                  width={400}
                  height={200}
                  style={{ height: '300px' }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-center lg:col-span-4">
                <h1 className="mb-3 text-3xl font-bold text-black dark:text-white xs:text-3xl sm:text-4xl md:text-5xl"> SUSTAINABLE DYEING</h1>
              </div>
              {[1, 3, 4, 5].map((i) => (
                <div key={i} className="hover:scale-105 transition-transform">
                  <Image
                    src={`/images/sustainability/process${i}.jpg`}
                    alt="sustainable fiber"
                    width={400}
                    height={250}
                    style={{ height: '250px' }}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Certifications />
        //       {/* Add custom styles for animations and hover */}
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
        .hover\\:scale-105:hover {
          transform: scale(1.05);
         }
       `}</style>


      </section>
    </>
  );
};

export default Sustainability;