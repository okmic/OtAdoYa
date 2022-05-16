
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Item } from './ItemProduct'


export default function Product() {

    const param = useParams()

    const data = useSelector((state) => state.pastry.products)

    return <div>
        {
        data.filter((item) => {
            if (String(item.id) === param.id) {
                return item
            }
        }).map((item) => <Item key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)}
    </div>
}