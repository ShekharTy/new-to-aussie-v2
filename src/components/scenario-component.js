import React, { useState } from 'react';
import '../styles/scenario-component.css';
import drownImage from '../data/drowning.png';
import stormImage from '../data/strongwinds.png';
import ripImage from '../data/ripcurrent.png';
import sharkImage from '../data/sharkimage.png';

// Beach Safety V2
function ScenarioComponent() {
  const scenarios = [
    {
      description: 'You are at the beach and notice a swimmer in distress. What do you do?',
      image: drownImage, // Image for scenario 1
      choices: [
        { id: 1, text: 'Call for help and notify a lifeguard.', feedback: 'Great choice! Lifeguards are trained to handle emergencies.' },
        { id: 2, text: 'Attempt to rescue the swimmer yourself.', feedback: 'Attempting to rescue without proper training can be dangerous. It’s best to call for help.' }
      ]
    },
    {
      description: 'You see Strong Winds Warning Sign. What do you do?',
      image: stormImage, // Image for scenario 2
      choices: [
        { id: 1, text: 'Understand the symbol and stay away from beach.', feedback: 'Excellent decision! Warnings should be adhered strictly to have a safe and enjoable experience.' },
        { id: 2, text: 'Ignore the signs and do parasailing', feedback: 'Do not ignore the warnings, It should be followed.' }
      ]
    },
    {
      description: 'At the beach, you notice signs warning about rip currents. What do you decide about doing next?',
      image: ripImage,
      choices: [
        { id: 1, text: 'You choose not to enter the water, advising your friends to stay close to shore..', feedback: 'Excellent choice! Safety comes first. Avoiding areas with rip currents is the best way to stay safe at the beach.' },
        { id: 2, text: ' You decide to swim but promise to watch for signs of rip currents, believing you can handle any situation.', feedback: 'Risky move! Even strong swimmers can get caught in rip currents. Always respect warning signs to prevent dangerous situations.' }
      ]
    },
    {
      description: 'You spot a shark in the water nearby. What precautions should you take, and how you respond to the presence of sharks?',
      image: sharkImage,
      choices: [
        { id: 1, text: 'Exit the water as quickly as possible & inform others.', feedback: 'Wise decision! Leaving the water promptly reduces the risk of encountering the shark. Alerting others helps ensure everyones safety..' },
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
    <div className="scenario-container">
      <h1>Scenario Based Learning</h1>
      {scenarios.map((scenario, index) => (
        <div key={index}>
          <h2>Scenario {index + 1}</h2>
          <p>{scenario.description}</p>
          <img src={scenario.image} alt={`Scenario ${index + 1}`} />
          <div className="choices">
            {scenario.choices.map(choice => (
              <button key={choice.id} onClick={() => handleChoiceSelection(index, choice.id)}>
                {choice.text}
              </button>
            ))}
          </div>
          {selectedScenario && selectedScenario.scenarioIndex === index && (
            <div className="feedback">
              <p>{selectedScenario.selectedChoice.feedback}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ScenarioComponent;
