import { React, useState, useEffect, createContext, useContext } from "react";
import { GetProducts, GetUser } from "./Requests";


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
        });
        setProductItem(allProducts);
        console.log(allProducts);
      })
      .catch(error => error);
  }, []);


  console.log(productItem, "Desde WaiterContext", typeof(productItem))

  GetUser()
  .then(res => console.log(res))
  .catch(error => error)
  




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