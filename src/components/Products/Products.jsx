import styles from './products.module.css'
import img from '../../img/pay.png'

const data = [
    {id: 1, img: img, title: 'Печение', price: 300},
    {id: 2, img: img, title: 'Пряник', price: 300},
    {id: 3, img: img, title: 'Зефир', price: 300},
    {id: 4, img: img, title: 'Шиколад', price: 300},
    {id: 5, img: img, title: 'Конфеты', price: 300},
]

const Item = ({img, title, price}) => <div className={styles.productItem}>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <h4>{price + " руб."}</h4>
    <button>заказать</button>
</div>

export default function Products () {
    return <div className={styles.wrapper}>
        <div className={styles.title}>Кондитерские изделия</div>
        <div className={styles.products}>
            {data.map((item, index) => <Item key={index} img={item.img} title={item.title} price={item.price}  />)}
        </div>
    </div>
}