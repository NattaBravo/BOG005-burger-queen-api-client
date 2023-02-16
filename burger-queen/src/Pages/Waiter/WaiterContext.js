import { React, useEffect, useState, createContext, useContext } from "react";
import { GetProducts } from "../Requests";
import { ShowProductList } from "./ProductList";


const WaiterContext = createContext();

const WaiterProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenu, setTypeMenu] = useState("");

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    GetProducts()
      .then((res) => {
        const allProducts = res.data;
        allProducts.forEach(element => {
          element.counter = 0;
        });
        setProductItem(allProducts);
      })
      .catch(error => error);
  }, []);

  let data;
  if (typeMenu.length === 0) {
    let prep = { productItem };
    data = prep.productItem;
  } else {
    let filteredProducts = productItem.filter(unitProduct => {
      const typeForEachProduct = unitProduct.type;
      console.log(typeForEachProduct, typeMenu);
      return typeForEachProduct.includes(typeMenu)
    })
    data = filteredProducts;
  }

  return (
    <WaiterContext.Provider
      value={{
        data,
        typeMenu,
        setTypeMenu,
        openModal,
        setOpenModal,
      }}
    >
      {children}
      <ShowProductList />
    </WaiterContext.Provider>)
}

const useExpandProps = () => (
  useContext(WaiterContext)
);

export { WaiterProvider, useExpandProps, WaiterContext };