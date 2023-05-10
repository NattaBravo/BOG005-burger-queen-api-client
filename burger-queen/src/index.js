import React from 'react';
import {createRoot} from 'react-dom/client';
import Login from './Pages/Login/Login';
import WaiterPage from './Pages/Waiter/WaiterMainPage';
import AdministratorPage from './Pages/Admin/AdminMainPage';
import TakingOrdersLunchPage from './Pages/Waiter/takingOrdersForLunch';
import TakingOrdersBreakfastPage from './Pages/Waiter/takingOrdersForBreakfast';



import {
   HashRouter,
   Route,
   Routes,
} from "react-router-dom";



const root = createRoot(document.getElementById('principalRoot'));
root.render(
   <HashRouter>
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/waiter" element={<WaiterPage />}/>
         <Route path="/admin" element={<AdministratorPage />}/>
         <Route path="/lunch" element={<TakingOrdersLunchPage />}/>
         <Route path="/breakfast/:productsByType" element={<TakingOrdersBreakfastPage />}/>

      </Routes>
   </HashRouter>


);

export { root }
