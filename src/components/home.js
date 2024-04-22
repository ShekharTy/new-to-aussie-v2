import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import bgimg from '../data/bg2.jpg';
import drivingImg from '../data/road.jpg';
import beachImg from '../data/beach.jpg';

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
            {/* Background for header and first section */}
            <div className="relative w-full" style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '700px' }}>
                <Header />
                <div className="text-white p-4 text-center">
                    <div className="bg-white bg-opacity-50 p-4 rounded " style={{ maxWidth: '600px', margin: 'auto', transform: 'translateY(50%)' }}>
                        <h1 className="text-4xl font-bold text-black">Welcome to New To Aussie</h1>
                        <h4 className="text-xl mt-4 text-black">Your Essential Guide to Navigating Victoria Safely</h4>
                        <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleNavigate('/road-safety')}>Start Exploring</button>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 p-8">
                <div className="relative min-h-[400px] rounded-lg shadow-lg cursor-pointer flex items-center justify-center hover:-translate-y-2" style={{ backgroundImage: `url(${drivingImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => handleNavigate('/road-safety')}>
                    <div className="bg-white bg-opacity-50 p-4 rounded">
                        <div className="text-lg font-semibold text-center">Driving Somewhere?</div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                </div>
                <div className="relative min-h-[400px] rounded-lg shadow-lg cursor-pointer flex items-center justify-center hover:-translate-y-2" style={{ backgroundImage: `url(${beachImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={() => handleNavigate('/beach-safety')}>
                    <div className="bg-white bg-opacity-50 p-4 rounded">
                        <div className="text-lg font-semibold text-center">Heading out to the beach?</div>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="px-8 py-4 bg-white shadow-md rounded-lg">
    <h2 className="text-3xl font-bold text-center text-blue-800">Exploring Victoria Safely</h2>
    <p className="mt-4 text-lg text-gray-600">
        Discover the unmatched beauty of autumn in Victoria, a perfect backdrop for visitors. As you explore, safety is crucial, whether you're hitting the road or the coastlines.
    </p>
    <div className="mt-6 grid md:grid-cols-2 gap-6">
        <section className="p-4 bg-blue-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-800">Road Safety for Overseas Visitors</h3>
            <p className="mt-2">
                Traverse Victoria's diverse landscapes safely. Keep left, watch for wildlife, and adhere to local driving laws to enjoy scenic routes securely. This module will provide you with all the necessary information required for road rules.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                Learn More About Road Safety
            </button>
        </section>
        <section className="p-4 bg-cyan-100 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-800">Beach Safety for Overseas Visitors</h3>
            <p className="mt-2">
                Enjoy Victoria's beaches safely. Always swim at patrolled locations, understand rip currents, and heed lifeguard advice for a secure beach experience.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
                Learn More About Beach Safety
            </button>
        </section>
    </div>
</div>

            <Footer />
        </div>
    );
}

export default Homepage;
