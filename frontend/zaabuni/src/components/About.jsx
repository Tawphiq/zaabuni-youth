import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import zabout from '../assets/zabout.jpg'

const About = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div data-aos="fade-up" name="about" className="bg-teal-100 h-screen w-full p-6 font-nunito">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2 text-4xl">
          <h4 className="text-3xl font-bold mb-4 text-gray-600">About Us</h4>
          <img src={zabout} alt="" className='rounded-2xl' />
        </div>
        <div className="grid lg:grid-cols-2 text-lg">
          {/* <img src={zaabout} alt="" /> */}
          <p className="mb-4 text-xl text-black pb-10">
            Zaabuni Youth for Development is a voluntary youth association of Mamprugu whose membership includes all people living in Mamprugu, as well as all people of Mamprugu descent in other parts of the globe. The association aims to bring all sons and daughters of Mamprugu together and to provide a platform for discussing pertinent issues of common interest that will be beneficial to the people of Mamprugu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
