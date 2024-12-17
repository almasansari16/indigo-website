import SectionTitle from "../Common/SectionTitle";
import ProcessSlider from "./Processslider";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={
              <>
              Transforming Denim: <br /> Our Services
              </>
            }
            paragraph="At INDIGO, our amazing team embodies
             the limitless potential of denim, passionately 
             striving for innovation and progress in
              everything we do! We're excited to share
               how our commitment to creativity and
                advancement shapes our services. We
                 bring innovation to life!"
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
          <ProcessSlider />
        </div>
      </section>

    </>
  );
};

export default Features;
