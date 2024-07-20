// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Zaabuni Youth for Development</h2>
        <p className="mb-4">
          Contact us: <br />
          Email: info@zaabuni.org <br />
          Phone: 0240345893
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zaabuni Youth for Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
