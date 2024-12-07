import React from 'react';
import Navbar from "../components/navbar";
import Herosection from '../components/herosection';
import Skillcarousel from '../components/skill-carousel';
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Herosection />
      </div>
      <div>
        <Skillcarousel />
      </div>
    </div>
  );
}

export default LandingPage;
