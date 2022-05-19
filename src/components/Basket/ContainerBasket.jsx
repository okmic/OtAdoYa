import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import styles from './basket.module.css'
import BuyBasket from './BuyBasket'
import Check from './Check'
import { AiOutlineFileDone } from 'react-icons/ai'


const Header = ({ order }) => <div className='dfc'>
    <span className={!order ? styles.navHeader + " " + styles.navActive : styles.navHeader}>Оформление заказа</span>
    <span className={order ? styles.navHeader + " " + styles.navActive : styles.navHeader}>Проверка и оплата</span>
</div>

const Ready = () => <div className={styles.ready}>
    <div className={styles.boxReady}>
        <AiOutlineFileDone color="green" size={50} />
        <h2>Отправлено</h2>
    </div>
</div>


export default memo(function ContainerBasket() {

    const data = useSelector((state) => state.pastry.basket)
    const [order, setOrder] = useState(false)
    const [sendBuy, setSendBuy] = useState(false)

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
            <Link to='/OtAdoYa' className='button'>
                <button>Вернуться назад</button>
            </Link>
        </div>
    }

    return <div className={styles.wrapperBC}>
        {!sendBuy
            ? <>
                <Header order={order} />

                <div className={styles.boxContent}>
                    {!order
                        ? <Check
                            phone={phone}
                            email={email}
                            city={city}
                            user={user}
                            userDate={userDate}
                            timeDelivery={timeDelivery}
                            deliveryAddress={deliveryAddress}
                            setOrder={setOrder} />
                        : <BuyBasket setSendBuy={setSendBuy} />
                    }
                </div>
            </>
            : <Ready />
        }
    </div>

})