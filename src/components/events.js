import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import default Splide CSS
import EventsBackground from '../data/events_bg.jpg';
import '../styles/events.css';
import EventModal from './modal';

function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeEvent, setActiveEvent] = useState(null);
  useEffect(() => {
    document.title = `New To Aussie - Events`;
  });
  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchFilteredEvents(selectedCategory);
    } else {
      setFilteredEvents(eventsData);
    }
  }, [selectedCategory, eventsData]);

  const handleEventClick = (event, eventData) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveEvent(eventData);
  };

  const closeModal = () => {
    setActiveEvent(null);
  };

  const getHighestResImage = (images) => {
    if (!images || images.length === 0) return '';
    return images.sort((a, b) => (b.width * b.height) - (a.width * a.height))[0].url;
  };

  const fetchEvents = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?dmaId=305&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueEvents = new Set();
      const eventsList = [];

      for (const event of data._embedded.events) {
        if (!uniqueEvents.has(event.name)) {
          uniqueEvents.add(event.name);
          eventsList.push(event);
          if (eventsList.length === 10) break;
        }
      }

      const sortedEvents = sortEventsByDate(eventsList);
      setEventsData(sortedEvents);
      setFilteredEvents(sortedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const fetchFilteredEvents = async (category) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=${encodeURIComponent(category)}&dmaId=305&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const uniqueEvents = new Set();
      const categoryEvents = [];

      for (const event of data._embedded.events) {
        if (!uniqueEvents.has(event.name)) {
          uniqueEvents.add(event.name);
          categoryEvents.push(event);
          if (categoryEvents.length === 10) break;
        }
      }

      const sortedCategoryEvents = sortEventsByDate(categoryEvents);
      setFilteredEvents(sortedCategoryEvents);
    } catch (error) {
      console.error('Error fetching filtered events:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  const sortEventsByDate = (events) => {
    return events.sort((a, b) => new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate));
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
        <h2 className="text-4xl font-bold text-center mb-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Upcoming Events</h2>
        <Splide options={{
          perPage: 2,
          rewind: true,
          width: '100%',
          gap: '1rem',
          padding: { right: '5rem', left: '5rem' },
          autoplay: true,
          pauseOnHover: true,
          autoplaySpeed: 3000,
          type: 'loop'
        }}
          key={eventsData.length}
        >
          {eventsData.map(event => (
            <SplideSlide key={event.id}>
              <div className="event-card" onClick={(e) => handleEventClick(e, event)}>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  <img src={getHighestResImage(event.images)} alt={event.name} style={{ height: '400px', width: '100%', objectFit: 'cover' }} />
                </a>
                <div className="event-info">
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-date">{formatDate(event.dates.start.localDate)}</p>
                  <p className="event-classification">{event.classifications[0]?.segment.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <h2 className="text-4xl font-bold text-center mb-6 mt-6" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>Discover More Events</h2>
        <div className="mt-10">
          <label htmlFor="category" className="font-bold mb-2 block">Filter By Category</label>
          <select id="category" className="border border-gray-300 rounded p-2 w-full" onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Art">Art</option>
            <option value="Sport">Sport</option>
            <option value="Comedy">Comedy</option>
            <option value="Music">Music</option>
            <option value="Theatre">Theatre</option>
          </select>
          {filteredEvents.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {filteredEvents.map(event => (
                <SplideSlide key={event.id}>
                  <div className="event-card" onClick={(e) => handleEventClick(e, event)}>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      <img src={getHighestResImage(event.images)} alt={event.name} className="mb-4 mx-auto" style={{ height: '300px', width: '100%', objectFit: 'cover' }} />
                    </a>
                    <h3 className="text-lg font-bold text-center">{event.name}</h3>
                    <p className="text-center">{formatDate(event.dates.start.localDate)}</p>
                    <p className="text-gray-600 text-center">{event.classifications[0]?.segment.name}</p>
                  </div>
                </SplideSlide>
              ))}
            </div>
          )}
        </div>
      </div>
      {activeEvent && <EventModal event={activeEvent} onClose={closeModal} />}
      <Footer />
    </div>
  );
}

export default Events;
