import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaSwimmer, FaRoad, FaInfoCircle, FaArrowUp } from 'react-icons/fa';

function Footer() {
  let navigate = useNavigate();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="text-gray-600 body-font bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="container px-5 py-12 mx-auto flex flex-wrap items-center justify-between">
        <div className="flex md:flex-1 flex-wrap justify-center md:justify-start items-center text-center md:text-left">
          <div className="px-4 py-2 m-2">
            <span className="flex title-font font-medium items-center justify-center md:justify-start text-gray-900">
              <FaHome className="text-white mr-2 text-2xl"/>
              <span className="text-xl text-white">New To Aussie</span>
            </span>
            <p className="mt-2 text-sm text-white">Developed to guide overseas visitors through Australia’s safety rules and social etiquettes in an engaging, gamified way.</p>
          </div>
          <div className="px-4 py-2 m-2">
            <nav className="list-none">
              <li><button onClick={() => navigate('/')} className="text-white hover:text-gray-200 flex items-center"><FaHome className="mr-2"/>Home</button></li>
              <li><button onClick={() => navigate('/road-safety')} className="text-white hover:text-gray-200 flex items-center"><FaRoad className="mr-2"/>Road Safety</button></li>
              <li><button onClick={() => navigate('/beach-safety')} className="text-white hover:text-gray-200 flex items-center"><FaSwimmer className="mr-2"/>Beach Safety</button></li>
              <li><button onClick={() => navigate('/attribution')} className="text-white hover:text-gray-200 flex items-center"><FaInfoCircle className="mr-2"/>Attributions</button></li>
            </nav>
          </div>
        </div>
        <div className="md:flex-1 flex justify-center md:justify-end items-center">
          <button onClick={goToTop} className="text-white flex items-center hover:text-gray-200 transition-colors duration-300 ease-in-out">
            <FaArrowUp className="text-xl mr-2"/>
            Back to Top
          </button>
        </div>
      </div>
      <div className="bg-blue-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row-reverse">
          <span className="text-white flex-1 text-center sm:text-right">Copyright © 2024 Dumb Legends</span>
          <div className="flex-1 sm:text-left text-center">
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
