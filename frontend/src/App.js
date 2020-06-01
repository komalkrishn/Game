import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Game from './game'

function App() {
  return (
    <div className="App">
      <meta property="og:title" content="__OG_TITLE__" />
     <Router>
      <div className="App">
        <Route exact path="/" component={Game} />
      </div>
    </Router>
    </div>
  );
}


export default App;
