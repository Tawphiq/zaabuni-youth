// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Scholarships from './components/Scholarships';
import ScholarshipDetail from './components/ScholarshipDetail';

function App() {
  return (
      <div className='font-nunito overflow-x-clip w-full'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path='/scholarships' element={<Scholarships />} />
          <Route path='/scholarships/:id' element={<ScholarshipDetail />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
