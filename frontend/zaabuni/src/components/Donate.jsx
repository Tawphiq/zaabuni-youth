import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUser, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import zaabdonate from '../assets/zaadonor.jpg'

const Donation = () => {
  return (
    <section id="donation" className="bg-gray-100">
      <div className="containerg mx-4">
        <h2 className="text-3xl font-bold pt-5 text-centerg text-yellow-950">Make a Donation</h2>
        <div className='grid lg:grid-cols-2 lg:p-16'>
        <img src={zaabdonate} alt="" className='lg:h-80' />
          <p className="mb-4 text-xl text-gray-700">
            Your generous contributions help us to support and promote local development, build human capital, attract investment, and skilled personnel to the area. Thank you for your support!
          </p>
          </div>
          {/* <h3 className="text-3xl text-center font-semibold mb-2 text-yellow-950">Bank Details</h3> */}
          <p className="mb-8 grid ml-24">
            <FontAwesomeIcon icon={faUniversity} className="text-[#00df9a] ml-8 mb-3 flex h-10" />
            <p className='text-yellow-950 text-2xl font-bold'>Bank Name</p>
            <p className='text-2xl'>XYZ Bank</p>
          </p>
          <p className="mb-8 grid ml-24">
            <FontAwesomeIcon icon={faUser} className="text-[#00df9a] ml-8 mb-3 flex h-10" />
            <p className='text-yellow-950 text-2xl font-bold'>Account Name</p>
            <p className='text-2xl'>Zaabuni Youth for Development</p>
          </p>
          <p className="mb-8 grid ml-24">
            <FontAwesomeIcon icon={faCreditCard} className="text-[#00df9a] ml-8 mb-3 flex h-10" />
            <p className='text-yellow-950 text-2xl font-bold'>Account Number</p>
            <p className='text-2xl'>123456789</p>
          </p>
          {/* <p className="mb-2">
            <FontAwesomeIcon icon={faDollarSign} className="text-blue-600 mr-2" />
            <strong>SWIFT Code:</strong> XYZBANK12
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faCreditCard} className="text-blue-600 mr-2" />
            <strong>IBAN:</strong> XYZ12345678901234567890
          </p> */}
          <p className="mt-4 text-xl">
            Please reference your donation with your name or email address so we can acknowledge your contribution. For any queries or to inform us about your donation, please contact us at <a href="mailto:info@zaabuniyouth.org" className="text-yellow-950 hover:underline">
              info@zaabuniyouth.org
            </a>.
          </p>
      </div>
    </section>
  );
}

export default Donation;
