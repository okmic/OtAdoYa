
import '../App.css';
import Basket from '../components/Basket/Basket';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import Products from '../components/Products/Products';

export default function Main() {

    return <>
        <Header />
        <div className="wrapperMain">
            <NavBar />
            <Products />
            <Basket />
        </div>

    </>
}