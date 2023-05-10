import HeaderBQ from "../../Components/header"
import FooterBQ from "../../Components/footer";
import { SelectProductForType } from "../../Components/selectProductForType";
import { usePropsFromWaiter } from "./WaiterContext";
import TakingOrdersBreakfastPage from "./takingOrdersForBreakfast";


function WaiterUI() {

  const {
    productsByType,
    //typeMenuWaiter,
    //setTypeMenuWaiter
  } = usePropsFromWaiter();

  return (
    <>
      <section>
        < HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>¡HOLA, NATALIA!</h1>
          <h3>Mesera</h3>
          <p>¡Vamos a hacer de hoy un día delicioso!</p>
        </section>

        <h2>PRODUCTOS</h2>
        <SelectProductForType>
          <TakingOrdersBreakfastPage
           productsByType={productsByType}/>
        </SelectProductForType>

        <h2>TABLE STATE</h2>
        <section className="tableState">
          <p className="tableStateTitle">Observa el mapa de tus mesas y su estado actual</p>
        </section>

        <h2>ÓRDENES</h2>
        <section className="clickToOrders">
          <p className="ordersTitle">Sigue aquí todas las ordenes en tiempo real</p>
        </section>

        < FooterBQ />

      </section>

    </>
  )
}

export { WaiterUI }