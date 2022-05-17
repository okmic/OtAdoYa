import ContainerBasket from "../components/Basket/ContainerBasket";
import '../App.css'
import Header from "../components/Header/Header";


export default function BasketPage () {

    return <>
        <Header />
        <div className="wrapperMain">
            <ContainerBasket />
        </div>
    </>
}