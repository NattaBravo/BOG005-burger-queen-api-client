import { React } from 'react';
import { AdminProvider } from './AdminContext.js';
import { AdminUI } from './AdminUI.js';
import '../../Css/admin.css'


export default AdminPage;

function AdminPage() {

  return (
    <AdminProvider>
      <AdminUI />
    </AdminProvider>
  );
}