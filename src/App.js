import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getProjects } from './redux/projects/projects';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer from './components/Drawer';

import './App.css';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <div>
        <Router>
<Drawer />

    </Router>
    </div>
  );
}

export default App;
