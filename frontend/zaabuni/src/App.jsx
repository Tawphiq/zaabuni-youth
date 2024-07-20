// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
      <div className='font-nunito overflow-x-clip w-full'>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Hero /><Home /></>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
  );
}

export default App;
