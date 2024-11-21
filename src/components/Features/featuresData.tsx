
import Image from "next/image"; // Import Next.js Image if you're using Next.js
import { Feature } from "@/types/feature";
import "./style.css"

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        className="feature-icon"
        src="/images/features/RnD.JPG"
        alt="Research & Development"
        width={200}
        height={200}
      />
    ),
    title: "Research & Development",
    paragraph: "Based at our headquarters, INDIGO has an internal Research & Development department. This committed group of experts puts in endless effort to develop fresh, creative fabric lines and patents.",
  },
  {
    id: 3,
    icon: (
      <Image
        className="feature-icon"
        src="/images/features/PnD.JPG"
        alt="Product and Development"
        width={200}
        height={200}
      />
    ),
    title: "Product and Development",
    paragraph: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 4,
    icon: (
      <Image
        className="feature-icon"
        src="/images/features/sustainable.jpg"
        alt="Sustainable Practices"
        width={200}
        height={200}
      />
    ),
    title: "Sustainable Practices",
    paragraph: "At INDIGO, we are dedicated to reducing environmental impact by incorporating sustainable and ethical practices in our production process.",
  },
  {
    id: 5,
    icon: (
      <Image
        className="feature-icon"
        src="/images/features/CSR.jpg"
        alt="Sustainable Practices"
        width={200}
        height={200}
      />
    ),
    title: "Our CSR",
    paragraph: "At INDIGO, we are dedicated to reducing environmental impact by incorporating sustainable and ethical practices in our production process.",
  },
];


export default featuresData;