// src/components/Projects.jsx
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zabout from '../assets/zabout.jpg'
import donatezaa from '../assets/donatezaa.jpg'
import zaagala from '../assets/zaagala.jpg'


const projects = [
  {
    id: 1,
    title: 'Zaabuni 1st annual congress',
    description: 'The 1st Zaabuni Annual Congress recently convened leaders, community chiefs, and stakeholders to strategize on enhancing support initiatives in areas including educational scholarships opportunities, community health and wellness, and peace and stability.',
    image: zabout,
  },
  {
    id: 2,
    title: 'Donation of an Ultra-Modern Multipurpose Printer to the Nayiri Palace',
    description: 'As part of our ongoing efforts to support local leadership and administration, Zaabuni Youth for Development is proud to announce the donation of an ultra-modern multipurpose printer to our esteemed overlord, the Nayiri.',
    image: donatezaa,
  },
  {
    id: 3,
    title: 'Football Gala Matches Organized by Zaabuni',
    description: 'Zaabuni Youth for Development successfully organized an exhilarating football gala on January 7, 2024.',
    image: zaagala,
  },
];

const Projects = () => {
    useEffect(() => {AOS.init({duration: 2000})}, [])
  return (
    <section data-aos="fade-up" id="projects" className="p-6 bg-gray-100">
      <div className="container mx-auto lg:ml-20">
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <div data-aos="fade-up" key={project.id} className="bg-white rounded-2xl shadow-md p-6">
              <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link to={`/projects/${project.id}`} className='bg-teal-200 p-2 rounded-lg shadow'>See More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
