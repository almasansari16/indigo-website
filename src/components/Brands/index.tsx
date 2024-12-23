import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";


const Brands = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <SectionTitle
          title={<>Our Customers</>}
          paragraph="We proudly showcase the brands we've worked with."
          center
        />
        {/* <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6"> */}
          {/* Make sure this div is wide enough */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 xl:col-span-7">
            <img src="/images/brands/brands_light.jpg" className="w-full h-full object-contain rounded-xl block dark:hidden" />
            <img src="/images/brands/brands_dark.jpg" className="w-full h-full object-contain rounded-xl hidden dark:block" />

          </div>
        {/* </div> */}

      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noreferrer"
      className="group flex items-center justify-center p-4 rounded-md bg-white dark:bg-gray-700 shadow hover:shadow-lg transition duration-300"
    >
      <div className="relative h-20 w-32">
        <Image
          src={imageLight}
          alt={name}
          layout="fill"
          objectFit="contain"
          quality={100}
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          quality={100}
          className="block dark:hidden"
        />
      </div>
    </a>
  );
};
