import React, { useState } from 'react';
import '../styles/emergency-procedure.css';
import VehicleBreakdown from '../data/vb_bg2.jpg';
import Flood from '../data/flood.jpg'
import Fire from '../data/Fire.jpg';
import Crash from '../data/Crash.jpg';

const emergencyProcedures = [
    {
        title: 'Vehicle Breakdown',
        imgSrc: VehicleBreakdown,
        content: [
            "Pull Over Safely",
            "Turn On Your Hazard Lights",
            "Stay With Your Vehicle",
            "Call 13 11 70 for roadside assistance"
        ]
    },
    {
        title: 'Accident Involvement',
        imgSrc: Crash,
        content: [
            "Move to a safe location if possible, then stop",
            "Turn on your hazard lights",
            "Check for injuries",
            "Exchange information with other drivers"
        ]
    },
    {
        title: 'Fire',
        imgSrc: Fire,
        content: [
            "Pull over and shut off the engine as soon as it’s safe",
            "Get everyone out of the vehicle without delay",
            "Move to a safe distance",
            "Call emergency services"
        ]
    },
    {
        title: 'Flooding',
        imgSrc: Flood,
        content: [
            "Never drive through flooded areas",
            "Seek higher ground",
            "Stay in your vehicle if surrounded by water",
            "Call for help if needed"
        ]
    }
];


function EmergencyProcedure() {
    const [selectedProcedure, setSelectedProcedure] = useState(null);

    return (
        <div>
            <h1>Emergency Procedure</h1>
            <p className="traffic-instructions">Click on a sign to learn more about information for different emergencies.</p>
            <div className="emergency-container">
                <div className="cards-container-ep">
                    {emergencyProcedures.map((procedure, index) => (
                        <div key={index} className="card-ep" onClick={() => setSelectedProcedure(procedure)}>
                            <img src={procedure.imgSrc} alt={procedure.title} />
                            <h3>{procedure.title}</h3>
                        </div>
                    ))}
                </div>
                {selectedProcedure && (
                    <div className="procedure-detail">
                        <h2>{selectedProcedure.title}</h2>
                        <ul>
                            {selectedProcedure.content.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}


export default EmergencyProcedure;
