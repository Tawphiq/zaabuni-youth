import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div name="about" className="bg-[url(./assets/zaabout.webp)] bg-no-repeat bg-cover  bg-center lg:bg-topd h-screen w-full">
      <div className='backdrop-brightness-75 bg-gray-300/50 h-screen w-full'>
      <div className="max-w-7xl mx-auto">
        <div className="mb-2 text-4xl">
          <h4 data-aos="fade-left" className="text-4xl ml-4 font-bold text-[#00df9a]h text-yellow-950 text-center pt-10 font-play">About Us</h4>
        </div>
        <div className="grid lg:grid-cols-2 text-lg">
          {/* <img src={zaabout} alt="" /> */}
          <h1 className="text-4xl ml-4 text-yellow-950b text-white htext-black mb-4">We believe in the power of community and collaboration</h1>
          <p className="mb-4 text-xl text-black mx-4 pb-10">
            Zaabuni Youth for Development is a voluntary youth association of Mamprugu whose membership includes all people living in Mamprugu, as well as all people of Mamprugu descent in other parts of the globe. The association aims to bring all sons and daughters of Mamprugu together and to provide a platform for discussing pertinent issues of common interest that will be beneficial to the people of Mamprugu.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
