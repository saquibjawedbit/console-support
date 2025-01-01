import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import AccountDeletion from './Pages/AccountDeletion.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path='/'  element={<App/>}/>
        <Route path='/trackify/account-delete' element={<AccountDeletion/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
