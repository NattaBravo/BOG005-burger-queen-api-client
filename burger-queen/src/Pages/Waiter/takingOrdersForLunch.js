import { useParams } from "react-router-dom";
import { HeaderBQ } from "../../Components/header.js"
import FooterBQ from "../../Components/footer";



const TakingOrdersLunchPage = () => {

  const {id} = useParams()
  
  
  return (
    <>
    <p>Yo todo lo puedo {id}</p>

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

export { TakingOrdersLunchPage };