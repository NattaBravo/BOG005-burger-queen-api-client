//import { HeaderBQ } from "../../Components/Header"
import FooterBQ from "../../Components/footer";
import { SelectProductForType } from "../../Components/selectProductForType";
import { usePropsFromWaiter } from "./WaiterContext";
import { TakingOrdersLunchPage } from './takingOrdersForLunch';
import { HeaderBQ } from "../../Components/header";


function WaiterUI() {

  const {
    productItem
  } = usePropsFromWaiter();

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
          <TakingOrdersLunchPage
            productItem={productItem} />
        </SelectProductForType>

        <h2>TABLE STATE</h2>
        <button className="tableState">
          <p className="tableStateTitle">Observa el mapa de tus mesas y su estado actual</p>
        </button>

        <h2>ÓRDENES</h2>
        <button className="clickToOrders">
          <p className="ordersTitle">Sigue aquí todas las ordenes en tiempo real</p>
        </button>

        < FooterBQ />

      </section>

    </>
  )
}

export { WaiterUI }