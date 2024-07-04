import Navbar from "./Navbar"


const Hero = () => {
  return (
    <div>
      <div className="text-center  bg-[url(./assets/zaablack.png)] bg-no-repeat bg-cover bg-center lg:bg-top h-96 lg:h-screen w-full">
      <div className='backdrop-brightness-75 bg-black/50 h-full w-full'>
      <Navbar />
       <h1 className="text-4xl font-bold text-[#00df9a]">Welcome to Zaabuni Youth for Development</h1>
        <p className="text-lg text-gray-100 mt-4">Empowering the youth of Mamprugu for a brighter future.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero