import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Home />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* Other sections will go here */}
    </div>
  );
}

export default App;