import React from 'react'
import data from './data'
import './App.css';

import Main from './pages/Main'
import FullImage from './pages/fullImage'

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/fullImage/:name" element={<FullImage />} />
    </Routes>
  );
}

export default App;
