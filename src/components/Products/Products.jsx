import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../redux/pastry'
import styles from './products.module.css'


const Item = memo(({ id, img, title, price }) => {

    const dispatch = useDispatch()

    const handleSubmit = () => dispatch(add({ id, img, title, price }))

    return <div className={styles.productItem}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <h4>{price + " руб."}</h4>
        <div className={styles.productItemButton}>
            <button onClick={handleSubmit}>заказать</button>
        </div>

    </div>
})

export default function Products() {

    const data = useSelector((state) => state.pastry.products)

    return <div className={styles.wrapper}>
        <div className={styles.title}>Кондитерские изделия</div>
        <div className={styles.products}>
            {data.map((item) => <Item key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)}
        </div>
    </div>
}