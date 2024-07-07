import {useEffect} from 'react'
import {ReactTyped} from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <div>
      <div className="text-left ml-4 lg:ml-10">
       <h1 data-aos="fade-left" className="text-2xl font-bold text-[#00df9a] mt-20 lg:mt-40">Zaabuni Youth for Development</h1>
        <p className="text-6xl text-gray-100 mt-2">
          <ReactTyped 
          strings={["Empowering the youth of Mamprugu for a brighter future."]}
          typeSpeed={100} />
        </p>
        <div className="grid lg:grid-cols-2 gap-2 mt-4 mr-4 lg:w-96 text-xl">
          <button className="text-white bg-[#00df9a] hover:bg-transparent border-2 hover:text-[#00df9a] hover:border-2 p-2 shadow-md rounded-md">About US</button>
          <button className="text-[#00df9a] border-2 p-2 hover:text-white hover:bg-[#00df9a] shadow-md rounded-md">Support Us</button>
        </div>
        </div>
    </div>
  )
}

export default Hero