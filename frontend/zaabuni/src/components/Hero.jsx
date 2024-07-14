import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';


const Hero = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div>
      <div className="text-left mb-10 ml-4 lg:ml-10">
       <h1 data-aos="fade-left" className="text-2xl font-bold text-orange-300 mt-10 lg:mt-40">Zaabuni Youth for Development</h1>
        <p className="text-6xl mt-2">
          Empowering the youth of Mamprugu for a brighter future.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-10 mr-4 lg:w-96 text-xl">
          <Link to="about" smooth={true} duration={500} className="font-bold text-gray-600 text-center bg-teal-200 hover:bg-orange-200 hover:text-gray-600 p-2 shadow rounded-xl">About US</Link>
          <Link to="donate" smooth={true} duration={500} className="font-bold text-gray-600 bg-orange-200 text-center p-2 hover:text-gray-600 hover:bg-teal-200 shadow rounded-md">Support Us</Link>
        </div>
        </div>
    </div>
  )
}

export default Hero