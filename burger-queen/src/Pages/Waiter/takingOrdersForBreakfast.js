import HeaderBQ from "../../Components/header"
import FooterBQ from "../../Components/footer";
import { useLocation, useParams } from "react-router-dom";



const TakingOrdersBreakfastPage = (productsByType) => {

  let params = useParams();
  let location = useLocation();


  console.log(params, location)



  console.log("ailobiu")

  return (
    <>
      <section>
        < HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>
            DESAYUNOS
          </h1>
        </section>

        <section>
          <h2>ENTRADAS</h2>

        </section>

        <section>
          <h2>PLATOS FUERTES</h2>

        </section>

        <section>
          <h2>BEBIDAS</h2>

        </section>
        <section>
          <h2>POSTRES</h2>

        </section>

        <FooterBQ />
      </section>
    </>
  );
}

export default TakingOrdersBreakfastPage;