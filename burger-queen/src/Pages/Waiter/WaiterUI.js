//import breakfast from '../../Resources/Desayuno.jpg'
import HeaderBQ from "../../Components/header"

function WaiterUI() {

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
        <article className="breakfast">
          <div className="breakfastImage"></div>
          <div className="breakfastTitle">
            <p className="breakfastPTitle1">DESA</p>
            <p className="breakfastPTitle2">YUNO</p>
            
          </div>
        </article>
        <article className="lunch">
          <div className="lunchTitle">
          <p className="lunchPTitle1">AL</p>
            <p className="lunchPTitle2">MUER</p>
            <p className="lunchPTitle3">ZO</p>
          </div>
          <div className="lunchImage"></div>
        </article>

        <h2>TABLE STATE</h2>
        <section className="tableState">
            <p className="tableStateTitle">Observa el mapa de tus mesas y su estado actual</p>
        </section>

        <h2>ÓRDENES</h2>
        <section className="clickToOrders">
            <p className="ordersTitle">Sigue aquí todas las ordenes en tiempo real</p>
        </section>

        <footer className="mainFooter">
          <p>Made by Yeny and Natha</p>
        </footer>


      </section>
      

    </>
  )
}

export { WaiterUI }