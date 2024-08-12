// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Zaabuni Youth for Development</h2>
        <p className="mb-4">
          Contact us: <br />
          Email: info@zaabuni.org <br />
          Phone: 0240345893 <br />
          <a 
                        href="https://www.facebook.com/profile.php?id=100094215103325&mibextid=LQQJ4d" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 ml-4"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                        <span className='ml-2'>Visit our Facebook</span>
                    </a>
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zaabuni Youth for Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
