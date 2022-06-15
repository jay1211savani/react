import './App.css';
import React, {useState}from 'react';
// import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setmode]= useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = 'grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title="Textutils" aboutText="About textutils"/>
    <Navbar/> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" />
    
    <div className="container my-3"></div> 
    {/* <About/> */}
    </div>
  
    </>
    
  );
}

export default App;
