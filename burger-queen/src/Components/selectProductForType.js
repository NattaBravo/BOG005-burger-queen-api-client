import { useEffect } from "react";
import { usePropsFromWaiter } from "../Pages/Waiter/WaiterContext";
import { useNavigate} from "react-router-dom";

const SelectProductForType = () => {


    const { typeMenuWaiter, setTypeMenuWaiter, productsByType } = usePropsFromWaiter();


    console.log(productsByType, "desde el main")

    const navigate = useNavigate();

    const OrdersBreakfastPage = "/breakfast/:productsByType"
    const OrdersLunchPage = "/lunch"


    const goToTakingLunchOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }

    const goToTakingBreakfastOrder = (e) => {
        setTypeMenuWaiter(e.target.value);
        return setTypeMenuWaiter;
    }


    useEffect(() =>{ 
    
        typeMenuWaiter === "Desayuno" && navigate(OrdersBreakfastPage);
        typeMenuWaiter === "Almuerzo" && navigate(OrdersLunchPage);

    }, [typeMenuWaiter, navigate])

    

    return (
        <>
            <article
                className="breakfast"
                onClick={goToTakingBreakfastOrder}
                typemenuwaiter={typeMenuWaiter}>
                <button className="breakfastImage" value="Desayuno" typemenuwaiter={typeMenuWaiter} onClick={goToTakingBreakfastOrder}>
                </button>
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