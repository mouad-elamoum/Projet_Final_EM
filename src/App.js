import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PlantPage from './pages/PlantPage';
import PlantDetailsPage from './pages/PlantDetailsPage';
import '../src/styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/plants" element={<PlantPage />} />
          <Route path="/plants/:id" element={<PlantDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
