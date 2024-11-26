import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import disb1 from '../assets/disb1.jpg'

const Disbursement = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const disbursements = [
    {
      title: 'Disbursement Of Scholarship Funds To Brilliant But Needy Students',
      description: `
        On Friday, November 15, 2024,  Mamprugu Zaabuni Youth for Development successfully disbursed monies meant for admission fees to a total of four (4) brilliant but need students in Mamprugu.

      `,
      image: disb1, // Add your image URL here
      details: [
        ` They were made up of two(2) medical students, one(1)  engineering student and one (1) ICT student. The occasion took place at the Regional Coordinating council mini conference hall in Nalerigu the regional capital for the northeast region. 

The Zaabuni Scholarship Fund is now fully operational. 

This is a novelty. I thank the committee headed by our venerable Prof. Abubakari Abdulai which is in charge of this fund for a great job done. 

We wish to also thank the Hon. Regional Minister for the North East Region for spending time with us in the face of his very tight schedules.

God bless Mamprugu and may God bless Zaabuni!`
      ],
    },
  ];

  const handleReadMore = (index) => {
    navigate(`/disbursements/${index}`, { state: { disbursements } });
  };


  return (
    <div name="disbursements" className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Disbursement for the Scholarship</h1>
      {disbursements.map((disbursement, index) => (
        <div key={index} className="p-6 bg-gray-100 border rounded-lg shadow hover:shadow-lg transition-shadow mb-6">
          <img src={disbursement.image} alt={`${disbursement.title} cover`} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-semibold mb-4">{disbursement.title}</h2>
          <p className="mb-4">{disbursement.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleReadMore(index)}
              className="bg-orange-200 p-2 rounded-md"
            >
              Read More
            </button>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Disbursement;
