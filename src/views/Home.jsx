import React from 'react'
import Helping_Hand from '../components/Helping_hand';
import HeroSlider from '../components/Hero';
import Welcome from '../components/Welcome';
import ServicesSection from '../components/Services';
import CTA from "../components/ui/CTA";
import Events from '../components/Events';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <ServicesSection />
      <Helping_Hand />
      <CTA />
      <Events />
    </>
  )
}

export default Home;
