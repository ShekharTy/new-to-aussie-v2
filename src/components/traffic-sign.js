import React, { useState } from 'react';
import '../styles/traffic-sign.css';
import speed1Image from '../data/speed_limit_area.png';
import speed2Image from '../data/local_traffic_area.png';
import speed3Image from '../data/shared_zone.png';
import park1Image from '../data/parking_permitted_h.png';
import park2Image from '../data/parking_permitted_m.png';
import uniq1Image from '../data/w_kangaroo.png';
import uniq2Image from '../data/w_koalas.png';
import uniq3Image from '../data/hook_turn.png';
import tram1Image from '../data/tram_only.png';
import tram2Image from '../data/rail_crossing.png';
import tram3Image from '../data/rail_signal.png';

function TrafficSigns() {
    const [categories] = useState([
        {
            category: "Speed Signs",
            signs: [
                { id: 1, image: speed1Image, description: 'Area speed-limit sign', info: 'The speed limit applying to the driver in that area' },
                { id: 2, image: speed2Image, description: 'Local Traffic area sign', info: 'Primarily for local traffic access. Drive cautiously and expect local traffic conditions.' },
                { id: 3, image: speed3Image, description: 'Shared zone sign', info: 'In a shared zone, the speed limit is the number (in km/h) shown on the shared zone sign.' },
            ]
        },
        {
            category: "Parking Signs",
            signs: [
                { id: 4, image: park1Image, description: 'Park Permit sign', info: 'The length you can park reprsented with a number besides P and the timings. Only park to the left of P' },
                { id: 5, image: park2Image, description: 'Park Permit sign', info: 'The length you can park reprsented with a number besides P and the timings.' },
            ]
        },
        {
            category: "Tram and Railway Signs",
            signs: [
                { id: 5, image: tram1Image, description: 'Tram Only Lane', info: 'The length you can park reprsented with a number besides P and the timings. Only park to the left of P' },
                { id: 6, image: tram2Image, description: 'Rail Crossing Sign', info: 'The length you can park reprsented with a number besides P and the timings.' },
                { id: 7, image: tram3Image, description: 'Rail Signal', info: 'The length you can park reprsented with a number besides P and the timings.' },

            ]
        },
        {
            category: "Out of the ordinary",
            signs: [
                { id: 8, image: uniq1Image, description: 'Watch out for Kangaroos', info: 'Kangaroos likely to cross roads, especially at dawn and dusk.' },
                { id: 9, image: uniq2Image, description: 'Watch out for Koalas', info: 'Koalas likely to cross roads, especially at dawn and dusk.' },
                { id: 10, image: uniq3Image, description: 'Hook Turn', info: 'Drivers must turn right from the left lane, allowing trams and cars to pass on the right.' },
            ]
        }
        

    ]);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    // Initialize flipped state for each sign in the current category
    const [flippedStates, setFlippedStates] = useState(categories.map(category => 
        Array(category.signs.length).fill(false)
    ));

    const nextCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    };

    const prevCategory = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
    };

    const toggleFlip = (index) => {
        const newFlippedStates = [...flippedStates];
        newFlippedStates[currentCategoryIndex][index] = !newFlippedStates[currentCategoryIndex][index];
        setFlippedStates(newFlippedStates);
    };

    return (
        <div>
            <h1>{categories[currentCategoryIndex].category}</h1>
            <p className="traffic-instructions">Click on a sign to learn more. Use the buttons below to navigate between categories.</p>
            <div className="signs-slider">
                {categories[currentCategoryIndex].signs.map((sign, index) => (
                    <div key={index} className="card" onClick={() => toggleFlip(index)}>
                        {flippedStates[currentCategoryIndex][index] ? (
                            <div className="card-content">{sign.description}<br />{sign.info}</div>
                        ) : (
                            <img src={sign.image} alt="Traffic Sign" className="card-image" />
                        )}
                    </div>
                ))}
                <div className="navigation-buttons">
                    <button onClick={prevCategory}>Previous Category</button>
                    <button onClick={nextCategory}>Next Category</button>
                </div>
            </div>
        </div>
    );
}

export default TrafficSigns;
