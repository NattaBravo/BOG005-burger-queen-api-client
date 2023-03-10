import { useState } from 'react';
import { Modal } from '@material-ui/core';


const CreateProductItem = () => {

    const [modalInsert, setModalInsert] = useState(false);
    const openCloseModal = () => {
        setModalInsert(!modalInsert);
    }

    const bodyModal = (
        <article>
            <h1>Crear producto</h1>
            <p>Nombre:</p>
            <input placeholder='Nombre del producto'></input>
            <p>Imagen</p>

            <p>Precio</p>
            <input placeholder='Precio del producto'></input>
            <p>Tipo</p>
            <select>
                <option>Desayuno</option>
                <option>Almuerzo</option>
            </select>
            <button>Insertar</button>
            <button>Cancelar</button>
        </article>

        
    );
    return (
        
        <Modal
        open={modalInsert}
        onClose={openCloseModal}>
            {bodyModal}
        </Modal>
    )

};

export default CreateProductItem;
