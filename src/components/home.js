import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import bgimg from '../data/bg2.jpg';
import roadImg from '../data/road.jpg';
import beachImg from '../data/beach.jpg';
import eventImg from '../data/events.jpg';
import foodImg from '../data/food.jpg';

function Homepage() {
    let navigate = useNavigate();

    useEffect(() => {
        document.title = `New To Aussie - Home`;
    });

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '700px' }}>
                <Header />
                <div className="text-white p-4 text-center">
                    <div className="bg-black bg-opacity-70 p-4 rounded " style={{ maxWidth: '600px', margin: 'auto', transform: 'translateY(50%)' }}>
                        <h1 className="text-5xl font-bold text-white">
                            <span style={{ color: '#0085FF' }}>Explore </span> <span style={{ color: '#FCD34D' }}>Life</span> <span style={{ color: '#F97316' }}>In Australia</span>
                        </h1>
                        <h4 className="text-xl mt-4 text-white">Become a part of the Aussie Culture</h4>
                        <button className="mt-6 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded" onClick={() => handleNavigate('/road-safety')}>Start Exploring</button>
                    </div>
                </div>
            </div>
            <div className="text-center py-5 border-y-8 border-black">
                <h1 className="text-3xl font-bold text-black">Discover</h1>
                <p className="text-xl text-black">Choose your next adventure</p>
            </div>

            <div className="w-full" style={{ padding: '0 20px' }}>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 max-w-full w-full" style={{ margin: '0 auto' }}>
                    <div className="relative min-h-[350px] min-w-[600px] col-span-1 lg:col-span-2 rounded-lg shadow-lg cursor-pointer bg-cover bg-center" style={{ backgroundImage: `url(${eventImg})` }} onClick={() => handleNavigate('/events')}>
                        <div className="bg-black bg-opacity-30 p-4 rounded flex items-center justify-center h-full hover:bg-opacity-90 transition duration-300 ease-in-out">
                            <div className="text-4xl font-semibold text-center text-white">Events</div>
                        </div>
                    </div>
                    <div className="relative min-h-[350px] min-w-[300px] rounded-lg shadow-lg cursor-pointer bg-cover bg-center" style={{ backgroundImage: `url(${roadImg})` }} onClick={() => handleNavigate('/road-safety')}>
                        <div className="bg-black bg-opacity-30 p-4 rounded flex items-center justify-center h-full hover:bg-opacity-90 transition duration-300 ease-in-out">
                            <div className="text-4xl font-semibold text-center text-white">Road Safety</div>
                        </div>
                    </div>

                    <div className="relative min-h-[350px] min-w-[300px] rounded-lg shadow-lg cursor-pointer bg-cover bg-center" style={{ backgroundImage: `url(${beachImg})` }} onClick={() => handleNavigate('/beach-safety')}>
                        <div className="bg-black bg-opacity-30 p-4 rounded flex items-center justify-center h-full hover:bg-opacity-90 transition duration-300 ease-in-out">
                            <div className="text-4xl font-semibold text-center text-white">Beach Safety</div>
                        </div>
                    </div>
                    <div className="relative min-h-[350px] min-w-[500px] col-span-1 lg:col-span-2 rounded-lg shadow-lg cursor-pointer bg-cover bg-center" style={{ backgroundImage: `url(${foodImg})` }} onClick={() => handleNavigate('/food-and-restaurants')}>
                        <div className="bg-black bg-opacity-30 p-4 rounded flex items-center justify-center h-full hover:bg-opacity-90 transition duration-300 ease-in-out">
                            <div className="text-4xl font-semibold text-center text-white">Food and Restaurants</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
