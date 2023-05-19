import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import React from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App () {
  const [Mode, setMode] = useState('light');
  const [Bcolor, setBcolor] = useState('dark');
  const [ABC, setABC] = useState('white');
  const [ATC, setATC] = useState('black');

  const modedanger = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#800000';
    document.body.style.color = 'white';
    setBcolor('danger')
    setABC('#800000')
    setATC('white')
  }


  const modelight = ()=>{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    setBcolor('dark')
    setABC('white')
    setATC('black')
  }

  const modedark = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = 'white';
    setBcolor('light')
    setABC('#000000')
    setATC('white')
  }
   
  const modeprimary = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    setBcolor('primary')
    setABC('#042743')
    setATC('white')
  }

  const modesuccess = ()=>{
    setMode('dark')
    document.body.style.backgroundColor = '#062E03';
    document.body.style.color = 'white';
    setBcolor('success')
    setABC('#062E03')
    setATC('white')
  }


  return(
    <>
    <Router>
      <Navbar title = "Textutilities" mode = {Mode} modeprimary={modeprimary} modedark={modedark} modelight={modelight} modedanger={modedanger} modesuccess={modesuccess}/>
      <Routes>

      <Route exact path="/" element={<Textforms heading = "Enter your text here" mode = {Mode} Bcolor ={Bcolor}/>} />
          <Route path="/about" element={<About abc={ABC} atc={ATC}/>} />

        </Routes>
        </Router>
        
    </>
  );
}

export default App;
