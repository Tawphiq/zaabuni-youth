import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faUser, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import zaabdonate from '../assets/zaadonor.jpg'

const Donation = () => {
  return (
    <section id="donation" className="bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-950">Make a Donation</h2>
        <div className='grid lg:grid-cols-2 lg:p-16'>
        <img src={zaabdonate} alt="" className='lg:h-80' />
          <p className="mb-4 text-xl text-gray-700">
            Your generous contributions help us to support and promote local development, build human capital, attract investment, and skilled personnel to the area. Thank you for your support!
          </p>
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-yellow-950">Bank Details:</h3>
          <p className="mb-2">
            <FontAwesomeIcon icon={faUniversity} className="text-[#00df9a] mr-2" />
            <strong className='text-yellow-950'>Bank Name:</strong> XYZ Bank
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faUser} className="text-[#00df9a] mr-2" />
            <strong>Account Name:</strong> Zaabuni Youth for Development
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faCreditCard} className="text-[#00df9a] mr-2" />
            <strong>Account Number:</strong> 123456789
          </p>
          {/* <p className="mb-2">
            <FontAwesomeIcon icon={faDollarSign} className="text-blue-600 mr-2" />
            <strong>SWIFT Code:</strong> XYZBANK12
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faCreditCard} className="text-blue-600 mr-2" />
            <strong>IBAN:</strong> XYZ12345678901234567890
          </p> */}
          <p className="mt-4">
            Please reference your donation with your name or email address so we can acknowledge your contribution. For any queries or to inform us about your donation, please contact us at <a href="mailto:info@zaabuniyouth.org" className="text-[#00df9a] hover:underline">
              info@zaabuniyouth.org
            </a>.
          </p>
      </div>
    </section>
  );
}

export default Donation;
