import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import useInput from "../../hooks/useInput"
import { addReviews } from "../../redux/pastry"
import styles from './nav.module.css'

const Item = ({user, title}) => {
    return <div className={styles.feedback}>
        <h5>{user}</h5>
        <span>{title}</span>
    </div>
} 

export default function Feedback () {

    const disptach = useDispatch()
    const reviews = useSelector((state) => state.pastry.reviews)
    const name = useInput('')
    const title = useInput('')
    const [order, setOrder] = useState(false)

    const handleSubmit = () => {
        if(name.value.length <= 0 || title.value.length <= 0) {
            return
        } else {
            disptach(addReviews({id: reviews.length, user: name.value, title: title.value}))
            setOrder(false)
            name.onChange()
            title.onChange()
        }
    }


    return <div className={styles.filters}>
        <Link to="/OtAdoYa/reviews"><h3>Отзывы о работе</h3></Link>
        {reviews.map((item, index) => <Item key={index} user={item.user} title={item.title} /> )}
        {!order 
        ?<button onClick={() => setOrder(true)}>Добавить отзыв</button>
        : <>
        <input placeholder="Имя" type="text" {...name} />
        <input placeholder="Отзыв" type="text" {...title} />
        <button onClick={handleSubmit}>Записать</button>
        </>
        }
    </div>
} 