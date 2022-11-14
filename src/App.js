import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Det from './components/det';
import Header from './components/header';
import Main from './components/main';

function App() {
  const [mode, setMode] = useState("light");
  const changemod = () => {
    if (mode == "light") {
      setMode("dark")
    }
    else {
      setMode("light")
    }
    console.log(mode)
  }
  return (
    <div className="App">
      <Header onchangemode={changemod} mode={mode} />
      <Routes>
        <Route path='/' element={<Main mode={mode} />} />
        <Route path='/:namecountry' element={<Det mode={mode} />} />
      </Routes>
    </div>
  );
}

export default App;
