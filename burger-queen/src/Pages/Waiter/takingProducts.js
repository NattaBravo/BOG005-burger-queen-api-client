import { useParams } from "react-router-dom";
import { HeaderBQ } from "../../Components/header.js"
import FooterBQ from "../../Components/footer.js";
import { usePropsFromGeneralContext } from "../../Context/GeneralContext.js";
import { CardsForProducts } from "../../Components/cardsForProducts.js";
import { Button } from "reactstrap";
import { useState } from "react";
import { Modal } from '../Admin/Modal.js/Modal'
import { FormModaltoOrder } from "./formModaltoOrder.js";



const TakingProductsPage = () => {


  const [openOrderModal, setOpenOrderModal] = useState(false);


  // Función para filtrar productos por tipo.

  let { id } = useParams()

  const title = id.toUpperCase();

  const {
    productItem,
    selectedProductsForOrder,
    createOrder
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

  // Función para abrir modal solicitud de órden

  const openOrderModalFunction = () => {
    setOpenOrderModal(true)
  }


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
            (unitProduct.kind === "Entrada" && <CardsForProducts
              key={unitProduct.id}
              unitProduct={unitProduct}
              onOrder={() => { selectedProductsForOrder(unitProduct.id) }} />
            )))
          }
        </section>

        <h2>PLATOS FUERTES</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Plato fuerte" && <CardsForProducts
              unitProduct={unitProduct}
              key={unitProduct.id}
              onOrder={() => { selectedProductsForOrder(unitProduct.id) }}
            />)))
          }
        </section>


        <h2>BEBIDAS</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Bebida" && <CardsForProducts
              unitProduct={unitProduct}
              key={unitProduct.id}
              onOrder={() => { selectedProductsForOrder(unitProduct.id) }} />)))
          }
        </section>

        <h2>POSTRES</h2>
        <section className="horizontalScroll">
          {productsSelected.map(unitProduct => (
            (unitProduct.kind === "Postre" && <CardsForProducts
              unitProduct={unitProduct}
              key={unitProduct.id}
              onOrder={() => { selectedProductsForOrder(unitProduct.id) }} />)))
          }
        </section>

        <Button className="saveButton" onClick={openOrderModalFunction}>GUARDAR</Button>

        {!!openOrderModal && (
          <Modal>
            <FormModaltoOrder
              openOrderModal={openOrderModal}
              setOpenOrderModal={setOpenOrderModal} 
              onCreateORder={createOrder()}/>
          </Modal>
        )}

        <FooterBQ />
      </section>

    </>
  );
}

export { TakingProductsPage };