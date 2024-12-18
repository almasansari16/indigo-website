// import { Brand } from "@/types/brand";
// import Image from "next/image";
// import brandsData from "./brandsData";
// import "./style.css"


// const Brands = () => {
//   return (
//     <section className="pt-16">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4">
//             <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-600 opacity-80 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
//               {brandsData.map((brand) => (
//                 <SingleBrand key={brand.id} brand={brand} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Brands;

// const SingleBrand = ({ brand }: { brand: Brand }) => {
//   const { href, image, imageLight, name } = brand;

//   return (
//     <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="relative h-10 w-full  transition "
//       >
//         <Image
//             src={imageLight}
//             alt={name}
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             className="hidden dark:block brands_logo"
//           />
//           <Image
//             src={image}
//             alt={name}
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             className="block dark:hidden brands_logo"
//           />
//       </a>
//     </div>
//   );
// };


import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import SectionTitle from "../Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle title={<>Our Customers</>} paragraph={""} center/>
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-600 opacity-80 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">

      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full transition "
      >
        <Image
          src={imageLight}
          alt={name}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};
