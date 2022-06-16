import './App.css';
import React, {useState}from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setmode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar title="Textutils" aboutText="About textutils"/>
    <Navbar/> */}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" />
    
    <div className="container my-3"></div> 
    {/* <About/> */}
    </div>
  
    </>
    
  );
}

export default App;
