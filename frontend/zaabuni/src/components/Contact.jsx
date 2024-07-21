import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div data-aos="fade-up" name="contact" className="font-nunito bg-gray-400 h-screen w-full">
      <div className="max-w-4xl mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 pt-10">Contact Us</h1>
          <p className="text-xl text-white mt-4">
            If you have any questions or would like to get involved, please fill out the form below to get in touch with us.
          </p>
        </div>
        <div className="mt-10">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-xl focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-xl focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-md placeholder:text-2xl rounded-md focus:outline-none focus:border-[#00df9a] sm:text-sm"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder:text-2xl focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-[#00df9a] hover:bg-[#00b781] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00df9a]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
