import { useNavigate } from "react-router-dom";
import { usePropsFromWaiter } from "../Pages/Waiter/WaiterContext";
import { useEffect } from "react";

const SelectProductForType = () => {

    const navigate = useNavigate();

    const OrdersLunchPage = "/lunch"
    const OrdersBreakfastPage = "/breakfast"

    const {typeMenuWaiter, setTypeMenuWaiter} = usePropsFromWaiter();


    const goToTakingLunchOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }

    const goToTakingBreakfastOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }

    console.log(typeMenuWaiter)

    useEffect(() => {
        if (typeMenuWaiter === "Desayuno") {
            navigate(OrdersBreakfastPage);
        } else if (typeMenuWaiter === "Almuerzo") {
            navigate(OrdersLunchPage);
        }
    }, [navigate, typeMenuWaiter])


    return (
        <>
            <article
                className="breakfast"
                onClick={goToTakingBreakfastOrder}
                value="Desayuno"
                typemenuwaiter={typeMenuWaiter}>
                <button className="breakfastImage" value="Desayuno" typemenuwaiter={typeMenuWaiter} onClick={goToTakingBreakfastOrder}></button>
                <button className="breakfastTitle" value="Desayuno" typemenuwaiter={typeMenuWaiter} onClick={goToTakingBreakfastOrder}>
                </button>
            </article>

            <article
                className="lunch"
                onClick={goToTakingLunchOrder}
                value="Almuerzo"
                typemenuwaiter={typeMenuWaiter}>
                <button className="lunchTitle" value="Almuerzo" typemenuwaiter={typeMenuWaiter} onClick={goToTakingLunchOrder}>
                </button>
                <button className="lunchImage" value="Almuerzo" typemenuwaiter={typeMenuWaiter} onClick={goToTakingLunchOrder}></button>
            </article>
        </>
    )
}

export { SelectProductForType }