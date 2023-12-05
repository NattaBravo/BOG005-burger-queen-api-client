import { React, useState, useEffect, createContext, useContext } from "react";
import { GetProducts, } from "./Requests";


const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenuWaiter, setTypeMenuWaiter] = useState("");

  //const [selectedProductsForOrder, setSelectedProductsForOrder] = useState([]);

  // Función para obtener productos, agregar contador y plato a cada objeto json. (Solicitud GET)

  useEffect(() => {
    GetProducts()
      .then((res) => {
        const allProducts = res.data;
        allProducts.forEach(element => {
          element.counter = 0;
          if (element.name === "Sandwich de jamón y queso") {
            element.kind = "Plato fuerte"
          } else if (element.name === "Agua 500ml" || element.name === "Café americano") {
            element.kind = "Bebida"
          }
        });
        setProductItem(allProducts);
        console.log(allProducts);
      })
      .catch(error => error);
  }, []);



  console.log(productItem, "Desde WaiterContext", typeof (productItem))



  // Función para seleccionar productos, aumentar su contador y crear la lista de seleccionados

  const listOfIndex = []

  function selectedProductsForOrder(unitProd) {
    console.log(unitProd)

    const newListofProducts = [...productItem]
    const findedProducts = newListofProducts.findIndex((prdcts) => prdcts.id === unitProd);
    newListofProducts[findedProducts].counter++
    setProductItem(newListofProducts)
    listOfIndex.push(unitProd)
    console.log(newListofProducts, "Esta es la lista de productos con ajuste al contador segun index")
    console.log(listOfIndex)
  }
  
  function createOrder() {

    console.log("Tocaste el botón de la felicidad")
    
    
    /*const order = {
      "client": "nameOfClient",
      "products": []
    }
  
  
    const newListofProducts = [...ProductItem]
  
     
  
    prArray.forEach(pr =>{
    const newOrder = {
      "qty":0,
      "product":{
        "id":pr.id,
        "name": pr.name,
        "price": pr.name,
        "image": pr.image,
        "type": pr.type,
        "dateEntry": pr.dataEntry
      }
    }
      if(order.products = 0){
        order.products.push(newOrder)
      } else if (order.products > 1 && order.products.id === pr.id){
  
      }
  
  
    })*/

  }


  return (
    <GeneralContext.Provider
      value={{
        productItem,
        setProductItem,
        typeMenuWaiter,
        setTypeMenuWaiter,
        selectedProductsForOrder,
        createOrder
      }}
    >
      {children}
    </GeneralContext.Provider>)
}

const usePropsFromGeneralContext = () => (
  useContext(GeneralContext)
);

export { GeneralProvider, usePropsFromGeneralContext, GeneralContext };