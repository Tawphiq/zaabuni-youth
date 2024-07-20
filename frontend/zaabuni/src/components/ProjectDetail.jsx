// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Community Health Initiative',
    description: 'A project focused on improving healthcare access and awareness in the Mamprugu community. Detailed description goes here...',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Educational Support Program',
    description: 'Providing scholarships and educational materials to students in need. Detailed description goes here...',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Agricultural Development',
    description: 'Promoting sustainable agricultural practices and supporting local farmers. Detailed description goes here...',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 4,
    title: 'Youth Empowerment Workshops',
    description: 'Organizing workshops to empower the youth with skills and knowledge for their future. Detailed description goes here...',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project-detail" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="bg-white p-6 rounded shadow-md">
          <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full h-80 object-cover" />
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
