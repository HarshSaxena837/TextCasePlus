import './App.css';
// import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alerts from './components/Alerts'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabeled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'  //#042743
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }


  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextCasePlus" abouttext="About" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container">
      {/* <Switch>
        <Route path="/about"> */}
          {/* <About /> */}
        {/* </Route>
        <Route path="/"> */}
          <TextForm showAlert={showAlert} heading={"Enter the text to analyse below"} mode={mode} />

        {/* </Route>
       
      </Switch> */}
      
    </div >
    {/* </Router> */}
    </>
  );
}

export default App;
