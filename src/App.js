import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Footer from './components/site/Footer'
import {BrowserRouter as Router} from 'react-router-dom';
import Search from './components/site/Search'

function App() {
  return (
    <div className="App">
      <Router>
      Test
      <Search />
      <Footer />
      </Router>

    </div>
  );
}

export default App;
