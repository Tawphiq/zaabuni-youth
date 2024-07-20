import About from './About'
import Contact from './Contact'
import Donate from './Donate'
import Mission from './Mission';
import Projects from './Projects';
import Hero from './Hero';

const Home = () => {
  return (
    <div name="home" className="py-16px-4">
      <Hero />
      <Mission />
      <About />
      <Projects />
      <Donate />
      <Contact />
    </div>
  );
};

export default Home;
