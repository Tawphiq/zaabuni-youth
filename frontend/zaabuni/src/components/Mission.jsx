// src/components/Mission.js
import React, {useEffect} from 'react';
import aboutzaa from '../assets/aboutzaa.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Mission = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <section data-aos="fade-up" id="mission" className="p-8 bg-gray-50 font-nunito">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <img src={aboutzaa} alt="" className='rounded-2xl mb-4'/>
        <ul className="list-disc list-inside text-lg leading-relaxed bullet-list pl-4">
          <li>Unite all sons and daughters of Mamprugu, both locally and globally.</li>
          <li>Create a platform for discussing and addressing pertinent issues of common interest.</li>
          <li>Mobilize resources to support local development.</li>
          <li>Build human capital in the Mamprugu community.</li>
          <li>Attract investments to Mamprugu.</li>
          <li>Bring skilled personnel to the area.</li>
          <li>Enhance the overall well-being and prosperity of our community.</li>
        </ul>
      </div>
    </section>
  );
}

export default Mission;
