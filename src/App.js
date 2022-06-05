
import React from 'react';
import Collection from './components/Collection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <>
    <div className="main">
      <div className='container mx-auto xl:px-32 px-2 pt-10 '>
      <Navbar />
      <Hero />
      <Collection />
      <Newsletter />
     
      
      </div>
    </div>
    </>

  );
}

export default App;
