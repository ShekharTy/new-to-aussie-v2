// restaurant.js

import React from 'react';

const RestaurantSearch = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l4.25 4.25L19 18.25 15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RestaurantSearch;
