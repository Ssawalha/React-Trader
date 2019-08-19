import React, {useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  const [apiKey, setApiKey] = useState(window.sessionStorage.getItem('api_key'))
                //^ second element always calls setState on first element
                //for example setApiKey('1234') will update the state of apiKey to '1234'
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Trader</h1>
        <Navbar apiKey={apiKey} />
       {/*       ^ coming from NavBAR, {apiKey} coming from the state of the function App (since we are using useState)  */}
        <Main apiKey={apiKey} setApiKey={setApiKey}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
