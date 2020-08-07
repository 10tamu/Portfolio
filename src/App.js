import React from 'react';
import './App.css';

import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
      
      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;