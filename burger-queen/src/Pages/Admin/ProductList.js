import { useExpandProps } from "./AdminContext";


function ShowProductList () {

    const {typeMenu, setTypeMenu} = useExpandProps();

    const handleTypeMenu = (e) => {
        setTypeMenu(e.target.value);
        console.log(typeMenu)
        return setTypeMenu;
    };
    
    return (
        <>
            <nav>
                <button
                    alt=""
                    typemenu={typeMenu}
                    className='breakfastButton'
                    value="Desayuno"
                    onClick={handleTypeMenu}>
                    Desayunos
                </button>
                <button
                    alt=""
                    typemenu={typeMenu}
                    className='lunchButton'
                    value="Almuerzo"
                    onClick={handleTypeMenu}>
                    Almuerzos
                </button>
            </nav>
        </>
    )
}

export { ShowProductList };