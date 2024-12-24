'use client'
import SectionTitle from "../Common/SectionTitle";
import ProcessSlider from "./Processslider";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import NewDesign from "./NewDesign";


const Features = () => {
  return (
    <>
      <section id="features" className="py-8">
        <div className="container">
          <SectionTitle
            title={
              <>
                Transforming Denim
              </>
            }
            paragraph={
              <>
                At INDIGO, our amazing team embodies
                the limitless potential of denim, passionately
                striving for innovation and progress in
                everything we do! We're excited to share
                how our commitment to creativity and
                advancement shapes our services. We
                bring innovation to life!
              </>
            }
            center
          />
          <ProcessSlider />
      
        </div>
      </section>

    </>
  );
};

export default Features;
