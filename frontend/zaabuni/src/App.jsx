import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {

  return (
    <div className='bg-[url(./assets/zaab2.jpg)] bg-no-repeat bg-cover bg-center h-96 lg:h-screen w-full font-ubuntu'>
      <div className='backdrop-brightness-75 bg-black/50'>
      <Navbar />
      <Home />
      </div>
      <About />
      <Contact />
    </div>
  )
}

export default App
