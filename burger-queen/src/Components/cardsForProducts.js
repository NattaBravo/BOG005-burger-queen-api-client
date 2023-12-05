import '../Css/cards.css';

const CardsForProducts = (props) => {


    const data = props.unitProduct

    return (

        <article className='card' onClick={() => props.onOrder()}>


            <article className='imageCard'>
                <img alt="" src={data.image} className="imageForProduct"></img>
            </article>
            <h5 className='productDescription'>{data.name}</h5>
            <h4 className='price'>$ {data.price}</h4>
            <article className='selector'>
                <button>-</button>
                <p className='counter'>{data.counter}</p>
                <button>+</button>
            </article>

        </article>
    )
}

export { CardsForProducts }