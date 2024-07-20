import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUser, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import donatezaa from '../assets/donatezaa.jpg'

const Donation = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <section name="donate" className="bg-orange-100 px-4 font-nunito">
      <div className="containerg mx-4">
        <h2 data-aos="fade-left" className="text-3xl font-bold pt-10 text-gray-600">Make a Donation</h2>
        <div className='grid lg:grid-cols-2 lg:p-16'>
        <img src={donatezaa} alt="" className='rounded-2xl' />
          </div>
          <div className='py-5'>
            <h1 className='text-xl text-gray-700 font-extrabold uppercase'>Mobile Money Details</h1>
            <p className='text-gray-600  text-2xl font-bold'>Merchant ID</p>
            <p className='text-xl mb-4'>000851</p>
            <p className='text-gray-600  text-2xl font-bold'>Momo Account</p>
            <p className='text-xl mb-4'>0597409105</p>
            <p className='text-gray-600  text-2xl font-bold'>Account Name</p>
            <p className='text-xl'>Zaabuni Youth for Development</p>
            <h1 className='text-xl text-gray-700 font-extrabold uppercase mt-8'>Bank Details</h1>
            <p className='text-gray-600  text-2xl font-bold'>Bank</p>
            <p className='text-xl mb-4'>GCB</p>
            <p className='text-gray-600  text-2xl font-bold'>Branch</p>
            <p className='text-xl mb-4'>Walewale Branch</p>
            <p className='text-gray-600  text-2xl font-bold'>Account Number</p>
            <p className='text-xl mb-4'>9061010007408</p>
          </div>
          <p className="text-xl text-gray-700 pb-10">
            Your generous contributions help us to empower the youth of Mamprugu
          </p>
      </div>
    </section>
  );
}

export default Donation;
