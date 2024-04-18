import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/road-safety.css';
import TrafficSigns from './traffic-sign';
import Quiz from './quiz';
import EmergencyProcedure from './emergency-procedure';

function RoadSafety() {
    const [selectedModule, setSelectedModule] = useState('');
    const [currentMythIndex, setCurrentMythIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [myths, setMyths] = useState([
        { id: 1, text: "It's fine to use your phone while you're driving if it's in a cradle", description: "Please avoid using mobile devices while driving. Driving requires your full attention", isMyth: true, revealed: false },
        { id: 2, text: "When approaching a roundabout always give way to your right", description: "Not just on your right. Drivers must slow or stop to give way to any vehicles already in the roundabout.", isMyth: true, revealed: false },
        { id: 3, text: "If you're speeding, keep it below 10 per cent over the limit to avoid fines", description: "Not True. Avoid overspeeding even if the road is clear.", isMyth: true, revealed: false },
        { id: 4, text: "Driving in bare feet is illegal", description: "It is not illegal. But prefer driving with close toed shoes for better control of the car.", isMyth: true, revealed: false },
        { id: 5, text: "Flashing your lights to warn others of speed cameras or police ahead is legal", description: "Technically Illegal. Section 218 of the Australian Road Rules states that you cannot use your high beams on any vehicle within 200 metres of your car.", isMyth: true, revealed: false },
        { id: 6, text: "You can drink alcohol in the car as long as you’re below the legal limit", description: "Definitely Not. Please do not drive if you are drinking. Avoid open alcohol containers inside the vehicle", isMyth: true, revealed: false },
    ]);

    useEffect(() => {
        document.title = `Road Safety`;
        const calculatedProgress = ((currentMythIndex + 1) / myths.length) * 100;
        setProgress(calculatedProgress);
    }, [currentMythIndex, myths.length]);

    const handleModuleClick = (module) => setSelectedModule(module);

    const toggleMythStatus = (id) => {
        setMyths(myths.map(myth => myth.id === id ? { ...myth, revealed: !myth.revealed } : myth));
    };

    const nextMyth = () => setCurrentMythIndex(prevIndex => (prevIndex + 1) % myths.length);

    const prevMyth = () => setCurrentMythIndex(prevIndex => (prevIndex - 1 + myths.length) % myths.length);
    return (
        <div>
            <Header />
            
            <div className={`road-safety-container`}>
                <aside className={`road-safety-sidebar`}>
                    <h1>Road Safety and Regulations</h1>
                    <ul>
                        <li className={selectedModule === 'Traffic signs' ? 'active' : ''} onClick={() => handleModuleClick('Traffic signs')}>Traffic signs</li>
                        <li className={selectedModule === 'Emergency Procedures' ? 'active' : ''} onClick={() => handleModuleClick('Emergency Procedures')}>Emergency Procedures</li>
                        <li className={selectedModule === 'Myth Buster' ? 'active' : ''} onClick={() => handleModuleClick('Myth Buster')}>Myth Buster</li>
                    </ul>
                    <h1>Check your learning</h1>
                    <ul>
                        <li className={selectedModule === 'Quiz' ? 'active' : ''} onClick={() => handleModuleClick('Quiz')}>Quiz</li>
                    </ul>
                </aside>
                <div className="content">
                    {selectedModule === '' && (
                        <div>
                            <h1>Welcome to Driving in Victoria</h1>
                            <p>Welcome to the Road Safety Module. Here, you will find essential information tailored for drivers in Victoria, including traffic rules, signs, and guidelines for safe driving practices. Whether you're a new driver or looking to refresh your knowledge, this module offers valuable insights to navigate Victoria's roads safely.</p>
                            <p>Understanding local road rules, recognizing traffic signs, and debunking common myths are crucial for both your safety and that of other road users. Explore the various sections to enhance your driving knowledge and ensure a safer driving experience in Victoria.</p>
                        </div>
                    )}
                    {selectedModule === 'Traffic signs' && (
                        <TrafficSigns />
                    )}
                    {selectedModule === 'Emergency Procedures' && <EmergencyProcedure />}
                    {selectedModule === 'Myth Buster' && (
                        <div>
                            <h1>Myth Buster</h1>
                            <p className="traffic-instructions">Click on the circle to bust myths. Use the buttons below to navigate between myths.</p>
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                            </div>
                            <p className="myth-counter">{currentMythIndex + 1}/{myths.length}</p>
                            <div className="myths-slider">
                                <div
                                    className={`myth ${myths[currentMythIndex].revealed ? (myths[currentMythIndex].isMyth ? 'busted' : 'confirmed') : ''}`}
                                    onClick={() => toggleMythStatus(myths[currentMythIndex].id)}>
                                    {myths[currentMythIndex].revealed ? (myths[currentMythIndex].isMyth ? "Busted!" : "Confirmed") : myths[currentMythIndex].text}
                                </div>
                                {myths[currentMythIndex].revealed && (
                                    <div className="myth-description">
                                        {myths[currentMythIndex].description}
                                    </div>
                                )}
                            </div>
                            <div className="navigation-buttons">
                                <button onClick={prevMyth}>Previous Myth</button>
                                <button onClick={nextMyth}>Next Myth</button>
                            </div>
                        </div>
                    )}
                    {selectedModule === 'Quiz' && (
                        <Quiz />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RoadSafety;
