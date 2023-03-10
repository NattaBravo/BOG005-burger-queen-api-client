import { useExpandProps } from './AdminContext';
import deleteIcon from '../../Resources/delete.png';
import editIcon from '../../Resources/edit.png'


const ArticleProduct = () => {
    let data = useExpandProps();
    data = data.data;

    console.log(data, typeof(data));

    const {
        setOpenModal,
        title,
        setTitle,
        idProduct, 
        setIdProduct,
        DeleteRequest
    } = useExpandProps();

    const editFunction = (element) => {
        setTitle("Editar")
        setOpenModal(true)
        setIdProduct(element.id);
    }

    const deleteFunction = (element) => {
        alert("¿Estas seguro que deseas eliminar este producto?");
        setIdProduct(element.id);
        DeleteRequest(element.id)
    }

    return (
        <>
            {data.map(element => (
                <article key={element.id} className='product'>
                    <img alt="" src={element.image} className="imageXproduct"></img>
                    <p className="infoProduct">{element.name}</p>
                    <p className="infoProduct"></p>
                    <button 
                    className="takeIt"
                    >+</button>
                    <p className="infoProduct">{element.price}</p>
                    <button className='buttonCRUDStyle' onClick={() => editFunction(element)} title={title} idProduct={idProduct}>
                        <img src={editIcon} className="iconCRUD" alt=""></img>
                    </button>
                    <button className='buttonCRUDStyle' onClick={() => deleteFunction(element)} idProduct={idProduct}>
                            <img src={deleteIcon} className="iconCRUD" alt=""></img>
                    </button>
            </article>))}
        </>

    )
}

export default ArticleProduct;