import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [selectedModule, setSelectedModule] = useState('');

  // Structured data for module categories and their items
  const moduleCategories = [
    {
      categoryName: 'Beach Learning Modules',
      modules: [
        { name: 'Beach Safety & Regulation Signs', path: '/swimsafety' },
        { name: 'Beach Warning Signs', path: '/warning' },
      ],
    },
    {
      categoryName: 'Check Your Learning',
      modules: [
        { name: 'Quiz', path: '/beach-quiz' },
        { name: 'Scenario Based Learning Module', path: '/scenario-component' },
      ],
    },
  ];

  return (
    <div className="sidebar">
      {moduleCategories.map((category, index) => (
        <React.Fragment key={index}>
          <h2>{category.categoryName}</h2>
          <ul>
            {category.modules.map((module, index) => (
              <li
                key={index}
                className={selectedModule === module.name ? 'active' : ''}
                onClick={() => setSelectedModule(module.name)}
              >
                <Link to={module.path}>{module.name}</Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
