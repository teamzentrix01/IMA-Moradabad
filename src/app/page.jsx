import Helping_Hand from "@/components/Helping_hand";
import HeroSlider from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ServicesSection from "@/components/Services";
import CTA from "@/components/ui/CTA";
import Events from "@/components/Events";

export const metadata = {
  title: "IMA Moradabad | Indian Medical Association Branch Moradabad",
  description:
    "Indian Medical Association (IMA) Moradabad Branch - Serving Moradabad doctors and healthcare community since 1928.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <ServicesSection />
      <Helping_Hand />
      <CTA />
      <Events />
    </>
  );
}
