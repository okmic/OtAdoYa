
import '../App.css'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import Product from '../components/SingleProduct/Product'

export default function ProductDescription() {

    return <>
        <Header />
        <div className="wrapperMain">
            <Product />
            <Basket />
        </div>
    </>
}