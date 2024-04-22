import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/restaurant.css';

function RestaurantSearch() {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [filteredCuisines, setFilteredCuisines] = useState([]);
  const cuisines = ['American', 'Australian', 'Italian', 'Indian', 'Japanese']; // Example list of cuisines

  useEffect(() => {
    document.title = `Restaurant Search`;
  }, []);

  const moduleContent = () => {
    switch (selectedModule) {
      case 'Search Restaurant by Cuisine':
        return (
          <div className="main-content">
            <h1>Search Restaurant by Cuisine</h1>
            <div className="relative">
              <input
                type="text"
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Find restaurants by cuisine!"
                value={selectedCuisine}
                onChange={handleCuisineChange}
              />
              {filteredCuisines.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                  <ul>
                    {filteredCuisines.map((cuisine, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelectCuisine(cuisine)}>{cuisine}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
      case 'Play Spin Wheel':
        return (
          <div className="main-content">
            <h1>Play Spin Wheel Game</h1>
          </div>
        );
      default:
        return (
          <div className="main-content">
            <h1>Search Restaurant By Cuisine</h1>
            <p>
              Your ultimate guide to finding the perfect dining experience. Whether you're craving American, Australian, Italian, Indian, or Japanese cuisine, we've got you covered. Use the sidebar to explore different modules and enhance your restaurant search skills.
            </p>
          </div>
        );
    }
  };

  const handleCuisineChange = (event) => {
    const value = event.target.value;
    setSelectedCuisine(value);
    filterCuisines(value);
  };

  const filterCuisines = (value) => {
    const filtered = cuisines.filter(cuisine =>
      cuisine.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCuisines(filtered);
  };
  

  const handleSelectCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    setFilteredCuisines([]);
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="sidebar">
          <h2>Restaurant Search Modules</h2>
          <ul>
            <li className={selectedModule === 'Search Restaurant by Cuisine' ? 'active' : ''} onClick={() => setSelectedModule('Search Restaurant by Cuisine')}>
              Search Restaurant by Cuisine
            </li>
            <li className={selectedModule === 'Play Spin Wheel' ? 'active' : ''} onClick={() => setSelectedModule('Play Spin Wheel')}>
              Play Spin Wheel
            </li>
          </ul>
        </div>
        <div className="main-content">
          {moduleContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantSearch;
