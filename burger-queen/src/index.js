import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import AdminPage from './Pages/Admin';
import WaiterPage from './Pages/Waiter/WaiterMainPage';


import {
   BrowserRouter,
   Route,
   Routes,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Login/>}>
               
            </Route>
        </Routes>
   </BrowserRouter>


);

reportWebVitals();
