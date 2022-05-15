import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from './basket.module.css'

export default function Basket () {

    const basket = useSelector((state) => state.pastry.basket)

    const [state, setState] = useState([])

    useEffect(() => {
        setState([...basket])
    }, [basket])
    return <div className={styles.wrapper}>
        {
        state &&
        state.map( (item, index) => <span key={item.index}>{item.title}</span>)
        }
    </div>
}