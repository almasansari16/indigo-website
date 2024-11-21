import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Certifications from "@/components/Certifications";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Sustainability from "@/components/Sustaniability";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "INDIGO TEXTILE",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <Sustainability />
      {/* <AboutSectionOne />
      <AboutSectionTwo />
      <Pricing /> */}
      <Certifications />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
