import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import Slider from "react-slick";
import EventsBackground from '../data/events_bg.jpg';
import '../styles/events.css';

// Importing slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const fetchEvents = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?dmaId=305&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueEvents = new Set();
      const filteredEvents = [];

      for (const event of data._embedded.events) {
        if (!uniqueEvents.has(event.name)) {
          uniqueEvents.add(event.name);
          filteredEvents.push(event);
          if (filteredEvents.length === 5) break;
        }
      }

      setEventsData(filteredEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
        <h2 className="text-2xl font-bold text-center mb-6">Upcoming Events</h2>
        <Slider {...settings}>
          {eventsData.map(event => (
            <div key={event.id} className="p-4 text-center">
              <a href={event.url} target="_blank" rel="noopener noreferrer">
                <img src={event.images[0].url} alt={event.name} className="rounded-lg mb-4 mx-auto" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
              </a>
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p>{event.dates.start.localDate}</p>
              <p className="text-gray-600">{event.classifications[0]?.segment.name}</p>
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
                <option value="Technology">Sport</option>
                <option value="Music">Comedy</option>
                <option value="Film">Music</option>
                <option value="Film">Theatre</option>
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

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

export default Events;
