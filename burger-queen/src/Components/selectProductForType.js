import { Link } from "react-router-dom";

const SelectProductForType = (props) => {


    const productData = props.productItem;

    return (
        <>
            <article
                className="breakfast"
            >
                <Link className="breakfastImage" to="breakfast">
                </Link>
                <Link className="breakfastTitle" to="breakfast">
                </Link>
            </article>

            <article
                className="lunch"
                >
                <Link className="lunchTitle" to="lunch">
                </Link>
                <Link className="lunchImage" to="lunch">
                </Link>
            </article>
        </>
    )
}

export { SelectProductForType }