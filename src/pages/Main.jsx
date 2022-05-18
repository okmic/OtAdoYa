
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import Basket from '../components/Basket/Basket'
import Header from '../components/Header/Header'
import BodyModal from '../components/Modal/BodyModal'
import Modal from '../components/Modal/Modal'
import NavBar from '../components/NavBar/NavBar'
import Products from '../components/Products/Products'

export default function Main() {

    const data = useSelector((state) => state.pastry.products)

    const [products, setProducts] = useState(data)
    const [category, setCategory] = useState(0)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const time = setTimeout(() => {
            setModal(true)
        }, 1000)

        return () => clearTimeout(time)
    }, [])

    useEffect(() => {
        if(category === 0) {
            setProducts(data)
            return
        } else {
            setProducts(data.filter((item) => category === item.category))
        }
    }, [category])

    return <>
        {modal && <Modal callback={() => setModal(false)}><BodyModal /></Modal>}
        <Header />
        <div className="wrapperMain">
            <NavBar setCategory={setCategory} />
            <Products products={products} />
            <Basket />
        </div>

    </>
}