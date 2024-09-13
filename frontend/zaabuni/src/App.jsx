// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
      <div className='font-nunito overflow-x-clip w-full'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;


// import React from 'react'

// const App = () => {
//   return (
//     <div className='font-bold text-3xl flex justify-center items-center h-screen bg-gray-200'>Zaabuni Youth is temporally out of service</div>
//   )
// }

// export default App