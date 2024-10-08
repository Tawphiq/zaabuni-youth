// src/components/Executives.jsx
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const executives = [
    {
      id: 1,
      name: 'Musah Abdul-Basit',
      position: 'President',
      phone: '0240345893',
    },
    {
      id: 2,
      name: 'Dr.Ibrahim Inamah Abu',
      position: 'Chairman, Elders',
      phone: '0572419641',
    },
    {
      id: 3,
      name: 'Simon Suayam',
      position: 'Secretary',
    },
    {
      id: 4,
      name: 'Mohammed Fugu',
      position: 'PRO',
    },
    {
        id: 5,
        name: 'Salifu Abdul Fataw',
        position: 'Organizer',
      },
      {
        id: 6,
        name: 'Gloria Lamisi Danaba',
        position: 'Womens Organizer',
      },
  ];
  

const Executives = () => {
    useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <section data-aos="fade-up" name="executives" className="p-4 pb-10 bg-gray-100">
      <div className="container mx-auto lg:mx-16">
        <h2 className="text-3xl px-4 font-bold mb-4">Our Executives</h2>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {executives.map((executive) => (
            <div key={executive.id} className="bg-teal-100 rounded-lg shadow-md p-2 lg:p-6">
              <h3 className="text-xl font-semibold mb-2">{executive.name}</h3>
              <p className="text-gray-700 font-semibold text-lg mb-2">{executive.position}</p>
              <p className="text-gray-700 mb-4">{executive.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;
