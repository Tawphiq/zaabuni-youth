// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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
    title: 'Donation of an Ultra-Modern Multipurpose Printer Nayiri',
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
  return (
    <section id="projects" className="p-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="bg-white rounded-2xl shadow-md p-6">
              <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
