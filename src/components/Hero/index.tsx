// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <>
//       <section
//         id="home"
//         className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
//       >
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4">
//               <div className="mx-auto max-w-[800px] text-center">
//                 <h1 className="raleway mb-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
//                   Denim Built to Inspire
//                 </h1>
//                 <h1 className="raleway mb-5 text-2xl font-bold leading-tight text-white dark:text-white sm:text-2xl sm:leading-tight md:text-2xl md:leading-tight">
//                   Mission
//                 </h1>
//                 <p className="raleway mb-12 text-base !leading-relaxed text-white dark:text-white-dark sm:text-lg md:text-xl">
//                   To uphold global leadership in the denim industry
//                   by corroborating authentic processing for quality
//                   and amenity wear. We enact sustainability and
//                   empower innovation by fabricating denim under
//                   the surveillance of qualified textile engineers.
//                   Our utilities include cliental expectations,
//                   exceptional services, and adequate quality with
//                   an extravagance.
//                 </p>
//                 <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//                   <Link
//                     href="/about"
//                     className="inline-block rounded-sm
//                      bg-black dark:bg-black px-8 py-4 text-base
//                       font-semibold text-white raleway
//                        border-2 border-transparent
//                         duration-300 ease-in-out
//                          hover:bg-black/90

//                            dark:text-white
//                             dark:hover:bg-white/5
//                              hover:border-white"
//                   >
//                     Learn More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute right-0 top-0 z-[-1] w-full h-full opacity-60 lg:opacity-100">
//           <Image
//             src="/images/hero/hero5.jpg"
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             className=""
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-800 to-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                {/* Main Heading */}
                <h1 className="mb-6 bg-gradient-to-r from-yellow-500 via-white to-blue-500 bg-clip-text text-4xl font-extrabold uppercase leading-tight text-transparent sm:text-5xl md:text-6xl">
                  Denim Built to Inspire
                </h1>
                {/* Subheading */}
                <h2 className="mb-6 text-xl font-semibold text-gray-200 sm:text-2xl md:text-3xl shadow-sm">
                  Mission
                </h2>

                {/* Paragraph */}
                <p className="mb-12 text-lg text-gray-300 leading-relaxed tracking-wide sm:text-xl md:text-2xl">
                  To uphold global leadership in the denim industry by corroborating authentic processing for quality and amenity wear. We enact sustainability and empower innovation by fabricating denim under the surveillance of qualified textile engineers. Our utilities include client expectations, exceptional services, and adequate quality with extravagance.
                </p>
                {/* Button */}
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/about"
                    className="inline-block rounded-sm
                     bg-black dark:bg-black px-8 py-4 text-base
                      font-semibold text-white raleway
                       border-2 border-transparent
                        duration-300 ease-in-out
                         hover:bg-black/90

                           dark:text-white
                            dark:hover:bg-white/5
                             hover:border-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-[-1] h-full w-full opacity-75">
          <Image
            src="/images/hero/hero5.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
