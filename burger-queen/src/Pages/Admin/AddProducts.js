import React from "react";
import { useExpandProps } from "./AdminContext";

function AddProducts({openModal, setOpenModal}) {

    const {title, setTitle} = useExpandProps();
 
    const onAddProduct = (event) => {
        setTitle(event.target.value);
        if(!openModal){
            setOpenModal(true);
        }
    }
    return (
        <button className='addProduct' onClick={onAddProduct} value="Crear" title={title}>Agregar Producto</button>
    )
}

export { AddProducts };