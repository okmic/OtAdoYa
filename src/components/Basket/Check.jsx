import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBuyer, remove } from '../../redux/pastry'
import styles from './basket.module.css'
import { AiFillCloseCircle } from 'react-icons/ai'

export const Item = ({ value, input }) => <div className="dfa m1 p1">
    <span>{value + ":"} </span>
    <input {...input} type="text" className={styles.infoPhone} />
</div>


export const InfoBlock = ({ title, children }) => <div className={styles.infoBox}>
    <div className={styles.boxInfoTitle}>
        <h3>{title}</h3>
    </div>
    {children}
</div>

export default memo(function Check({ phone, email, city, user, userDate, timeDelivery, deliveryAddress, setOrder }) {

    const data = useSelector((state) => state.pastry.basket)
    const [total, setTotal] = useState(0)
    

    useEffect(() => {
        setTotal(0)
        data.forEach(item => {
            setTotal((prev) => prev + item.price)
        })
    }, [data])

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(addBuyer({
            phone: phone.value,
            email: email.value,
            city: city.value,
            user: user.value,
            userDate: userDate.value,
            timeDelivery: timeDelivery.value,
            deliveryAddress: deliveryAddress.value
        }))
        setOrder(true) 
    }

    return <>
        <div className={styles.infoContainer}>
            <InfoBlock title="Ваши данные">
                <Item value="Ваш телефон" input={phone} />
                <Item value="Ваш email" input={email} />
            </InfoBlock>

            <InfoBlock title="Информация о заказчике ">
                <Item value="Город" input={city} />
                <Item value="Фамилия, Имя" input={user} />
                <Item value="Дата Рождения" input={userDate} />
                <Item value="Время доставки" input={timeDelivery} />
                <Item value="Адрес доставки" input={deliveryAddress} />
            </InfoBlock>

            <InfoBlock title="Дополнительная информация ">
                <div className="dfa m1 p1">
                    <input type="checkbox" className={styles.infoPhone} />
                    <span> SMS-информирование (бесплатно) </span>
                </div>
                <div className="dfa m1 p1">
                    <input type="checkbox" className={styles.infoPhone} />
                    <span>Информировать через Viber <br /> WhatsApp (бесплатно)</span>
                </div>
                <div className="dfd m1 p1" style={{ alignItems: 'flex-start', width: '90%' }}>
                    <span>Комментарий к заказу</span>
                    <textarea type="text" className={styles.infoPhone} />
                </div>
            </InfoBlock>
        </div>

        <div className={styles.dataContainer}>
            <InfoBlock title="Ваша Корзина">
                <div className="dfd m1 p1" style={{ alignItems: 'flex-start', width: '90%' }}>
                    {data.map((item, index) => <div key={index} className={styles.boxBasket}>
                        <span>
                            {"№" + (index + 1) + "   " + item.title + " = " + item.price + "   "}
                            <button style={{ border: 'none', backgroundColor: '#fff', cursor: 'pointer' }} onClick={() => dispatch(remove(index))}><AiFillCloseCircle color='red' fontSize={25} /></button>
                        </span>

                    </div>)}
                </div>
            </InfoBlock>

            <div className="dfd m1 p1" style={{ alignItems: 'flex-start', width: '90%', backgroundColor: '#fff' }}>
                    <div className="dfd m1 p1" style={{ alignItems: 'flex-start', width: '90%' }}>
                        <h2>Способ оплаты</h2>
                        <select name="pets" id="pet-select">
                            <option value="Безналичный">Безналичный</option>
                            <option value="Наличными">Наличными</option>
                        </select>
                            <h3>Стоимость товаров: {total} руб.</h3>
                            <h3>Стоимость доставки</h3>
                            <h2>Итого: {total} руб.</h2>
                        <div className="button">
                            <button onClick={handleSubmit}>Проверить</button>
                        </div>
                    </div>


            </div>
        </div>
    </>
})
