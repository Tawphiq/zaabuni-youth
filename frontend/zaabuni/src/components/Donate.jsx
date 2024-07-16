import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUser, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import donatezaa from '../assets/donatezaa.jpg'

const Donation = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <section name="donate" className="bg-gray-100 font-nunito">
      <div className="containerg mx-4">
        <h2 data-aos="fade-left" className="text-4xl font-bold pt-10 text-gray-600">Make a Donation</h2>
        <div className='grid lg:grid-cols-2 lg:p-16'>
        <img src={donatezaa} alt="" className='rounded-2xl' />
          </div>
          <div className='py-5'>
            <p className='text-gray-600  text-2xl font-bold'>Bank Name</p>
            <p className='text-xl mb-4'>XYZ Bank</p>
            <p className='text-gray-600  text-2xl font-bold'>Account Name</p>
            <p className='text-xl mb-4'>Zaabuni Youth for Development</p>
            <p className='text-gray-600  text-2xl font-bold'>Account Number</p>
            <p className='text-xl'>123456789</p>
          </div>
          <p className="text-xl text-gray-700 pb-10">
            Your generous contributions help us to empower the youth of Mamprugu
          </p>
      </div>
    </section>
  );
}

export default Donation;
