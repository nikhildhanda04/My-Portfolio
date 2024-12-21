import React from 'react';
import Navbar from "../components/NavBar/navbar";
import Herosection from '../components/herosection';
import Skillcarousel from '../components/SkillCarousel/skill-carousel';
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
