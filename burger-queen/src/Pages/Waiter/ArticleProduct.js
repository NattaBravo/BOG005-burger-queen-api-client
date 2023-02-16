import { useExpandProps } from './WaiterContext';


const ArticleProduct = () => {
    let data = useExpandProps();
    data = data.data;

    console.log(data, typeof(data));

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