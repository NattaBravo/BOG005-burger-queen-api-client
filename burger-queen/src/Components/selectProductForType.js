import { usePropsFromWaiter } from "../Pages/Waiter/WaiterContext";
import { Link } from "react-router-dom";


const SelectProductForType = () => {


    const { typeMenuWaiter, setTypeMenuWaiter, productsByType } = usePropsFromWaiter();


    console.log(productsByType, "desde el main")

    const goToTakingLunchOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }

    const goToTakingBreakfastOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }


    return (
        <>
            <article
                className="breakfast"
                onClick={goToTakingBreakfastOrder}
                typemenuwaiter={typeMenuWaiter}
            >
                <Link className="breakfastImage" value="Desayuno" typemenuwaiter={typeMenuWaiter} onClick={goToTakingBreakfastOrder} to="/Breakfast">
                </Link>
                <Link className="breakfastTitle" value="Desayuno" typemenuwaiter={typeMenuWaiter} onClick={goToTakingBreakfastOrder} to="/Breakfast">
                </Link>
            </article>

            <article
                className="lunch"
                onClick={goToTakingLunchOrder}
                value="Almuerzo"
                typemenuwaiter={typeMenuWaiter}>
                <Link className="lunchTitle" value="Almuerzo" typemenuwaiter={typeMenuWaiter} onClick={goToTakingLunchOrder} to="/Lunch">
                </Link>
                <Link className="lunchImage" value="Almuerzo" typemenuwaiter={typeMenuWaiter} onClick={goToTakingLunchOrder} to="/Lunch">
                </Link>
            </article>
        </>
    )
}

export { SelectProductForType }