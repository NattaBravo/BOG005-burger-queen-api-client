import { React, useEffect, useState, createContext, useContext } from "react";
import { GetProducts } from "../Requests";
//import { ShowProductList } from "./ProductList";

const WaiterContext = createContext();

const WaiterProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);


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

  const data = {
    productItem,
  };

  console.log('waiterContext', data);

  const newData = data.productItem.filter(function (product) {
    return (product.type)/*.includes(typeMenu)*/;
  });
  console.log("Toma tu array", newData);

  return (
    <WaiterContext.Provider
      value={data}
      newData={newData}>
      {children}
    </WaiterContext.Provider>)
}

const useExpandProps = () => (
  useContext(WaiterContext)
);

export { WaiterProvider, useExpandProps };