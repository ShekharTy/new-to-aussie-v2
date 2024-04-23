import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Slider from "react-slick";
import EventsBackground from '../data/events_bg.jpg';
import '../styles/events.css';

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample events data
const eventsData = [
  { id: 1, title: 'Art Exhibition', category: 'Art', description: 'Explore the latest in contemporary art.', date: '2024-04-30', image: 'https://example.com/art.jpg' },
  { id: 2, title: 'Tech Conference', category: 'Technology', description: 'Dive into the latest tech trends.', date: '2024-05-20', image: 'https://example.com/tech.jpg' },
  { id: 3, title: 'Live Concert', category: 'Music', description: 'Experience thrilling live performances.', date: '2024-05-15', image: 'https://example.com/music.jpg' },
];

function EventbriteEvents() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="relative">
        <img src={EventsBackground} alt="Events Background" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 text-white text-5xl font-bold py-2 px-4 rounded">
            EVENTS
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6">Current Events</h2>
        <Slider {...settings}>
          {eventsData.map(event => (
            <div key={event.id} className="p-4">
              <img src={event.image} alt={event.title} className="rounded-lg mb-4" />
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p>{event.description}</p>
              <span>{event.date}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="font-bold mb-2 block">Categories</label>
              <select multiple size="4" id="category" className="border border-gray-300 rounded p-2 w-full">
                <option value="Art">Art</option>
                <option value="Technology">Technology</option>
                <option value="Music">Music</option>
                <option value="Film">Film</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="font-bold mb-2 block">Event Date</label>
              <input type="date" id="date" className="border border-gray-300 rounded p-2 w-full" onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventbriteEvents;
