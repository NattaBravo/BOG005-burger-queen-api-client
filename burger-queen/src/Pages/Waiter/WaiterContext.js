import { React, useState, createContext, useContext } from "react";

const WaiterContext = createContext();

const WaiterProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenuWaiter, setTypeMenuWaiter] = useState("");
  console.log(typeMenuWaiter)


  return (
    <WaiterContext.Provider
      value={{
        productItem,
        setProductItem,
        typeMenuWaiter,
        setTypeMenuWaiter,
      }}
    >
      {children}
    </WaiterContext.Provider>)
}

const usePropsFromWaiter = () => (
  useContext(WaiterContext)
);

export { WaiterProvider, usePropsFromWaiter, WaiterContext };