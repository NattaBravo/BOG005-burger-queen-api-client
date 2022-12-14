import React from 'react';
import '../Css/waiter.css'
import logoBQWaiter from '../Resources/LogoBQ.png';
import exitIcon from '../Resources/exit.png'
import backgroundWaiter from '../Resources/background-waiter.jpg';
import iconUser from '../Resources/usuariobq.png'
import lunchtitle from '../Resources/Almuerzo-unselected.png'
import beakfastTitle from '../Resources/Desayuno-selected.png'




function WaiterPage() {
  return (
    <React.Fragment>
      <section className='backgroundWaiter'>
        <img src={backgroundWaiter} alt="" className='backWaiter' />
        

        <header>
          <img src={logoBQWaiter} alt="" className='logoBQWaiter'></img>
          <img src={iconUser} alt="" className='iconUser'></img>
          <img src={exitIcon} alt="" className='exitIcon'></img>
        </header>

        <section>
          <img src={beakfastTitle} alt="" className='beakfastTitle'/>
          <img src={lunchtitle} alt="" className='lunchTitle'/>
          <input placeholder='cliente' className='selectTable' />

        </section>

        <section className='orders'>
          <h2 className='title'>Pedidos</h2>
          <article className='orderGrid'>

            <h1 className='titlesXGrid'>Producto</h1>
            <h1 className='titlesXGrid'>Cantidad</h1>
            <h1 className='titlesXGrid'>Valor Unitario</h1>
          </article>

          <article>
            <article className='product'></article>
            <article className='product'></article>
            <article className='product'></article>
            <article className='product'></article>
          </article>
        </section>

        <section className='orderOverview'>
          <h2 className='title'>Resumen del pedido</h2>
          <article className='orderOverviewGrid'>
            <h1 className='titlesXGrid'>Producto</h1>
            <h1 className='titlesXGrid'>Cantidad</h1>
            <h1 className='titlesXGrid'>Valor Unitario</h1>
          </article>
          <article>
          <article className='FinalOrder'></article> 
          <article className='FinalOrder'></article> 
          <article className='FinalOrder'></article> 
          <article className='FinalOrder'></article> 
          <article className='FinalOrder'></article> 
          </article>

          <article> 
          <article className='FullValue'></article> 
          </article>

        </section>

        <footer>
          <p>Made by Yeny and Natha</p>
        </footer>

      </section>

    </React.Fragment>
  );
}

export default WaiterPage;
