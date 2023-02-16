import { React } from 'react';
import { WaiterProvider } from './WaiterContext.js';
import { WaiterUI } from './WaiterUI.js';
import '../../Css/waiter.css'


export default WaiterPage;

function WaiterPage() {

  return (
    <WaiterProvider>
      <WaiterUI />
    </WaiterProvider>
  );
}