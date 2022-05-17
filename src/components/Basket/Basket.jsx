import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from './basket.module.css'
import { GiBasket } from 'react-icons/gi'
import { Link } from "react-router-dom"


const Icon = ({ amount }) => {

    return <div className={styles.amountWrapper}>
        {amount >= 1 && <span className={styles.amount} style={{ fontSize: '13px' }}>{amount}</span>}
        <GiBasket color="rgb(162, 89, 57)" size={35} />
    </div>
}


export default function Basket() {

    const basket = useSelector((state) => state.pastry.basket)

    const [state, setState] = useState([])

    useEffect(() => {
        setState([...basket])
    }, [basket])

    useEffect(() => {
        const time = setTimeout(() => {
            setState([])
        }, 3000)

        return () => clearTimeout(time)
    }, [state]) 

    return <div className={styles.wrapper}>
        <Link to="/dip_pastry_shop/basket">
            <Icon amount={basket.length} />
            <div className={styles.wrapperItem}>
                {
                    state && state.slice(-1).map((item, index) => <div className={styles.item} key={index}>
                        <div className="dfc">
                            <img src={item.img} alt={item.title} />
                            <h5>
                                {item.title}
                            </h5>
                        </div>
                        <br />
                        <div className="dfd">
                        <h5>
                            Товар добавлен в корзину
                        </h5>
                        <h1>
                            {item.price + " руб."}
                        </h1>
                        </div>
                    </div>

                    ).reverse()
                }
            </div>
        </Link>
    </div>
}