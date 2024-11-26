import React from 'react';
import { useLocation } from 'react-router-dom';
import disb1 from '../assets/disb1.jpg'
import disb2 from '../assets/disb2.jpg'
import disb3 from '../assets/disb3.jpg'
import disb4 from '../assets/disb4.jpg'
import disb5 from '../assets/disb5.jpg'
import disb6 from '../assets/disb6.jpg'

const DisbursementDetails = () => {
  const { state } = useLocation();

  if (!state || !state.disbursements) {
    return <div>Disbursement not found</div>;
  }

  const { disbursements } = state;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Disbursement Details</h1>
      {disbursements.map((disbursement, index) => (
        <div key={index} className="mb-8">
          <img src={disbursement.image} alt={`${disbursement.title} cover`} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-semibold mb-4">{disbursement.title}</h2>
          <p className="mb-4">{disbursement.description}</p>
          <h3 className="text-xl font-semibold mb-2">How to Apply:</h3>
          <ul className="list-disc list-inside mb-4">
            {disbursement.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <div className='mt-6 font-bold text-xl lg:mx-14'>
              <h2>Zaabuni Executives With The Benificiaries Of The Scholarships</h2>
              <div className='grid grid-cols-2 gap-2'>
                <img src={disb1} />
                <img src={disb2} />
                <img src={disb3} />
                <img src={disb4} />
                <img src={disb5} />
                <img src={disb6} />
              </div>
            </div>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default DisbursementDetails;
