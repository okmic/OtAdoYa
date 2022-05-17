import { memo } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import styles from './basket.module.css'
import Check from './Check'



const Header = () => <div className='dfc'>
    <span className={styles.navHeader + " " + styles.navActive}>Оформление заказа</span>
    <span className={styles.navHeader}>Проверка и оплата</span>
</div>



export default memo(function ContainerBasket() {

    const data = useSelector((state) => state.pastry.basket)

    const phone = useInput('')
    const email = useInput('')
    const city = useInput('')
    const user = useInput('')
    const userDate = useInput('')
    const timeDelivery = useInput('')
    const deliveryAddress = useInput('')

    if (data.length <= 0) {
        return <div className={styles.cartEmpty}>
            Корзина пуста
            <Link to='/dip_pastry_shop' className='button'>
                <button>Вернуться назад</button>
            </Link>
        </div>
    }

    return <div className={styles.wrapperBC}>
        <Header />

        <div className={styles.boxContent}>
            <Check phone={phone} email={email} city={city} user={user} userDate={userDate} timeDelivery={timeDelivery} deliveryAddress={deliveryAddress} />
        </div>
    </div>

})