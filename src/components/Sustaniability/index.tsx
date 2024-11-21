import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Sustainability = () => {
  return (
    <>
      <section id="sustainbility" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Left Content */}
              <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                <SectionTitle
                  title="Commitment to Sustainability"
                  paragraph=" Sustainability is at the core of what we do.
                  Sustainable denim and fabric development is
                  a commitment integrated into our products,
                   method, and people. We constantly push limits
                  and challenge accepted standards."
                  mb="44px"
                />
                {/* Button */}
                <div>
                  <a
                    href="/sustainability"
                    className="inline-block rounded bg-primary px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/sustainability/sus2.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded"
                  />
                  <Image
                    src="/images/sustainability/sus2.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
