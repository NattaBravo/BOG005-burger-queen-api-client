import { React, useState, useEffect, createContext, useContext } from "react";
import { GetProducts } from "../Requests";


const WaiterContext = createContext();

const WaiterProvider = ({ children }) => {

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

  let productsByType;
 
  if (typeMenuWaiter) {
    let filteredProducts = productItem.filter(unitProduct => {
      const typeForEachProduct = unitProduct.type;
      return typeForEachProduct.includes(typeMenuWaiter)
    })
    productsByType = filteredProducts;
    console.log(productsByType, "esto fue")
  }




  return (
    <WaiterContext.Provider
      value={{
        productItem,
        setProductItem,
        typeMenuWaiter,
        setTypeMenuWaiter,
        productsByType,
      }}
    >
      {children}

    </WaiterContext.Provider>)
}

const usePropsFromWaiter = () => (
  useContext(WaiterContext)
);

export { WaiterProvider, usePropsFromWaiter, WaiterContext };