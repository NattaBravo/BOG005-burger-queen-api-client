import { useParams } from "react-router-dom";
import { HeaderBQ } from "../../Components/header.js"
import FooterBQ from "../../Components/footer.js";
import { usePropsFromGeneralContext } from "../../Context/GeneralContext.js";
import { CardsForProducts } from "../../Components/cardsForProducts.js";



const TakingProductsPage = () => {

  const { id } = useParams()

  const {
    productItem
  } = usePropsFromGeneralContext();

  console.log(productItem)

  return (
    <>

      <section>
        < HeaderBQ />
      </section>

      <section className='waiterBody'>

        <section className="wellcome">
          <h1>
            {id}
          </h1>
        </section>

        <section>
          <h2>ENTRADAS</h2>

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

        <FooterBQ />
      </section>
    </>
  );
}

export { TakingProductsPage };