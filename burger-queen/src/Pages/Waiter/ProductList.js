//import { useState } from "react";
//import { useExpandProps } from './WaiterContext';
//import ArticleProduct from './ArticleProduct';

function ShowProductList () {

    const handleTypeMenu = (e) => {
        const typeMenu = e.target.value;
        return typeMenu;
       /* const newData = data.filter(function(product) {
            console.log("Miercoles", newData);
            return(product.type).includes(typeMenu);
        });
        console.log("Toma tu array", newData);
        return newData;*/
    };
    

    return (
        <>
            <nav>
                <button
                    alt=""
                    className='breakfastButton'
                    value="Desayunos"
                    onClick={handleTypeMenu}>
                    Desayunos
                </button>
                <button
                    alt=""
                    className='lunchButton'
                    value="Almuerzos"
                    onClick={handleTypeMenu}>
                    Almuerzos
                </button>
            </nav>
        </>
    )
}

export { ShowProductList };