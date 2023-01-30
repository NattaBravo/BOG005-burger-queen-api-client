import { React } from 'react';
import '../../Css/waiter.css'
import logoBQWaiter from '../../Resources/LogoBQ.png';
import exitIcon from '../../Resources/exit.png'
import iconUser from '../../Resources/usuariobq.png'
import { WaiterProvider } from './WaiterContext.js';
import { ShowProductList } from './ProductList.js';
import ArticleProduct from './ArticleProduct';
//import { useExpandProps } from './WaiterContext';
//import { useState } from "react";

export default WaiterPage;

function WaiterPage() {


  //let data = useExpandProps();
  //console.log(data);
  //data = data.productItem;

  //const [prodsFiltered, setProdsFiltered] = useState(data);
  //const [ dataButton, setDataButton ] = useState("");
  /*const [typeMenu, setTypeMenu] = useState([""]);

  const handleTypeMenu = (typeMenu) => {
    setTypeMenu(typeMenu);
    console.log(setTypeMenu);
  };


  const newData = data.productItem.filter((product) => {
    let leakedData = (product.type.includes(typeMenu));
    return leakedData;
  });
  //setProdsFiltered(newData)
  console.log(newData);

*/


  return (
    <WaiterProvider>
      <section className='backgroundWaiter'>

        <header>
          <img src={logoBQWaiter} alt="" className='logoBQWaiter'></img>
          <img src={iconUser} alt="" className='iconUser'></img>
          <img src={exitIcon} alt="" className='exitIcon'></img>
        </header>

        <nav>

          <ShowProductList
          
          />

          <select className='selectTable'>
            <option>Mesa #1</option>
            <option>Mesa #2</option>
            <option>Mesa #3</option>
            <option>Mesa #4</option>
          </select>

          <button alt="" className='totalOrdersButton'>Todas las órdenes</button>

        </nav>

        <section className='orders'>

          <h2 className='title'>Productos</h2>

          <article className='orderGrid'>
            <h1 className='titlesXGrid'>Producto</h1>
            <h1 className='titlesXGrid'>Cantidad</h1>
            <h1 className='titlesXGrid'>Valor Unitario</h1>
          </article>

          <article>
            <article>
              <ArticleProduct />
            </article>
          </article>

          <button className='addProduct'>Agregar Producto</button>

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

          <article className='FullValue'>
            <h1 className='sendOrderTitle'>Valor Total</h1>
            <button className='sendOrder'>Enviar</button>
          </article>

        </section>


        <footer>
          <p>Made by Yeny and Natha</p>
        </footer>

      </section>

    </WaiterProvider>

  );
}