import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import StartupInformation from './pages/StartupInformation';
import SearchResults from './pages/SearchResults';
import NotFoundPage from './pages/NotFoundPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="startup-information" element={<StartupInformation />} />
          <Route path="search-results" element={<SearchResults />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
