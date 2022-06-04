
import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <div className="main">
      <div className='container mx-auto xl:px-32 px-2 pt-10 '>
      <Navbar />
      <Hero />
      
      </div>
    </div>
    </>

  );
}

export default App;
