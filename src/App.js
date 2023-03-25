import React from 'react';
import Collection from './components/Collection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { useState } from 'react';
import { createContext } from 'react';
import "./App.css";
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light"? "dark" : "light"))
  }

  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
    <div className="main" id={theme}>
    
      <div className='container mx-auto xl:px-32 px-2 pt-10 '>
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
      <Navbar />
      <Collection />
      <Newsletter />
      </div>
      
    </div>
    </ThemeContext.Provider>
    </>

  );
}

export default App;
