import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Sustainability from "@/components/Sustaniability";


export const metadata: Metadata = {
  title: "Sustainability Page",
  // other metadata
};

const SustainabilityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="sustainability"
        description=""
      />

      <Sustainability />
    </>
  );
};

export default SustainabilityPage;
