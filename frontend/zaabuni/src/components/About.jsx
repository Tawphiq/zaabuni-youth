//import zaabout from '../assets/zaabout.webp'

const About = () => {
  return (
    <div name="about" className="bg-[url(./assets/zaabout.webp)] bg-no-repeat bg-cover  bg-center lg:bg-topd h-screen w-full">
      <div className='backdrop-brightness-75 bg-gray-400/50 h-full w-full'>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h4 className="text-2xl ml-4 font-bold text-[#00df9a] font-play">About Us</h4>
        </div>
        <div className="grid lg:grid-cols-2 text-lg">
          {/* <img src={zaabout} alt="" /> */}
          <h1 className="text-5xl ml-4 text-red-950">Mobilizing resources to support and promote local development</h1>
          <p className="mb-4 text-xl text-white mx-4">
            Zaabuni Youth for Development is a voluntary youth association of Mamprugu whose membership includes all people living in Mamprugu, as well as all people of Mamprugu descent in other parts of the globe. The association aims to bring all sons and daughters of Mamprugu together and to provide a platform for discussing pertinent issues of common interest that will be beneficial to the people of Mamprugu.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
