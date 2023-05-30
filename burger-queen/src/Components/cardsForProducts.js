import '../Css/cards.css';

const CardsForProducts = (unitProduct) => {

    console.log(unitProduct.unitProduct.name)

    const data = unitProduct.unitProduct




    return (
        <section className='card'>

            <article className='imageCard'>
                <img alt="" src={data.image} className="imageForProduct"></img>
            </article>
            <h2>{data.name}</h2>
        </section>
    )
}

export { CardsForProducts }