// src/components/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
//zaabuni 1st annual congress
import zabout from '../assets/zabout.jpg'
import nayiri from '../assets/nayiri.jpg'
import zaavice from '../assets/zaavice.jpg'
import aboutzaa from "../assets/aboutzaa.jpg"
import scene1 from '../assets/scene1.jpg'
import scene2 from '../assets/scene2.jpg'
import scene3 from '../assets/scene3.jpg'
import scene4 from '../assets/scene4.jpg'
import scene7 from '../assets/scene7.jpg'
import invite1 from '../assets/invite1.jpg'
import invite2 from '../assets/invite2.jpg'
import invite4 from '../assets/invite4.jpg'
import invite5 from '../assets/invite5.jpg'
import invite6 from '../assets/invite6.jpg'
//Donation of an Ultra-Modern Multipurpose Printer Nayiri
import donatezaa from '../assets/donatezaa.jpg'
//Football Gala Matches Organized by Zaabuni
import galamatch from '../assets/galamatch.jpg'


const projects = [
  {
    id: 1,
    title: 'Zaabuni 1st annual congress',
    description: 'The 1st  Zaabuni annual Congress, recently convened, gathered  leaders, community chiefs, and stakeholders to strategize on enhancing support initiatives in aspects that included educational scholarships opportunities, community health and wellness, and peace and stability. Discussions focused on fundraising efforts, implementing community projects, and fostering partnerships for sustainable development.',
    image: zabout,
  },
  {
    id: 2,
    title: 'Donation of an Ultra-Modern Multipurpose Printer Nayiri',
    description: 'As part of our ongoing efforts to support local leadership and administration, Zaabuni Youth for Development is proud to announce the donation of an ultra-modern multipurpose printer to our esteemed overlord, the Nayiri. This state-of-the-art equipment will greatly enhance the administrative capabilities of the Nayiri’s office, facilitating better record-keeping, communication, and overall efficiency.',
    image: donatezaa,
  },
  {
    id: 3,
    title: 'Football Gala Matches Organized by Zaabuni',
    description: 'Zaabuni Youth for Development successfully organized an exhilarating football gala on January 7, 2024. The event brought together teams from across Mamprugu to compete in a friendly yet competitive environment, fostering community spirit and unity. The tournament culminated in a thrilling final match where the West Mamprusi team emerged victorious, claiming the championship title.',
    image: galamatch,
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
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:mx-14'>
          <img src={project.image} alt={project.title} className="rounded-t-lg mb-4 w-full h-80 object-cover lg:order-2" />
          <div className='lg:order-1'>
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
          </div>
          </div>

          {project.title === "Zaabuni 1st annual congress" && <div>
            <h1 className='py-6 font-bold text-3xl lg:ml-14'>Invitations</h1>
            <div className='lg:mx-14'>
            <p className='lg:font-semibold'>Courtesy calls where made to the distinguished Overload through to his sons the paramount chiefs .</p>
            <img src={nayiri} alt="" className='mt-4' />
            </div>
            <div className='mt-6 lg:mx-14'>
                <p className='lg:font-semibold'>Zaabuni leadership at the residence of H.E. the Vice President and leader of the NPP in the 2024 presidential elections to officially welcome him to Walewale for the Zaabuni Congress 
                </p>
                <img src={zaavice} alt="" className='mt-4 lg:h-96'/>
            </div>
            <div className='mt-6 font-bold text-xl lg:mx-14'>
              <h2>Zaabuni Executives Extending In-person Invitations to Chiefs and Dignitaries</h2>
              <div className='grid grid-cols-2 gap-2'>
                <img src={invite1} />
                <img src={invite2} />
                <img src={invite4} />
                <img src={invite5} />
                <img src={invite6} />
                <img src={invite2} />
              </div>
            </div>
            <div className='mx-14'>
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

          {project.title === 'Donation of an Ultra-Modern Multipurpose Printer Nayiri' && <div>
            <p>The multipurpose printer is equipped with advanced features including high-speed printing, scanning, copying, and faxing, designed to meet the diverse needs of the Nayiri’s office.</p>
            <p>This donation will streamline administrative tasks, reduce operational costs, and improve the overall functionality of the office, thereby enhancing governance and service delivery to the people of Mamprugu.</p>
          </div> }

          {project.title === 'Football Gala Matches Organized by Zaabuni' && <div>
            <p>Teams from various areas participated in a series of matches, showcasing their skills and sportsmanship. The tournament provided an opportunity for local talent to shine and for the community to come together in celebration.</p>
            <p>The event not only encouraged physical fitness and teamwork but also strengthened the bonds within the community. It served as a platform for identifying potential football talents who may represent Mamprugu in larger regional and national competitions.</p>
            <p>This initiative highlights our commitment to enhancing social cohesion and providing recreational opportunities for the youth.</p>
            </div>}

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
