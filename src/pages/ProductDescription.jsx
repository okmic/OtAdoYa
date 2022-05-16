
import '../App.css'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import NavBar from '../components/NavBar/NavBar'
import Product from '../components/Products/Product'

export default function ProductDescription() {

    return <>
        <Header />
        <div className="wrapperMain">
            <NavBar />
            <Product />
            <Basket />
        </div>

    </>
}