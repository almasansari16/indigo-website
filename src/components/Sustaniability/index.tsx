import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Sustainability = () => {
  return (
    <>
      <section id="sustainbility" className="pt-8">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* Left Content */}
              <div className="w-full px-4 lg:w-1/2 md:w-1/2">
                <SectionTitle
                  title="Your Denim Journey with Us"
                  paragraph={
                    <>
                      As a prominent entity in the
                      global denim manufacturing landscape,
                      our organization distinguishes itself
                      through a strategic commitment to three
                      core principles: sustainability,
                      innovation, and purposeful design. <br />
                      We recognize that contemporary textile
                      production demands a holistic approach
                      that transcends traditional manufacturing
                      paradigms. <br /> By integrating environmentally
                      responsible practices, cutting-edge technological
                      advancements, and meticulously crafted design
                      strategies, we consistently deliver superior
                      denim products that not only meet but exceed
                      contemporary market expectations and consumer requirements.
                    </>
                  }
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
                <div className="relative mx-auto max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/sustainability/03.jpg"
                    alt="about-image"
                    layout="intrinsic"
                    width={1200}  // Set the width according to your design needs
                    height={800}// Proportionally smaller height
                    className="image_sus mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded"
                  />
                  <Image
                    src="/images/sustainability/03.jpg"
                    alt="about-image"
                    layout="intrinsic"
                    width={1200}  // Set the width according to your design needs
                    height={800}// Same height as the other image for consistency
                    className="image_sus image_sus mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded"
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
