import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Bio from './components/bio/bio';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Element name='home' id='home'>
        <Homepage />
      </Element>
      <Element name='bio' id='bio'>
        <Bio />
      </Element>
      <Element name='projects' id='projects'>
        <Projects />
      </Element>
      <Element name='contact' id='contact'>
        <Contact />
      </Element>
    </div>
  );
}

export default App;
