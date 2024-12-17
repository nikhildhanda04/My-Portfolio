import React from 'react';
import Navbar from "../components/navbar";
import Herosection from '../components/herosection';
import Skillcarousel from '../components/skill-carousel';
import Skill from '../components/skill';
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
      <div>
        <Skill />
      </div>
    </div>
  );
}

export default LandingPage;
