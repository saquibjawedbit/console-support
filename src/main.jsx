import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AccountDeletion from './Pages/AccountDeletion.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path='/'  element={<App/>}/>
        <Route path='/trackify/account-delete' element={<AccountDeletion/>}/>
        <Route path='/trackify/privacy-policy' element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
