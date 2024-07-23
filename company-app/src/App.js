// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./components/Home";
import CompanyDetails from "./components/CompanyDetails";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CompanyDetails/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
