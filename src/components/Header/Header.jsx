import { Link } from 'react-router-dom'
import styles from './header.module.css'

const data = [
    {title: 'Главная', url: '/dip_pastry_shop'},
    {title: 'Отзывы', url: '/dip_pastry_shop/reviews'},
/*     {title: 'Оплата', url: '/dip_pastry_shop/basket'}, */
/*     {title: 'Доставка', url: '/dip_pastry_shop/basket'}, */
    {title: 'О нас', url: '/dip_pastry_shop/about'},
    {title: 'Контакты', url: '/dip_pastry_shop/contacts'},
]

const ItemOne = () => <div className={styles.itemOne}>
    <h3>ИП Тест Т.Т.</h3>
</div>

const ItemTwo = () => <div className={styles.itemTwo}>
    <h4>Оптово-розничная продажа</h4>
    <h4>кондитерскими изделиями</h4>
</div>

const ItemThree = () => <div className={styles.itemTwo}>
    <h1> 8 800 000 0000</h1>
    <h5>Звонки с мобильных и городских бесплатный</h5>
    <div className={styles.itemButtons}>
        <button>Статус заказа</button>
        <button>Заказать звонков</button>
    </div>
</div>

const Nav = () => {
    return <nav className={styles.navWrapper}>
         {data.map(item => <Link to={item.url} key={item.title}><span>{item.title}</span></Link>)}
    </nav>
}

export default function Header() {
    return <>
        <div className={styles.wrapper}>
            <ItemOne />
            <ItemTwo />
            <ItemThree />
        </div>
        <Nav />
    </>
}

