// import localFont from 'next/font/local';

// const ClashGrotesk = localFont({
//   src: [
//     {
//       path: '/public/fonts/ClashGrotesk-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '/public/fonts/ClashGrotesk-Regular.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-ClashGrotesk', // Optional: for CSS variable
// });

// import  ClashGrotesk  from '@/fonts/ClashGrotesk'
// console.log(ClashGrotesk)
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: any;
  paragraph: any;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="font-ClashGrotesk mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[40px]">
          {title}
        </h2>
        <p className={`raleway text-base !leading-relaxed text-body-color md:text-lg`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
