import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import homepage from '../data/logo.png'; 

function Header() {
  let navigate = useNavigate();
  let location = useLocation();

  // Helper function to determine if the path matches the current location
  const isActive = (path) => location.pathname === path;

  // Define a default style for non-home pages
  const defaultStyle = { backgroundColor: 'rgba(0, 123, 255, 0.5)' };

  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-4 shadow-lg w-full' style={defaultStyle}>
      <img 
        src={homepage} 
        alt='Logo' 
        className='object-contain h-16 w-17 mb-4 md:mb-0 cursor-pointer' 
        onClick={() => navigate('/home')}
      />
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <button 
          className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive('/home') ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`} 
          onClick={() => navigate('/home')}>
          Home
        </button>
        <button 
          className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive('/road-safety') ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`} 
          onClick={() => navigate('/road-safety')}>
          Road Safety
        </button>
        <button 
          className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive('/beach-safety') ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`} 
          onClick={() => navigate('/beach-safety')}>
          Beach Safety
        </button>
        <button 
          className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive('/beach-safety') ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`} 
          onClick={() => navigate('/restaurant')}>
          Find Restaurants
        </button>
        <button 
          className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive('/attribution') ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`} 
          onClick={() => navigate('/attribution')}>
          Attributions
        </button>
      </div>
    </div>
  );
}

export default Header;
