// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Community Health Initiative',
    description: 'A project focused on improving healthcare access and awareness in the Mamprugu community.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Educational Support Program',
    description: 'Providing scholarships and educational materials to students in need.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Agricultural Development',
    description: 'Promoting sustainable agricultural practices and supporting local farmers.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 4,
    title: 'Youth Empowerment Workshops',
    description: 'Organizing workshops to empower the youth with skills and knowledge for their future.',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Our Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="bg-white rounded-lg shadow-md p-6">
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
