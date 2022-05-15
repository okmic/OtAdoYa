import { useState } from "react"
import styles from './nav.module.css'

const Item = ({user, title}) => {
    return <div className={styles.feedback}>
        <h5>{user}</h5>
        <span>{title}</span>
    </div>
} 

export default function Feedback () {

    const [state, setState] = useState([
        {user: 'Michael', title: 'test'}
    ])

    return <div className={styles.filters}>
        <h3>Отзывы о работе</h3>
        {state.map((item, index) => <Item key={index} user={item.user} title={item.title} /> )}
        <button onClick={() => setState([...state, {user: 'Michael', title: 'test'}])}>Добавить отзыв</button>
    </div>
} 