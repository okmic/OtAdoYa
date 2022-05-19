import styles from './products.module.css'
import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { add } from '../../redux/pastry'

export const Item = memo(({ id, img, title, price }) => {

    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(add({ id, img, title, price }))
    }

    return <div className={styles.productItem}>
        <Link to={`/OtAdoYa/${id}`} >
            <img src={img} alt={title} />
        </Link>
        
        <h3>{title}</h3>
        <h4>{price + " руб."}</h4>
        <div className='button'>
            <button onClick={handleSubmit}>заказать</button>
        </div>

    </div>
})