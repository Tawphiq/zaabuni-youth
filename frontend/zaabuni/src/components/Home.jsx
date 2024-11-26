import About from './About'
import Contact from './Contact'
import Donate from './Donate'
import Mission from './Mission';
import Projects from './Projects';
import Hero from './Hero';
import Executives from './Executives';
import Scholarships from './Scholarships'
import ApplicationForm from './ApplicationForm';
import Disbursement from './Disbursement';

const Home = () => {
  return (
    <div name="home" className="py-16px-4">
      <Hero />
      <Mission />
      <About />
      <Projects />
      <Scholarships />
      <Disbursement />
      {/* <ApplicationForm /> */}
      <Donate />
      <Executives />
      <Contact />
    </div>
  );
};

export default Home;
