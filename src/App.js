import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/home';
import RoadSafety from './components/road-safety';
import BeachSafety from './components/beach-safety';
import SwimSafety from './components/swimsafety';
import Warning from './components/warning';
import Quiz from './components/beach-quiz';
import ScenarioComponent from './components/scenario-component';
import Attributions from './components/attribution';
import NotFoundPage from './components/not-found';
import Password from './components/password';
import RestaurantSearch from './components/restaurant';
import Events from './components/events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/road-safety" element={<RoadSafety />} />
        <Route path="/beach-safety" element={<BeachSafety />} />
        <Route path="/swimsafety" element={<SwimSafety />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/beach-quiz" element={<Quiz />} />
        <Route path="/restaurant" element={<RestaurantSearch />} />
        <Route path="/scenario-component" element={<ScenarioComponent />} />
        <Route path="/attribution" element={<Attributions />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;