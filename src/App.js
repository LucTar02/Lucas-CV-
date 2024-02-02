import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './views/Home.jsx';
import Kontakt from './views/Kontakt.jsx';
import Projekt from './views/Projekt.jsx';
import OmMig from './views/OmMig.jsx';

import { increment, } from './actions/counterActions.js';
import { useDispatch } from 'react-redux';
import ViewCounter from './components/VeiwCounter.jsx';

//-------------------Redux

//-------------------

function App() {

const dispatch = useDispatch();

  return (
    <Router className="App">
		<Navbar  />
    <div className='button'>
    <button onClick={ () => dispatch(increment(1)) }>Ge 1 poäng till mitt CV</button>
    </div>
    <ViewCounter  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Projekt" element={<Projekt />} />
        <Route path="/OmMig" element={<OmMig />} />
      </Routes>
    </Router>
  );
}

export default App;
