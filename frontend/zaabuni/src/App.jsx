import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';

function App() {

  return (
    <div className='font-ubuntu bg-[url(./assets/zaab2.jpg)] bg-no-repeat bg-cover overflow-x-clip bg-center lg:bg-top h-screen w-full'>
      <div className='backdrop-brightness-75 bg-black/50 h-full w-full'>
      <Navbar />
      <Hero />
      </div>
      <Home />
    </div>
  )
}

export default App
