import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import homepage from '../data/logo.png';

function Header() {
  let navigate = useNavigate();
  let location = useLocation();


  const isActive = (path) => location.pathname === path;

  const defaultStyle = { backgroundColor: 'rgba(0, 123, 255, 0.5)' };
  const buttonStyle = { fontFamily: '"Bebas Neue", sans-serif' }; 

  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-4 shadow-lg w-full' style={defaultStyle}>
      <img 
        src={homepage} 
        alt='Logo' 
        className='object-contain h-16 w-17 mb-4 md:mb-0 cursor-pointer' 
        onClick={() => navigate('/home')}
      />
      <div className='flex flex-col md:flex-row justify-center items-center'>
        {['/home', '/events', '/road-safety', '/beach-safety', '/attribution'].map(path => (
          <button 
            key={path}
            className={`text-white px-3 py-2 rounded-md text-xl font-medium m-2 transition-colors duration-200 ${isActive(path) ? 'bg-blue-700' : 'bg-transparent hover:bg-blue-700'}`}
            style={buttonStyle}
            onClick={() => navigate(path)}>
            {path.substring(1)} 
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
