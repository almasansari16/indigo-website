
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
              <div className="mx-auto max-w-[80%] text-center">
                {/* Main Heading */}
                <h1 className="font-clashGrotesk mb-6 tracking-[5px] bg-gradient-to-r from-yellow-500 via-white to-blue-500 bg-clip-text text-4xl font-extrabold uppercase leading-tight text-transparent sm:text-5xl md:text-6xl">
                  Denim {''} Built  {''} to {''} Inspire
                </h1>
                {/* Subheading */}
                <h2 className="raleway mb-6 text-2xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 via-white to-blue-500 bg-clip-text shadow-md sm:text-3xl md:text-4xl tracking-widest uppercase">
                  Mission
                </h2>


                {/* Paragraph */}
                <p className="raleway mb-12 text-lg text-gray-300 leading-relaxed tracking-wide sm:text-xl md:text-2xl">
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
