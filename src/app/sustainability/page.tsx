import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import SustainabilityPage1 from "@/components/Sustaniability/SustainabilityPage1";


export const metadata: Metadata = {
  title: "Sustainability Page",
  // other metadata
};

const SustainabilityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="sustainability"
        currentPageName="sustainability"
        description=""
      />

      <SustainabilityPage1 />
    </>
  );
};

export default SustainabilityPage;
