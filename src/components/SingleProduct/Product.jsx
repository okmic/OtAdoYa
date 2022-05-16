
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styles from './sing.prod.module.css'
import {FiTruck} from 'react-icons/fi'
import {AiFillLike} from 'react-icons/ai'
import { add } from "../../redux/pastry"

const Item = ({id, img, title, desc, price}) => {

    const dispatch = useDispatch()
    
    const handleSubmit = () => dispatch(add({id, img, title, desc, price}))

    return <div key={id} className={styles.item}>
    <div className={styles.box}>
        <img src={img} alt={title} />
        <div className={styles.bar}>
            <h2>{title}</h2>
            <div className={styles.price}>Цена</div>
            <h3 style={{color: 'brown', fontSize: '30px'}}>{price}</h3>
            <div className="button dfc" >
                <button onClick={handleSubmit}>Заказать</button>
            </div>
            <div className="button dfc" style={{backgroundColor: '#fff'}} >
                <button>Быстрый заказ</button>
            </div>
            <div className="dfc">
                <FiTruck fontSize={50} color="orange" style={{margin: '5px'}} />
                <div className="dfd">
                    <h3>Бесплатная доставка</h3>
                </div>
            </div>
            <div className="dfc">
                <AiFillLike fontSize={50} color="orange" style={{margin: '5px'}} />
                <div className="dfd">
                    <h3>Гарантия качества</h3>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.descr}>
        <h4>Состав:</h4>
        <br />
        <h5>{desc}</h5>
    </div>
    </div>
}


export default function Product() {

    const param = useParams()

    const data = useSelector((state) => state.pastry.products)

    return <div className={styles.wrapper}>
        {
            data
            .filter((item) => {
                if (String(item.id) === param.id) {
                    return item
                }})
            .map((item) => <Item key={item.id} {...item} />)}
    </div>
}