import styles from './header.module.css'

const data = [
    {title: 'Главная', url: '/'},
    {title: 'Отзывы', url: '/'},
    {title: 'Оплата', url: '/'},
    {title: 'Доставка', url: '/'},
    {title: 'О нас', url: '/'},
    {title: 'Контакты', url: '/'},
]

const ItemOne = () => <div className={styles.itemOne}>
    <h3>ИП Бровков Г.Е.</h3>
</div>

const ItemTwo = () => <div className={styles.itemTwo}>
    <h2>Конфеты Оптом</h2>
    <h4>Оптово-розничная продажа</h4>
    <h4>кондитерскими изделиями</h4>
</div>

const ItemThree = () => <div className={styles.itemTwo}>
    <h1> 8 800 123 1234</h1>
    <h5>Звонки с мобильных и городских бесплатный</h5>
    <div className={styles.itemButtons}>
        <button>Статус заказа</button>
        <button>Заказать звонков</button>
    </div>
</div>

const Nav = () => {
    return <nav className={styles.navWrapper}>
         {data.map(item => <span key={item.title}>{item.title}</span>)}
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

