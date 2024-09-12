import React from 'react';
import { useLocation } from 'react-router-dom';

const ScholarshipDetail = () => {
  const { state } = useLocation();

  if (!state || !state.scholarships) {
    return <div>Scholarship not found</div>;
  }

  const { scholarships } = state;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Scholarship Details</h1>
      {scholarships.map((scholarship, index) => (
        <div key={index} className="mb-8">
          <img src={scholarship.image} alt={`${scholarship.title} cover`} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-semibold mb-4">{scholarship.title}</h2>
          <p className="mb-4">{scholarship.description}</p>
          <h3 className="text-xl font-semibold mb-2">How to Apply:</h3>
          <ul className="list-disc list-inside mb-4">
            {scholarship.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Eligibility:</h3>
          <ul className="list-disc list-inside mb-4">
            {scholarship.eligibility.map((criteria, idx) => (
              <li key={idx}>{criteria}</li>
            ))}
          </ul>
          <div className="mb-4">
            <strong>Contact:</strong> {scholarship.contact.phone} |{' '}
            <a href={`mailto:${scholarship.contact.email}`} className="text-blue-500 hover:underline">
              {scholarship.contact.email}
            </a>
          </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default ScholarshipDetail;
