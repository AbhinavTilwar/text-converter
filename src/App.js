import { isFocusable } from "@testing-library/user-event/dist/utils";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setmode]=useState('light');
    const toggleMode=()=>{
      if(mode ==='light'){
        setmode('dark');
        document.body.style.backgroundColor='black';
        showAlert("dark mode enabled.","info")
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode enabled.","info")

      }
    }
    const[alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
           setAlert({
            msg: message,
            type: type
          }
           )
           setTimeout(() => {
             setAlert(null);
           }, 3000);
    }
  return (
    <>
    {/* <BrowserRouter> */}
        <Navbar title="TextConverter" mode={mode}  toggleMode={toggleMode} aboutText="About"/>
        <Alert alert={alert}/>
        
         <div className="container" mode={mode}>
          {/* <Routes>  
              <Route exact path="/about" element={<About />} />
          
              < Route exact path="/" element= {<TextForm heading="Enter text to convert" mode={mode} showAlert={showAlert}/>} /> 
          </Routes> */}
          <TextForm heading="Enter text to convert" mode={mode} showAlert={showAlert}/>
         </div>
        <Footer mode={mode}/>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
// $env:NODE_OPTIONS = "--openssl-legacy-provider"