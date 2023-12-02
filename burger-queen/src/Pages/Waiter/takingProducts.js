import { useParams } from "react-router-dom";
import { HeaderBQ } from "../../Components/header.js"
import FooterBQ from "../../Components/footer.js";
import { usePropsFromGeneralContext } from "../../Context/GeneralContext.js";
import { CardsForProducts } from "../../Components/cardsForProducts.js";
import { Button } from "reactstrap";



const TakingProductsPage = () => {

  let { id } = useParams()

  const title = id.toUpperCase();


  const {
    productItem
  } = usePropsFromGeneralContext();

  if (id === "breakfast") {
    id = "Desayuno"
  } else if (id === "lunch") {
    id = "Almuerzo"
  }

  const productsSelected = [];

  productItem.map(unitProd => {
    if (unitProd.type === id) {
      productsSelected.push(unitProd)
    }
    return productsSelected
  })


  console.log(id, productsSelected)
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
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Entrada" && <CardsForProducts unitProduct={unitProduct} />
            )))
          }
        </section>

        <h2>PLATOS FUERTES</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Plato fuerte" && <CardsForProducts unitProduct={unitProduct} />)))
          }
        </section>


        <h2>BEBIDAS</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Bebida" && <CardsForProducts unitProduct={unitProduct} />)))
          }
        </section>

        <h2>POSTRES</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Postre" && <CardsForProducts unitProduct={unitProduct} />)))
          }
        </section>

        <Button className="saveButton">GUARDAR</Button>

        <FooterBQ />
      </section>

    </>
  );
}

export { TakingProductsPage };