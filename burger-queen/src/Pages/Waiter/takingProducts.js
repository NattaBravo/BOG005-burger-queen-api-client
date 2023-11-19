import { useParams } from "react-router-dom";
import { HeaderBQ } from "../../Components/header.js"
import FooterBQ from "../../Components/footer.js";
import { usePropsFromGeneralContext } from "../../Context/GeneralContext.js";
import { CardsForProducts } from "../../Components/cardsForProducts.js";
import { Button } from "reactstrap";



const TakingProductsPage = () => {

  const { id } = useParams()

  const title = id.toUpperCase();

  const {
    productItem
  } = usePropsFromGeneralContext();

  console.log(productItem, title)

  return (
    <>

      <section>
        < HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>
            {title}
          </h1>
        </section>

          <h2>ENTRADAS</h2>
        <section className="horizontalScroll">

          {productItem.map(unitProduct => (
            <CardsForProducts 
            unitProduct={unitProduct}
            />
          ))
          }
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
      <Button className="flowButton">GUARDAR</Button>

        <FooterBQ />
      </section>

    </>
  );
}

export { TakingProductsPage };