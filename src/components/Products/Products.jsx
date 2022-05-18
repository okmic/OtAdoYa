import { Item } from './ItemProduct'
import styles from './products.module.css'


export default function Products({products}) {

    return <div className={styles.wrapper}>
        <div className={styles.title}>Кондитерские изделия</div>
        <div className={styles.products}>
            {products.map((item) => <Item key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} />)}
        </div>
    </div>
}