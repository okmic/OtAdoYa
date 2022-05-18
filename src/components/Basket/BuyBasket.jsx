import { useSelector } from "react-redux"
import styles from './basket.module.css'

const Check = ({ data, setSendBuy }) => <div className={styles.bayBasket}>
    <h2>Способ оплаты: Безналичный</h2>
    <h2>Имя:  {data.user}</h2>
    <h2>Дата Рождения: {data.userDate}</h2>
    <h2>Телефон: {data.phone}</h2>
    <h2>Email: {data.email}</h2>
    <h2>Город: {data.city}</h2>
    <h2>Адрес достаки: {data.deliveryAddress}</h2>
    <h2>Время доставки: {data.timeDelivery}</h2>
    <div className="button">
        <button onClick={() => setSendBuy(true)}>Отправить</button>
    </div>
</div>



export default function BuyBasket({setSendBuy}) {

    const data = useSelector((state) => state.pastry.buyer)

    return <Check data={data} setSendBuy={setSendBuy} />
}