import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CMS from './components/CMS';
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cms" element={<CMS />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
