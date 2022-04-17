import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getProjects } from './redux/projects/projects';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
