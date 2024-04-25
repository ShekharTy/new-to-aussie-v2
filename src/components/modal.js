import React from 'react';
import '../styles/modal.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  const convertCurrencyToAUD = (usd) => {
    return (usd * 1.40).toFixed(2);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-AU', options);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-2xl w-11/12 mx-4 overflow-auto" style={{height:"800px"}}>
        <button onClick={onClose} className="absolute top-0 right-0 text-3xl p-4 bg-gray-200 rounded-full">&times;</button>
        <h2 className="text-xl font-bold mb-2">{event.name}</h2>
        <img src={event.images[0].url} alt={event.name} className="w-full h-auto mb-2 rounded" style={{height:"400px"}}/>
        <p><strong>Date:</strong> {formatDate(event.dates.start.localDate)}</p>
        <p><strong>Venue:</strong> {event._embedded.venues[0].name}</p>
        <p><strong>Description:</strong> {event.info}</p>
        <p><strong>Tickets:</strong> {event.priceRanges ? `${convertCurrencyToAUD(event.priceRanges[0].min)} - ${convertCurrencyToAUD(event.priceRanges[0].max)} AUD` : 'Not available'}</p>
        <a href={event.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Get Tickets</a>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Driving to the event?</h3>
          <p className="mb-4">Make sure you're prepped with our road safety tips!</p>
          <a href="/new-to-aussie-v2/#/road-safety" className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Road Safety Tips</a>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
