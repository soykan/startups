import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import StartupInformation from './pages/StartupInformation';
import SearchResults from './pages/SearchResults';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/startup-information" element={<StartupInformation />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
