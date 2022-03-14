import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getProjects } from './redux/projects/projects';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div>
      <Navbar />
      <LandingPage />

    </div>
  );
}

export default App;
