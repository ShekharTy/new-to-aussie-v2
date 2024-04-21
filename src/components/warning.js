import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/warning.css';


// Array of image data
const imageData = [
    {
        imageSrc: require('../data/warning.png'),
        altText: 'Strong winds',
        title: 'Strong winds',
        facts: 'Warning of strong winds, potential hazards or regulations, .'
    },
    {
        imageSrc: require('../data/big_waves.png'),
        altText: 'Swim between the flags',
        title: 'Swim between the flags',
        facts: 'This symbol indicates it is a swimming area and you should swim between the red and yellow flags only.'
    },
    {
        imageSrc: require('../data/stingers.png'),
        altText: 'Marine Stingers',
        title: 'Marine Stingers',
        facts: 'Alert about the presence of dangerous marine stingers, such as jellyfish or Portuguese man o wars, in the water.',
    },
    {
        imageSrc: require('../data/warn_swim.png'),
        altText: 'Swimming not advised',
        title: 'Swimming not advised',
        facts: 'Swimming in the area is not recommended or advised due to various potential hazards.'
    },
    {
        imageSrc: require('../data/shallow.png'),
        altText: 'Shallow water & sandbars',
        title: 'Shallow water & sandbars',
        facts: 'Alert for the areas where the water depth is shallow. Not suitable for diving..Warning for the presence of sandbars, which are shallow underwater ridges or banks composed of sand, in the water..'
    },
    {
        imageSrc: require('../data/deep_water.png'),
        altText: 'Deep water',
        title: 'Deep water',
        facts: 'Warning of the dangers from deep water.',
    },
    {
        imageSrc: require('../data/rip.png'),
        altText: 'RIP currents',
        title: 'RIP currents',
        facts: 'Warning of the potential danger posed by rip currents, which can pull swimmers away from the shore and into deeper water.',
    },
    {
        imageSrc: require('../data/gutters.png'),
        altText: 'Sudden drop off',
        title: 'Sudden drop off',
        facts: 'The areas with sudden drop-offs or strong currents require extra vigilance from swimmers.Warning of the dangers from deep water.',
    },
    {
        imageSrc: require('../data/sharks.png'),
        altText: 'Shark Warning',
        title: 'Shark Warning',
        facts: 'Alert to the potential presence of sharks in the water.',
    },
];

function Warning() {
    const sliderRef = useRef(null); // Reference to the Slider component

    // State to track the number of flags
    const [flagCounter, setFlagCounter] = useState(0);

    // Function to update the flag counter when changing slides
    const handleSlideChange = (currentSlide) => {
        setFlagCounter(currentSlide + 1); // Slide index starts from 0, so add 1
    };

    // Function to handle clicking on the previous button
    const prevSlide = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    // Function to handle clicking on the next button
    const nextSlide = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    return (
        <div id="warning">
            <h2>Welcome to the section dedicated to beach warning signs learning!</h2> 
            <p className="InstructionsWarningFlags">Click on  below previous and next buttons to learn about each warning signs meaning.</p>
            <p>Diamond-shaped signs in yellow and black serve as warnings about potential hazards at the beach.</p>
            
            <h3>Importance of Beach Warning Signs</h3>
            <p>
            Beach warning signboards are crucial because they provide vital information about potential hazards and safety guidelines to beachgoers. They serve as visual aids to educate and alert individuals about dangers such as strong currents, dangerous marine life, 
            prohibited activities, and other risks specific to the beach environment. 
            By understanding and adhering to the information conveyed through these signboards, beach visitors can make informed decisions to stay safe, prevent accidents, and ensure an enjoyable beach experience for themselves and others..
            </p> 
            <div className="flag-box">
            <Slider
                ref={sliderRef}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                afterChange={handleSlideChange}
            >
                {imageData.map((item, index) => (
                    <GalleryItem
                        key={index}
                        imageSrc={item.imageSrc}
                        altText={item.altText}
                        title={item.title}
                        facts={item.facts}
                    />
                ))}
            </Slider>
            {/* Flag Counter */}
            <div className="flag-counter"> Warning Sign {flagCounter} / {imageData.length}</div>
            {/* Navigation buttons */}
            <div className="navigation-buttons">
                <button onClick={prevSlide} style={{ backgroundColor: 'blue' }}>Previous Flag</button>
                <button onClick={nextSlide} style={{ backgroundColor: 'blue' }}>Next Flag</button>
            </div>
        </div>
        </div>
         
    );
}

function GalleryItem({ imageSrc, altText, title, facts }) {
    return (
        <div className="gallery-item">
            <img className="gallery-item__image" src={imageSrc} alt={altText} />
            <div className="gallery-item__text">
                <div className="gallery-item__title">{title}</div>
                <div className="gallery-item__facts">{facts}</div>
            </div>
        </div>
    );
}

export default Warning;