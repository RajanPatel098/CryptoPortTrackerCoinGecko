import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/home.js';
import Show from './Pages/Show.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/:id' element={<Show/>} />
    </Routes>
  </BrowserRouter>
);

