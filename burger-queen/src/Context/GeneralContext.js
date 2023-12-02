import { React, useState, useEffect, createContext, useContext } from "react";
import { GetProducts, } from "./Requests";


const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenuWaiter, setTypeMenuWaiter] = useState("");



  useEffect(() => {
    GetProducts()
      .then((res) => {
        const allProducts = res.data;
        allProducts.forEach(element => {
          element.counter = 0;
          if(element.name === "Sandwich de jamón y queso"){
            element.kind = "Plato fuerte"
          } else if (element.name === "Agua 500ml" || element.name === "Café americano" ){
            element.kind = "Bebida"
          }
        });
        setProductItem(allProducts);
        console.log(allProducts);
      })
      .catch(error => error);
  }, []);


  console.log(productItem, "Desde WaiterContext", typeof(productItem))


  return (
    <GeneralContext.Provider
      value={{
        productItem,
        setProductItem,
        typeMenuWaiter,
        setTypeMenuWaiter,
      }}
    >
      {children}
    </GeneralContext.Provider>)
}

const usePropsFromGeneralContext = () => (
  useContext(GeneralContext)
);

export { GeneralProvider, usePropsFromGeneralContext, GeneralContext };