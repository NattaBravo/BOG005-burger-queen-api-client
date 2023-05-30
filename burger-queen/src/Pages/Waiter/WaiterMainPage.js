import { React } from 'react';
import '../../Css/waiter.css'
import FooterBQ from "../../Components/footer";
import { SelectProductForType } from "../../Components/selectProductForType";
import { usePropsFromGeneralContext } from "../../Context/GeneralContext";
import { HeaderBQ } from "../../Components/header";


export default WaiterPage;

function WaiterPage() {

  const {
    productItem
  } = usePropsFromGeneralContext();

  console.log(productItem, typeof (productItem), "desdeWaiterUI")

  return (
    <>
      <section>
        <HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>¡HOLA, NATALIA!</h1>
          <h3>Mesera</h3>
          <p>¡Vamos a hacer de hoy un día delicioso!</p>
        </section>

        <h2>PRODUCTOS</h2>
        <SelectProductForType
          productItem={productItem}
        >
          {/*<TakingOrdersLunchPage
            productItem={productItem} />*/}
        </SelectProductForType>

        <h2>TABLE STATE</h2>
        <button className="tableState">
          <p className="tableStateTitle">OBSERVA EL MAPA DE TUS MESAS Y SU ESTADO ACTUAL</p>
        </button>

        <h2>ÓRDENES</h2>
        <button className="clickToOrders">
          <p className="ordersTitle">SIGUE AQUÍ TODAS LAS ÓRDENES EN TIEMPO REAL</p>
        </button>

        < FooterBQ />

      </section>

    </>
  )
}