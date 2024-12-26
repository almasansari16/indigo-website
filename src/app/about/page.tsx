import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName=""
        currentPageName="About Us"
        description=""
      />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
