import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import styles from './basket.module.css'
import {GiBasket} from 'react-icons/gi'

export default function Basket () {

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
        <GiBasket />
        {
        state 
        ? state.map( (item, index) =>  <div className={styles.item} key={index}>
                <span>
                {index + 1 + " " + item.title}
            </span>
            <br />
                <h1>
                    {item.price + " руб."}
                </h1>
            </div>
        ).reverse()
        : ''
    }
    
    </div>
}