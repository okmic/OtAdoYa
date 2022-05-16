import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from './basket.module.css'

export default function Basket () {

    const basket = useSelector((state) => state.pastry.basket)

    const [state, setState] = useState([])

    useEffect(() => {
        setState([...basket])
    }, [basket])

    return <div className={state.length > 0 ? styles.wrapper : ''}>
        {
        state &&
        state.map( (item, index) =>  <div className={styles.item} key={index}>
                <span>
                {index + 1 + " " + item.title}
            </span>
            <br />
                <h1>
                    {item.price + " руб."}
                </h1>
            </div>
        )
        }
    </div>
}