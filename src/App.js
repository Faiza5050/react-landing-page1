import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Topbar from './components/topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen md:w-[100%] bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/image-bg.png')" }}>
        <Topbar />
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
