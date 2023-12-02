import '../Css/cards.css';

const CardsForProducts = (unitProduct) => {

    console.log(unitProduct.unitProduct.name)

    const data = unitProduct.unitProduct

    return (

        <article className='card'>

            <article className='imageCard'>
                <img alt="" src={data.image} className="imageForProduct"></img>
            </article>
            <h5 className='productDescription'>{data.name}</h5>
            <h4 className='price'>$ {data.price}</h4>
            <article className='selector'>
                <button></button>
                <p className='counter'></p>
                <button></button>
            </article>
        </article>
    )
}

export { CardsForProducts }