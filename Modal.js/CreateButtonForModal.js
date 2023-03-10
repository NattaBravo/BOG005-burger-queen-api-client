import { useExpandProps } from "../WaiterContext";

const CreateButtonXModal = ({infoData}) => {
    
    const { 
        setOpenModal,
        AddRequest
    } = useExpandProps();

    const addProducts = (infoData) => {
        AddRequest(infoData)
        setOpenModal(false);
    }

    return (
        <button type="submit" className="modalButtons" onClick={() => {addProducts(infoData)}}>Guardar</button>
    )
}

export { CreateButtonXModal }