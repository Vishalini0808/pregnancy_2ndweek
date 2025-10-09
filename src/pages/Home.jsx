import React from 'react';
import HeroSection from '../components/HeroSection';
import BabyDetailsBanner from '../components/BabyDetailsBanner';
import VisionMission from '../components/VisionMission';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
// import Testimonials from '../components/Testimonials';
import ElderlyAdvice from '../components/ElderlyAdvice';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <BabyDetailsBanner />
      <VisionMission />
      <FeaturesSection />
      <HowItWorks />
      <ElderlyAdvice />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;