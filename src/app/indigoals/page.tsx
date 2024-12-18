


'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import ImageGallery from "@/components/imageGallery/ImageGallery";
import IndigoalsSlider from "@/components/indigoalsSlider/Slider";

const Indigoals = () => {
  return (
    <div>
      {/* Header */}
      <Breadcrumb
        pageName="Indigoals"
        currentPageName='Indigoals'
        description="Our Vision for a Sustainable Tomorrow"
      />

      <section
        className="relative mx-auto max-w-3xl px-6 py-12 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('images/indigoals/unsdg2.png')",
          backgroundSize: "75%",
        }}
      >
        {/* Overlay for better contrast and increased opacity */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        <div className="relative z-10 p-6 rounded-lg shadow-md">
          <p className="text-base leading-relaxed dark:text-gray-300 text-gray-900 md:text-lg">
            Our commitment to sustainability, aligned with the UNSDGs,
            is evident across our operations. We champion eco-conscious
            formulas, empower diverse communities, and collaborate
            with WWF to combat climate change through green practices
            and solar projects. Recognition on global platforms and
            community acclaim in Sindh highlight the success of our initiatives.
            <br />
            <br />
            The completion of COP28 and alignment with the Paris Agreement
            underscore our resolute dedication to a sustainable future.
            From Quality Education to Good Health and Well-being,
            we actively support various UNSDGs. Our efforts extend
            to land and ocean balance, seen in coastal initiatives
            and coral nursery visits. Looking ahead, we remain
            steadfast in our contribution to global sustainability
            goals, committed to a healthier planet.
          </p>
        </div>
      </section>



      <div>
        <ImageGallery />
      </div>
      <div>
        <IndigoalsSlider />
      </div>
      {/* Goals Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GoalCard
              title="Sustainable Production"
              description="80% water reduction by 2030"
              icon="/images/indigoals/waterDrop.svg"
            />
            <GoalCard
              title="Recycled Materials"
              description="50% recycled fabrics by 2025"
              icon="/images/indigoals/recycle.svg"
            />
            <GoalCard
              title="Fair Trade"
              description="Certified partnerships by 2024"
              icon="/images/indigoals/handshake.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function GoalCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-primary-light dark:bg-dark rounded-lg shadow-three transition duration-300 hover:shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary rounded-full shadow-md mb-4">
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-xl raleway font-bold text-white dark:text-body-color.dark mb-2">
        {title}
      </h3>
      <p className="raleway text-sm font-raleway text-body-color dark:text-body-color.dark">
        {description}
      </p>
    </div>
  );
}




export default Indigoals;