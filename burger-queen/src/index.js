import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login/Login';
import WaiterPage from './Pages/Waiter/WaiterMainPage';
import AdministratorPage from './Pages/Admin/AdminMainPage';
import TakingOrdersLunchPage from './Pages/Waiter/takingOrdersForLunch';
import TakingOrdersBreakfastPage from './Pages/Waiter/takingOrdersForBreakfast';



import {
   BrowserRouter,
   Route,
   Routes,
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/waiter" element={<WaiterPage />}/>
         <Route path="/admin" element={<AdministratorPage />}/>
         <Route path="/lunch" element={<TakingOrdersLunchPage />}/>
         <Route path="/breakfast" element={<TakingOrdersBreakfastPage />}/>

      </Routes>
   </BrowserRouter>


);

export { root }
