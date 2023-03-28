import { React, useEffect, useState, createContext, useContext } from "react";
import { GetProducts, PostProducts, EditProducts, DeleteProducts } from "../Requests";



const WaiterContext = createContext();

const WaiterProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenuWaiter, setTypeMenuWaiter] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState("")

  const [idProduct, setIdProduct] = useState("")

  useEffect(() => {
    GetProducts()
      .then((res) => {
        const allProducts = res.data;
        console.log(allProducts)
        allProducts.forEach(element => {
          element.counter = 0;
        });
        setProductItem(allProducts);
      })
      .catch(error => error);
  }, []);

 /* let data;
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
  }*/


  return (
    <WaiterContext.Provider
      value={{
        //data,
        typeMenuWaiter,
        setTypeMenuWaiter,
        openModal,
        setOpenModal,
        title,
        setTitle,
        idProduct,
        setIdProduct,
      }}
    >
      {children}
    </WaiterContext.Provider>)
}

const usePropsFromWaiter = () => (
  useContext(WaiterContext)
);

export { WaiterProvider, usePropsFromWaiter, WaiterContext };