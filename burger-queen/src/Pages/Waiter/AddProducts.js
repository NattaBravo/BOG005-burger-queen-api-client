import React from "react";

function AddProducts({openModal, setOpenModal}) {

    const onAddProduct = () => {
        if(!openModal){
            console.log("Oprimiste el boton de la felicidd");
            setOpenModal(true);
        }
    }
    return (
        <button className='addProduct' onClick={onAddProduct}>Agregar Producto</button>
    )
}

export { AddProducts };