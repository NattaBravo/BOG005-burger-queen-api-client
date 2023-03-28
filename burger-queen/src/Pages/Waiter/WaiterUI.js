import HeaderBQ from "../../Components/header"
import { useNavigate } from "react-router-dom";
import FooterBQ from "../../Components/footer";
import { usePropsFromWaiter } from "./WaiterContext";

function WaiterUI() {

  const navigate = useNavigate();

  const OrdersLunchPage = "/lunch"
  const OrdersBreakfastPage = "/breakfast"

  const { typeMenuWaiter, setTypeMenuWaiter } = usePropsFromWaiter()



  const goToTakingLunchOrder = (e) => {
    navigate(OrdersLunchPage)
    
  }

  const goToTakingBreakfastOrder = (e) => {
    navigate(OrdersBreakfastPage)
    const value = e.target;
    console.log(e)
    if (value.includes("breakfast")){
      setTypeMenuWaiter("desayuno")
    }
  }




  return (
    <>

      <section>
        < HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>
            ¡HOLA, NATALIA!
          </h1>
          <h3>Mesera</h3>
          <p>
            ¡Vamos a hacer de hoy un día delicioso!
          </p>
        </section>

        <h2>PRODUCTOS</h2>
        <button
          className="breakfast"
          onClick={goToTakingBreakfastOrder}
          value="Desayuno"
          typeMenuWaiter={typeMenuWaiter}>
          <div className="breakfastImage"value="Desayuno"></div>
          <div className="breakfastTitle" value="Desayuno">
            <p className="breakfastPTitle1" value="Desayuno">DESA</p>
            <p className="breakfastPTitle2" value="Desayuno">YUNO</p>

          </div>
        </button>
        <button
          className="lunch"
          onClick={goToTakingLunchOrder}
          value="Almuerzo"
          typeMenuWaiter={typeMenuWaiter}>
          <div className="lunchTitle">
            <p className="lunchPTitle1">AL</p>
            <p className="lunchPTitle2">MUER</p>
            <p className="lunchPTitle3">ZO</p>
          </div>
          <div className="lunchImage"></div>
        </button>

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