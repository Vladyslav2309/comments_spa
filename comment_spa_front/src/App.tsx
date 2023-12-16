import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/home/HomePage";
import NavBarDefault from "./components/navbar/NavBarDefault";



function App() {
  return (
    <div>
      <NavBarDefault/>
        <Routes>
               <Route index element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
