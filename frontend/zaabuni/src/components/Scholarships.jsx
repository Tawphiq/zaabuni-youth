// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ApplicationForm from './ApplicationForm';

// const Scholarships = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const scholarships = [
//     {
//       title: 'Zaabuni Education Fund – 2024/2025 Scholarship',
//       description: `
//         The Zaabuni Education Fund Students Financial Aid Office, with funds from the Vice President, His Excellency Alhaji Dr. Mahamudu Bawumia, has opened the Zaabuni Scholarship for the 2024/2025 academic year. This scholarship seeks to provide financial support to needy and brilliant regular undergraduate students of Mamprugu descent.
//       `,
//       details: [
//         'You are required to visit the Zaabuni website: http://www.zaabuni.org.',
//         'Read the eligibility requirements and complete the APPLICATION FORM with the required documents.',
//         'Submit the completed form and supporting documents via email to info@zaabuni.org and copy anabafelix@yahoo.com and abdulaia1@gmail.com.',
//         'Hardcopies can be submitted to Mr. Abdulwahab Salifu at Walewale Municipal Assembly or Dr. Musah Issahaku Yamba (Gomna Bumbio) for those in East Mamprusi.',
//         'Supporting documents include completion of the application form, a copy of your Admission letter, academic records (WASSCE grades), letters of recommendation, and any other documents that will assist in the processing of your application.',
//         'Deadline for submission: Friday, 29th November 2024 at 3:00pm.',
//       ],
//       eligibility: [
//         'You are a native of Mamprugu or must have been born in Mamprugu.',
//         'You have been admitted into any Ghanaian Public Tertiary Institution to pursue any of the following courses/Programmes: Medicine, Pharmacy, Engineering, Law, or ICT.',
//         'You are able to demonstrate limited family income and/or insufficient funds to cover most or all educational-related expenses.',
//         'You have the desire to succeed (determination, perseverance, and success in other pursuits).',
//       ],
//       contact: {
//         phone: '0246780385',
//         email: 'info@zaabuni.org',
//       },
//       pdfLink: '/scholarships/zaabuni-education-fund-2024.pdf',
//     },
//   ];

//   const handleReadMore = (index) => {
//     navigate.push(`/scholarships/${index}`);
//   };

//   const handleApplyNow = () => {
//     setShowModal(true);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Scholarships</h1>
//       {scholarships.map((scholarship, index) => (
//         <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow mb-6">
//           <h2 className="text-2xl font-semibold mb-4">{scholarship.title}</h2>
//           <p className="mb-4">{scholarship.description}</p>
//           <div className="flex space-x-4">
//             <button
//               onClick={() => handleReadMore(index)}
//               className="text-blue-500 hover:underline"
//             >
//               Read More
//             </button>
//             <button
//               onClick={handleApplyNow}
//               className="text-blue-500 hover:underline"
//             >
//               Apply Now
//             </button>
//           </div>
//         </div>
//       ))}

//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>
//             <ApplicationForm />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Scholarships;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';

const Scholarships = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const scholarships = [
    {
      title: 'Zaabuni Education Fund – 2024/2025 Scholarship',
      description: `
        The Zaabuni Education Fund Students Financial Aid Office, with funds from the Vice President, His Excellency Alhaji Dr. Mahamudu Bawumia, has opened the Zaabuni Scholarship for the 2024/2025 academic year. This scholarship seeks to provide financial support to needy and brilliant regular undergraduate students of Mamprugu descent.
      `,
      image: 'https://example.com/scholarship-image.jpg', // Add your image URL here
      details: [
        'You are required to visit the Zaabuni website: http://www.zaabuni.org.',
        'Read the eligibility requirements and complete the APPLICATION FORM with the required documents.',
        'Submit the completed form and supporting documents via email to info@zaabuni.org and copy anabafelix@yahoo.com and abdulaia1@gmail.com.',
        'Hardcopies can be submitted to Mr. Abdulwahab Salifu at Walewale Municipal Assembly or Dr. Musah Issahaku Yamba (Gomna Bumbio) for those in East Mamprusi.',
        'Supporting documents include completion of the application form, a copy of your Admission letter, academic records (WASSCE grades), letters of recommendation, and any other documents that will assist in the processing of your application.',
        'Deadline for submission: Friday, 29th November 2024 at 3:00pm.',
      ],
      eligibility: [
        'You are a native of Mamprugu or must have been born in Mamprugu.',
        'You have been admitted into any Ghanaian Public Tertiary Institution to pursue any of the following courses/Programmes: Medicine, Pharmacy, Engineering, Law, or ICT.',
        'You are able to demonstrate limited family income and/or insufficient funds to cover most or all educational-related expenses.',
        'You have the desire to succeed (determination, perseverance, and success in other pursuits).',
      ],
      contact: {
        phone: '0246780385',
        email: 'info@zaabuni.org',
      },
      pdfLink: '/scholarships/zaabuni-education-fund-2024.pdf',
    },
  ];

  const handleReadMore = (index) => {
    navigate.push(`/scholarships/${index}`);
  };

  const handleApplyNow = () => {
    setShowModal(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Scholarships</h1>
      {scholarships.map((scholarship, index) => (
        <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow mb-6">
          <img src={scholarship.image} alt={`${scholarship.title} cover`} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-semibold mb-4">{scholarship.title}</h2>
          <p className="mb-4">{scholarship.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleReadMore(index)}
              className="text-blue-500 hover:underline"
            >
              Read More
            </button>
            <button
              onClick={handleApplyNow}
              className="text-blue-500 hover:underline"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl h-full overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <ApplicationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Scholarships;
