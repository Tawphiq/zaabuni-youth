// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import aboutzaa from "../assets/aboutzaa.jpg"
import scene1 from '../assets/scene1.jpg'
import scene2 from '../assets/scene2.jpg'
import scene3 from '../assets/scene3.jpg'
import scene4 from '../assets/scene4.jpg'
import scene7 from '../assets/scene7.jpg'


const projects = [
  {
    id: 1,
    title: 'Zaabuni 1st annual congress',
    description: 'The 1st  Zaabuni annual Congress, recently convened, gathered  leaders, community chiefs, and stakeholders to strategize on enhancing support initiatives in aspects that included educational scholarships opportunities, community health and wellness, and peace and stability. Discussions focused on fundraising efforts, implementing community projects, and fostering partnerships for sustainable development.',
    image: '/src/assets/zabout.jpg',
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
    <section id="project-detail" className="bg-orange-100">
      <div className="container mx-auto">
        <div className="bg- p-6 rounded shadow-md">
          <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full h-80 object-cover" />
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>

          {project.title === "Zaabuni 1st annual congress" && <div>
            <h1 className='py-6 font-bold text-3xl'>Invitations</h1>
            <div>
            <p>Courtesy calls where made to the distinguished Overload through to his sons (paramount chiefs ) .</p>
            <img src="/src/assets/nayiri.jpg" alt="" className='h-96 w-full mt-4' />
            </div>
            <div className='mt-6'>
                <p>Zaabuni leadership at the residence of H.E. the Vice President and leader of the NPP in the 2024 presidential elections to officially welcome him to Walewale for the Zaabuni Congress 
                </p>
                <img src="/src/assets/zaavice.jpg" alt="" className='mt-4'/>
            </div>
            <div>
                <h1 className='py-6 font-bold text-3xl'>Scenes from Zaabuni Congress on the 7th January 2024</h1>
                <div className='grid grid-cols-2 gap-2'>
                    <img src={aboutzaa} alt="" />
                    <img src={scene1} alt="" />
                    <img src={scene2} alt="" />
                    <img src={scene3} alt="" />
                    <img src={scene4} alt="" />
                    <img src={scene7} alt="" />
                </div>
            </div>
          </div> }

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
