import About from './About'
import Contact from './Contact'
import Donate from './Donate'
import Mission from './Mission';
//import Hero from './Hero';

const Home = () => {
  return (
    <div name="home" className="py-16px-4 font-play">
      {/* <Hero /> */}
      <Mission />
      <About />
      <Donate />
      <Contact />
    </div>
  );
};

export default Home;
