import { React, useEffect, useState, createContext, useContext } from "react";
import { GetProducts, PostProducts, EditProducts, DeleteProducts } from "../../Context/Requests";




const AdminContext = createContext();

const AdminProvider = ({ children }) => {

  const [productItem, setProductItem] = useState([]);

  const [typeMenu, setTypeMenu] = useState("");


  const [openModal, setOpenModal] = useState(false);

  const [title, setTitle] = useState("")

  const [idProduct, setIdProduct] = useState("")

  useEffect(() => {
    GetProducts()
      .then((res) => {
        const allProducts = res.data;
        allProducts.forEach(element => {
          element.counter = 0;
      /*    if(element.name === "Sandwich de jamón y queso"){
            element.kind = "Plato fuerte"
          } else if(){
            element.kind = "Bebida"
          }*/
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

  const AddRequest = (infoData) => {
    PostProducts(infoData)
      .then(res => {
        setProductItem(data.concat(res.data));
        GetProducts()
      })
      .catch(error => console.log(error))
  }

  const EditRequest = (infoData, idProduct) => {
    EditProducts(infoData, idProduct)
      .then(res => {
        setProductItem(data.map(element =>
          element.id === res.data.id ? res.data : element
        ))
      })
      .catch(error => console.log(error))
  }

  const DeleteRequest = (idProduct) => {
    console.log(idProduct, "momentico")
    DeleteProducts(idProduct)
      .then(res => {
        setProductItem(data.splice(res)
        )
      })
      .catch(error => console.log(error))
  }


  return (
    <AdminContext.Provider
      value={{
        data,
        typeMenu,
        setTypeMenu,
        openModal,
        setOpenModal,
        AddRequest,
        EditRequest,
        title,
        setTitle,
        idProduct,
        setIdProduct,
        DeleteRequest
      }}
    >
      {children}
      
    </AdminContext.Provider>)
}

const useExpandProps = () => (
  useContext(AdminContext)
);

export { AdminProvider, useExpandProps, AdminContext };