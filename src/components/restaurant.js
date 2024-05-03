import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Header from "./header";
import Footer from "./footer";
import CuisineData from "../data/cuisineFinal.csv"; // Importing the CSV file
import "animate.css/animate.css";
import bannerImage from "../data/restaurant_banner.jpg";
import SpinWheel from "./spin-wheel";
import foodBackground from "../data/restaurant_banner.jpg"; // Common food background image
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function RestaurantSearch() {
 const [selectedModule, setSelectedModule] = useState("");
 const [selectedCuisine, setSelectedCuisine] = useState("");
 const [selectedSuburb, setSelectedSuburb] = useState("");
 const [restaurants, setRestaurants] = useState([]);
 const [filteredRestaurants, setFilteredRestaurants] = useState([]);
 const [allCuisines, setAllCuisines] = useState([]);
 const [filteredCuisines, setFilteredCuisines] = useState([]);
 const [allSuburbs, setAllSuburbs] = useState([]);
 const [filteredSuburbs, setFilteredSuburbs] = useState([]);


 useEffect(() => {
   document.title = `Restaurant Search`;
   // Parse CSV data and set restaurants on component mount
   parseCSV(CuisineData);
 }, []);


 const parseCSV = (file) => {
   Papa.parse(file, {
     download: true,
     header: true,
     complete: (result) => {
       console.log("Parsed data:", result.data);
       const allRestaurants = result.data
         .map((row) => ({
           cuisine: row["Cuisine"] && row["Cuisine"].trim(), // Trim whitespace and handle undefined/null
           name: row["Trading name"],
           suburb: row["Suburb"],
           googleLink: row["Google Search Link"],
         }))
         .filter((restaurant) => restaurant.cuisine);


       // Extract unique cuisines
       const uniqueCuisines = [
         ...new Set(allRestaurants.map((restaurant) => restaurant.cuisine)),
       ];
       setAllCuisines(uniqueCuisines);
       setFilteredCuisines(uniqueCuisines);
       setRestaurants(allRestaurants);


       // Extract unique suburb names
       const suburbs = result.data
         .map((row) => row["Suburb"])
         .filter((suburb) => suburb);
       const uniqueSuburbs = [...new Set(suburbs)];
       setAllSuburbs(uniqueSuburbs);
       setFilteredSuburbs(uniqueSuburbs);
     },
   });
 };


 const handleCuisineChange = (event) => {
   const value = (event.target.value || "").trim().toLowerCase(); // Trim whitespaces from input value
   setSelectedCuisine(value);


   if (allCuisines && allCuisines.length > 0) {
     if (value.length > 0) {
       const filtered = allCuisines.filter((cuisine) =>
         cuisine.trim().toLowerCase().startsWith(value)
       );
       setFilteredCuisines(filtered);
     } else {
       setSelectedCuisine(""); // If value is empty, clear the selected cuisine
       setFilteredCuisines([]); // Clear the filtered cuisines
     }
   }
 };


 const handleSuburbChange = (event) => {
   const value = event.target.value; // Get the value from the event
   if (value) {
     const trimmedValue = value.trim().toLowerCase(); // Trim whitespaces and convert to lowercase
     setSelectedSuburb(trimmedValue);


     const filtered = allSuburbs.filter((suburb) =>
       suburb.trim().toLowerCase().startsWith(trimmedValue)
     );
     setFilteredSuburbs(filtered);
   } else {
     setSelectedSuburb(""); // If value is empty, clear the selected suburb
     setFilteredSuburbs([]); // Clear the filtered suburbs
   }
 };


 const handleCuisineSelect = (cuisine) => {
   setSelectedCuisine(cuisine);
   filterRestaurants(cuisine, selectedSuburb);
   setFilteredCuisines([]);
 };


 const handleSuburbSelect = (suburb) => {
   setSelectedSuburb(suburb);
   filterRestaurants(selectedCuisine, suburb);
   setFilteredSuburbs([]);
 };


 const filterRestaurants = (selectedCuisine, selectedSuburb) => {
   const filtered = restaurants.filter((restaurant) => {
     if (restaurant && restaurant.cuisine && restaurant.suburb) {
       return (
         restaurant.cuisine.toLowerCase() === selectedCuisine.toLowerCase() &&
         restaurant.suburb.toLowerCase() === selectedSuburb.toLowerCase()
       );
     }
     return false;
   });
   setFilteredRestaurants(filtered);
 };


 return (
   <div>
     <Header />
     {/* Banner */}
     <div className="relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-white">
       <img
         src={bannerImage}
         alt="Banner"
         className="absolute inset-0 h-full w-full object-cover opacity-100"
       />
       <div className="absolute top-1/3 transform -translate-y-1/2 text-center">
         <h1 className="text-5xl font-bold text-stone-50">Restaurants</h1>
         <p className="text-xxl text-stone-50 text-decoration-thickness: 2px;">
           Discover amazing dining experiences
         </p>
       </div>
     </div>

     {/* Options */}
     <div className="body flex flex-col items-center mt-8 ml-64">
           <div className="bg-gray-200 p-4 w-3/4 rounded-lg shadow-lg">
             <ul className="mt-4 grid grid-cols-2 gap-4">
               <li
                 className={`cursor-pointer bg-white rounded-md shadow-lg p-4 transition duration-300 transform hover:shadow-xl hover:scale-105 ${
                   selectedModule === "Search Restaurant"
                     ? "border-2 border-blue-600"
                     : ""
                 }`}
                 onClick={() => setSelectedModule("Search Restaurant")}
               >
                 <h3 className="text-xl font-semibold">
                   Search Restaurant by Cuisine
                 </h3>
                 <p className="text-gray-600">
                   Find restaurants based on your preferred cuisine.
                 </p>
               </li>
               <li
                 className={`cursor-pointer bg-white rounded-md shadow-lg p-4 transition duration-300 transform hover:shadow-xl hover:scale-105 ${
                   selectedModule === "Play Spin Wheel"
                     ? "border-2 border-blue-600"
                     : ""
                 }`}
                 onClick={() => setSelectedModule("Play Spin Wheel")}
               >
                 <h3 className="text-xl font-semibold">Play Spin Wheel</h3>
                 <p className="text-gray-600">
                   Content for Play Spin Wheel goes here.
                 </p>
               </li>
             </ul>
           </div>
         </div>


     {selectedModule !== "Play Spin Wheel" && (
       <>
         {/* Search Bar */}
         <div className="search-bar flex flex-col mt-8 items-center">
           <div className="mb-4">
             <label
               htmlFor="cuisine"
               className="mr-4 text-lg text-blue-600 font-bold"
             >
               Type your preferred cuisine here:
             </label>
             <input
               type="text"
               id="cuisine"
               className="border-2 border-gray-500 bg-blue-600 h-10 px-5 pr-10 rounded-lg text-lg text-stone-50 focus:outline-none w-96"
               value={selectedCuisine}
               onChange={handleCuisineChange}
             />
             {selectedCuisine && /[a-zA-Z]/.test(selectedCuisine) && (
               <div className="mt-2 w-full bg-white rounded-md shadow-lg">
                 <ul className="divide-y divide-gray-200">
                   {filteredCuisines.map((cuisine, index) => (
                     <li
                       key={index}
                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                       onClick={() => handleCuisineSelect(cuisine)}
                     >
                       {cuisine}
                     </li>
                   ))}
                 </ul>
               </div>
             )}
           </div>
           <div>
             <label
               htmlFor="suburb"
               className="mr-4 text-lg  text-blue-600 font-bold"
             >
               Type your preferred suburb here:
             </label>
             <input
               type="text"
               id="suburb"
               className="border-2 border-gray-300 bg-blue-600 h-10 px-5 pr-10 rounded-lg text-lg text-stone-50 focus:outline-none w-96"
               value={selectedSuburb}
               onChange={handleSuburbChange}
             />
             {/* Render the suburb dropdown only when there are letters inputted */}
             {selectedSuburb && /[a-zA-Z]/.test(selectedSuburb) && (
               <div className="mt-2 w-full bg-white rounded-md shadow-lg">
                 <ul className="divide-y divide-gray-200">
                   {filteredSuburbs.map((suburb, index) => (
                     <li
                       key={index}
                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                       onClick={() => handleSuburbSelect(suburb)}
                     >
                       {suburb}
                     </li>
                   ))}
                 </ul>
               </div>
             )}
           </div>
         </div>
         <div style={{ backgroundImage: `url(${foodBackground})`, backgroundSize: "cover" }}>
          <div className="container mx-auto relative">
            <Slider
            dots={false}
            infinite
            speed={500}
            slidesToShow={5}
            slidesToScroll={5}
            prevArrow={<div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">&lt;</div>}
            nextArrow={<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer">&gt;</div>}
          >
  {filteredRestaurants.map((restaurant, index) => (
  <a key={index} href={restaurant.googleLink} target="_blank" rel="noopener noreferrer">
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg transition duration-300 transform hover:shadow-xl hover:scale-105">
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-gray-600">Suburb: {restaurant.suburb}</p>
        <p className="text-gray-600">Cuisine: {restaurant.cuisine}</p>
        <p className={`text-blue-600 ${index === 0 ? 'underline' : ''}`}>Google Link</p>
      </div>
    </div>
  </a>
))}
            </Slider>
            </div>
          </div>

        {/* No restaurants found messages */}
         
         {filteredRestaurants.length === 0 &&
           selectedCuisine &&
           selectedSuburb && (
             <div className="filtered-restaurants mt-6">
               <h2 className="text-xl font-bold mb-2">
                 No restaurants found with the selected cuisine!
               </h2>
             </div>
           )}
       </>
     )}
     


     {/* Play Spin Whee`l */}
     {selectedModule === "Play Spin Wheel" && <div className="spin-wheel-container">
         <SpinWheel />
       </div>}
     <Footer />
   </div>
 );
}


export default RestaurantSearch;



