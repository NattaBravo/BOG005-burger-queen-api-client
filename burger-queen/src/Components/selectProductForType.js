//import { usePropsFromWaiter } from "../Pages/Waiter/WaiterContext";
import { Link } from "react-router-dom";

const SelectProductForType = (props) => {


    const productData = props.productItem;

    console.log(productData, "desde los botones")

    productData.map(element => (console.log(element)))
    

    //const { typeMenuWaiter, setTypeMenuWaiter } = usePropsFromWaiter();
    /*

    const goToTakingLunchOrder = (e) => {
        console.log(e)
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }
    const goToTakingBreakfastOrder = (e) => {
        console.log(e.target.value)
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }
*/

    return (
        <>
            <article
                className="breakfast"
            >
                <Link className="breakfastImage" to="/Breakfast">
                </Link>
                <Link className="breakfastTitle" to="/Breakfast">
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