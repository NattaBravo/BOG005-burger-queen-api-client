//import { WaiterContext } from "../WaiterContext";
import { useState } from 'react';

function FormWaiterModal() {
    /*
        const [newTodoValue, setNewTodoValue] = useState("")
    
        const { 
            setOpenModal,
            addTodos,
    
        } = useContext(TodoContext);
    
        const onChange = (event) => {
            setNewTodoValue(event.target.value)
            console.log(setNewTodoValue)
        }
    
        const onSubmit = (event) => {
            event.preventDefault();
            addTodos(newTodoValue);
            setOpenModal(false);
        }
    */

        const [ name, setName ] = useState("");
        const [ price, setPrice ] = useState("");
        const [ linkImage, setLinkImage ] = useState("");
       // const [ typeProduct, setTypeProduct ] = useState("");

        const onChangeName = (e) =>{
            setName(e.target.value)
            console.log(setName(e.target.value))
        }
        const onChangePrice = (e) =>{
            setPrice(e.target.value)
            console.log(setPrice(e.target.value))
        }
        const onChangeImage = (e) =>{
            setLinkImage(e.target.value)
            console.log(setLinkImage(e.target.value))
        }

    return (
        <section>
            <div className="modalHeader">
                <h2>Crear Producto</h2>
            </div>
            <form>
                <h4>Nombre del producto:</h4>
                <input className="name" onChange={onChangeName} value={name}></input>
                <h4>Precio:</h4>
                <input className="price" value={price} onChange={onChangePrice}></input>
                <h4>Imagen:</h4>
                <input className="image" placeholder="Inserta el link de la imagen de tu producto" value={linkImage} onChange={onChangeImage}></input>
                <article className="selectSection">
                    <h4>Tipo de producto</h4>
                    <select className="selectType">
                        <option>Desayuno</option>
                        <option>Almuerzo</option>
                    </select>
                </article>
                <br></br>
                <button type="submit" className="modalButtons">Guardar</button>
                <button type="button" className="modalButtons">Cancelar</button>
            </form>

        </section>
    )
}
export { FormWaiterModal };