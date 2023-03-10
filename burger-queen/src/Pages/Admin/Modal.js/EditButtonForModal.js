import { useExpandProps } from "../AdminContext";


const EditButtonXModal = ({infoData}) => {
      
    const { 
        setOpenModal,
        EditRequest,
        idProduct,
    } = useExpandProps();

    const editProducts = (infoData) => {
        EditRequest(infoData, idProduct);
        setOpenModal(false);
    }

    return (
        <button type="submit" className="modalButtons" onClick={() => {editProducts(infoData)}}>Actualizar</button>
    )
}

export { EditButtonXModal }