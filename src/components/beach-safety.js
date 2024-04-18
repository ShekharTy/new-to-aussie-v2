import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/beach-safety.css';
// Import the module components you need
import BeachSafetySigns from './swimsafety';
import BeachWarningSigns from './warning';
import BeachQuiz from './beach-quiz';
import ScenarioBasedLearning from './scenario-component';

function BeachSafety() {
  const [selectedModule, setSelectedModule] = useState('');

  useEffect(() => {
    document.title = `Beach Safety`;
  }, []);

  const moduleContent = () => {
    switch (selectedModule) {
      case 'Beach Safety & Regulation Signs':
        return <BeachSafetySigns />;
      case 'Beach Warning Signs':
        return <BeachWarningSigns />;
      case 'Quiz':
        return <BeachQuiz />;
      case 'Scenario Based Learning Module':
        return <ScenarioBasedLearning />;
      default:
        // This will be the default content shown
        return (<div className="main-content">
        <h1>Beach Safety Module</h1>
        <p>
            Welcome to the Beach Safety Module, your comprehensive guide to staying safe and informed while enjoying the coastal beauty.
        </p>
        <p>
            In this module, you'll dive deep into the essential aspects of beach safety, covering everything from flag signs to scenario-based learning. Our goal is to empower you with the knowledge and skills needed to navigate the beach environment confidently.
        </p>
        <p>
            Throughout this module, you'll explore:
        </p>
        <ol>
            <li>Beach Flag Signs: Learn to understand the meaning behind various flag colours.</li>
            <li>Warning Signs: Familiarise yourself with common warning signs found at beaches.</li>
            <li>Scenario-Based Learning: Engage in interactive scenarios that simulate real-life beach situations, allowing you to make informed decisions.</li>
            <li>Knowledge Check: Test your understanding of beach safety concepts with quizzes designed to reinforce key information and ensure you're well-prepared to tackle any beach-related challenges.</li>
        </ol>
        <p>
            By the end of this module, you'll emerge as a savvy beachgoer equipped with the skills and awareness needed to enjoy the coastal wonders responsibly. So grab your sunscreen, pack your beach gear, and let's embark on a journey to discover the beauty of the beach while prioritising safety every step of the way.
        </p>
    </div>);
    }
  };

  // Function to dynamically set the class if the module is active
  const getListItemClass = (moduleName) => {
    return `sidebar-ul-li ${selectedModule === moduleName ? 'active' : ''}`;
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="sidebar">
          <h2>Beach Learning Modules</h2>
          <ul>
            <li className={getListItemClass('Beach Safety & Regulation Signs')} onClick={() => setSelectedModule('Beach Safety & Regulation Signs')}>
              Beach Safety & Regulation Signs
            </li>
            <li className={getListItemClass('Beach Warning Signs')} onClick={() => setSelectedModule('Beach Warning Signs')}>
              Beach Warning Signs
            </li>
          </ul>
          <h2>Check Your Learning</h2>
          <ul>
            <li className={getListItemClass('Quiz')} onClick={() => setSelectedModule('Quiz')}>
              Quiz
            </li>
            <li className={getListItemClass('Scenario Based Learning Module')} onClick={() => setSelectedModule('Scenario Based Learning Module')}>
              Scenario Based Learning Module
            </li>
          </ul>
        </div>
        <div className="main-content">
          {moduleContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BeachSafety;
