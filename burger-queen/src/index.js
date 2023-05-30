import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Pages/Login/Login';
import WaiterPage from './Pages/Waiter/WaiterMainPage';
import AdministratorPage from './Pages/Admin/AdminMainPage';
import { TakingProductsPage } from './Pages/Waiter/takingProducts';
import { GeneralProvider } from './Context/GeneralContext';


import {
   HashRouter,
   Route,
   Routes,
} from "react-router-dom";

const root = createRoot(document.getElementById('principalRoot'));
root.render(
   <HashRouter>
      <GeneralProvider>
         <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/waiter" element={<WaiterPage />} />
            <Route path="/waiter/:id" element={<TakingProductsPage />} />

            <Route path="/admin" element={<AdministratorPage />} />
         </Routes>
      </GeneralProvider>
   </HashRouter>
);

export { root }
