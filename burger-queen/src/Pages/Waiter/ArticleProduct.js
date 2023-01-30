import { useExpandProps } from './WaiterContext';
//import { useState } from 'react';
import { ShowProductList } from './ProductList';

const ArticleProduct = () => {
    let data = useExpandProps();
    data = data.productItem;

    <ShowProductList />


    /*const [prodsFiltered, setProdsFiltered] = useState(data);

    const handleTypeMenu = (e) => {
        setTypeMenu(e.target.value);
        const newData = data.filter((product)=>{
            let leakedData = (product.type.includes(typeMenu));
            return leakedData;
        });
        console.log("Toma tu array", newData);
        return newData;
    };
    */




    console.log(data);



    return (
        <>
            {data.map(element => (
                <article key={element.id} className='product'>
                    <img alt="" src={element.image} className="imageXproduct"></img>
                    <p className="infoProduct">{element.name}</p>
                    <p className="infoProduct"></p>
                    <p className="infoProduct">{element.price}</p>
                    <button className="takeIt">+</button>
                </article>))}

        </>

    )
}

export default ArticleProduct;