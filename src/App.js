import './App.css';
import { Header } from './MyComp/Header';
import { Footer } from './MyComp/Footer';
import { About } from './MyComp/About';
import { Home } from './MyComp/Home';

import React from "react";

import {
  Route,
  Routes
} from "react-router-dom";



function App() {

  return (
    <>
    <Header title="Todos Lis" sb={false} />
      <Routes>
        
        
        
          <Route path="/" exact element = {<Home/>}/>
       
          <Route path="/about" element = {<About />}/>
          
      </Routes>
      <Footer />
    </>
  );
}

export default App;
