import { Item } from './ItemProduct'
import styles from './products.module.css'
import { useSelector } from 'react-redux'


export default function Products() {

    const data = useSelector((state) => state.pastry.products)

    return <div className={styles.wrapper}>
        <div className={styles.title}>Кондитерские изделия</div>
        <div className={styles.products}>
            {data.map((item) => <Item key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)}
        </div>
    </div>
}