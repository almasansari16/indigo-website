import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="About Us"
                paragraph={
                  <>
                    Indigo Textile (Pvt) Ltd was formed in the year 2005 with the vision of setting up
                    Pakistan’s most premium state-of-the-art denim manufacturing facility. <br />

                    With an overall capacity of 36M meters, global recognition, and providing the
                    global fashion market with premium denim products, Indigo has proved itself on
                    different fronts of technology and sustainability. <br />

                    At Indigo, we control the entire process of denim manufacturing, starting from
                    the yarn to the finished fabric. We are backed by international quality standards,
                    ensuring that every product made is of the highest quality. <br />

                    Our strongest forte is technology and sustainability, and we channel this into
                    the manufacturing of our products.
                  </>
                }


                mb="44px"
              />
            </div>

            <div className="w-full px-4 lg:w-1/2 mt-5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/about.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* our mission */}
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            <div className="w-full px-4 lg:w-1/2 mt-5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/ourMission.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/ourMission.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 mt-5">
              <SectionTitle
                title="Our Vision"
                paragraph="Engineers of denim strive to produce sustainable and habitable clothing. To attain the embodiment of excellence in global markets by culminating modern innovations and new solutions of denim."
                mb="44px"
              />
            </div>
          </div>
        </div>

        {/* meet the team */}

        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2 mt-5">
              <SectionTitle
                title={<>
                  The Minds Behind the Denim
                  </>}
                paragraph={
                  <>
                    <strong className=" text-xl leading-loose text-white font-bold ">Product and Development Team:</strong> <br />
                    Pioneers in designing innovative denim products, ensuring top-notch quality and style. They drive creativity and craftsmanship, pushing the boundaries of fashion. <br />
                    <strong className=" text-xl leading-loose text-white font-bold "> Research and Development Team:</strong> <br />
                    Explores sustainable materials and techniques, enhancing denim functionality and performance while reducing environmental impact.<br />
                    <strong className=" text-xl leading-loose text-white font-bold "> CSR Team:</strong> <br />
                    Champions sustainability and community engagement, leading eco-friendly and ethical initiatives that support social and environmental well-being.

                  </>
                }
                mb="44px"
              />
              {/* Add photos of leadership here */}
            </div>
            <div className="w-full px-4 lg:w-1/2 mt-5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/ourTeam.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/ourTeam.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* join us */}
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* <div className="w-full px-4 lg:w-1/2 mt-5">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/about.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
                <Image
                  src="/images/about/about.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                />
              </div>
            </div> */}
            <div className="w-full px-4 lg:w-1/2 mt-5">
              <SectionTitle
                title="Join Us in Our Mission"
                paragraph="Be a part of our sustainable journey. Contact us to learn more about our products or explore partnership opportunities."
                mb="44px"
              />
              <Link href={`/contact`}> <button className="mt-4 px-8 py-3 bg-primary text-white rounded">Contact Us</button></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSectionOne;
