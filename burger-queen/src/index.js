import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/Login.css';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
//import Router from './Routes/Router';

import {
   BrowserRouter,
   //RouterProvider,
   Route,
   Routes,
 } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login />}/>
        </Routes>
   </BrowserRouter>
   


);

reportWebVitals();
