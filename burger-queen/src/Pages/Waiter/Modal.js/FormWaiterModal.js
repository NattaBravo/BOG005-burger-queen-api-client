import { useState } from 'react';
import { CreateButtonXModal } from "./CreateButtonForModal.js";
import { useExpandProps } from '../WaiterContext';
import { EditButtonXModal } from './EditButtonForModal.js';


function FormWaiterModal({ title, setTitle }) {

    const {
        setOpenModal,
    } = useExpandProps();


    const [nameProd, setNameProd] = useState("");
    const [priceProd, setPriceProd] = useState("");
    const [linkImage, setLinkImage] = useState("");
    const [typeProduct, setTypeProduct] = useState("");

    const onChangeName = (e) => {
        setNameProd(e.target.value)
    }
    const onChangePrice = (e) => {
        setPriceProd(e.target.value)
    }
    const onChangeImage = (e) => {
        setLinkImage(e.target.value)
    }
    const onChangeType = (e) => {
        setTypeProduct(e.target.value)
    }

    const infoData = {
        "name": nameProd,
        "price": priceProd,
        "image": linkImage,
        "type": typeProduct,
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section>
            <div className="modalHeader">
                <h2>{title} Producto</h2>
            </div>
            <form onSubmit={onSubmit}>
                <h4>Nombre del producto:</h4>
                <input className="name" onChange={onChangeName} value={nameProd}></input>
                <h4>Precio:</h4>
                <input className="price" value={priceProd} onChange={onChangePrice}></input>
                <h4>Imagen:</h4>
                <input className="image" placeholder="Inserta el link de la imagen de tu producto" value={linkImage} onChange={onChangeImage}></input>
                <article className="selectSection">
                    <h4>Tipo de producto</h4>
                    <select className="selectType" onChange={onChangeType}>
                        <option>Selecciona</option>
                        <option>Desayuno</option>
                        <option>Almuerzo</option>
                    </select>
                </article>
                <br></br>
                {
                    (title === "Crear" &&
                        <CreateButtonXModal
                            infoData={infoData} />) ||
                    (title === "Editar" &&
                        <EditButtonXModal
                            infoData={infoData} />)

                }
                <button type="button" className="modalButtons" onClick={() => setOpenModal(false)}>Cancelar</button>
            </form>

        </section>
    )
}
export { FormWaiterModal };