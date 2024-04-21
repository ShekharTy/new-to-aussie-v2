import React, { useState } from 'react';
import scenario1 from '../data/scenario1.mp4';
import scenario2 from '../data/scenario2.mp4';
import scenario3 from '../data/scenario3.mp4';
import '../styles/scenario-component.css'; 

function ScenarioComponent() {
  const scenarios = [
    {
      description: 'You are at the beach and notice a swimmer in distress. What do you do?',
      videoUrl: scenario1,
      choices: [
        { id: 1, text: 'Call for help and notify a lifeguard.', feedback: 'Great choice! Lifeguards are trained to handle emergencies.' },
        { id: 2, text: 'Attempt to rescue the swimmer yourself.', feedback: 'Attempting to rescue without proper training can be dangerous. It’s best to call for help.' }
      ]
    },
    {
      description: 'You see Strong Winds Warning Sign. What do you do?',
      videoUrl: scenario2,
      choices: [
        { id: 1, text: 'Understand the symbol and stay away from beach.', feedback: 'Excellent decision! Warnings should be adhered strictly to have a safe and enjoyable experience.' },
        { id: 2, text: 'Ignore the signs and do parasailing', feedback: 'Do not ignore the warnings, It should be followed.' }
      ]
    },
    {
      description: 'You spot a shark in the water nearby. What precautions should you take, and how you respond to the presence of sharks?',
      videoUrl: scenario3,
      choices: [
        { id: 1, text: 'Exit the water as quickly as possible & inform others.', feedback: 'Wise decision! Leaving the water promptly reduces the risk of encountering the shark. Alerting others helps ensure everyone’s safety..' },
        { id: 2, text: ' Stay calm and monitor.', feedback: 'Risky decision! While staying calm is important, remaining in the water near a shark can pose a significant danger. It is best to exit the water and seek safety onshore.' }
      ]
    }
  ];

  const [selectedScenario, setSelectedScenario] = useState(null);

  const handleChoiceSelection = (scenarioIndex, choiceId) => {
    const selectedChoice = scenarios[scenarioIndex].choices.find(choice => choice.id === choiceId);
    setSelectedScenario({ scenarioIndex, selectedChoice });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1>Scenario Based Learning</h1>
      <div className="grid gap-8">
        {scenarios.map((scenario, index) => (
          <div key={index} className="scenario-container">
            <h2>Scenario {index + 1}</h2>
            <p className="scenario-description">{scenario.description}</p>
            {index === 0 ? (
              <video controls width="70%" height="auto">
                <source src={scenario.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <video controls width="70%" height="auto">
                <source src={scenario.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            <div className="choices-container">
              {scenario.choices.map(choice => (
                <button key={choice.id} onClick={() => handleChoiceSelection(index, choice.id)} className="choice-button">
                  {choice.text}
                </button>
              ))}
            </div>

            {selectedScenario && selectedScenario.scenarioIndex === index && (
              <div className="feedback-container">
                <p>{selectedScenario.selectedChoice.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScenarioComponent;