const CardsForProducts = () => {



    let productsByType = useExpandProps();
    productsByType = productsByType.data;

    console.log(productsByType, typeof (productsByType));

}

export { CardsForProducts }