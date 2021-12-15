import { React, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { getRockets } from './redux/Rockets/rockets';
import { BrowserRouter as Router } from 'react-router-dom';
import Drawer from './components/Drawer';

import './App.css';

function App() {

  const dispatchRocket = useDispatch();
  useEffect(() => {
    dispatchRocket(getRockets());
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
