


'use client';

import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import ImageGallery from "@/components/imageGallery/ImageGallery";

const Indigoals = () => {
  return (
    <div>
      {/* Header */}
      <Breadcrumb
        pageName="Indigoals"
        currentPageName='Indigoals'
        description="Our Vision for a Sustainable Tomorrow"
      />
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

      {/* Sustainability Journey */}
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <p className="text-base leading-relaxed text-gray-500 md:text-lg">
          Our commitment to sustainability, aligned with the UNSDGs, is evident across our operations. We champion eco-conscious formulas, empower diverse communities, and collaborate with WWF to combat climate change through green practices and solar projects. Recognition on global platforms and community acclaim in Sindh highlight the success of our initiatives.
          <br />
          <br />
          The completion of COP28 and alignment with the Paris Agreement underscore our resolute dedication to a sustainable future. From Quality Education to Good Health and Well-being, we actively support various UNSDGs. Our efforts extend to land and ocean balance, seen in coastal initiatives and coral nursery visits. Looking ahead, we remain steadfast in our contribution to global sustainability goals, committed to a healthier planet.
        </p>
      </section>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
}

function GoalCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-gray-600 opacity-80 rounded-lg shadow-lg text-center">
      <img src={icon} alt={title} className="h-16 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}


export default Indigoals;