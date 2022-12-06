import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Program/Program';
import Reason from './components/Reasons/Reason';
import Plan from './components/Plans/Plans';
import Persons from './components/Persons/Persons';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reason/>
      <Plan/>
      <Persons/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
