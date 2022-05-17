import Filters from './Filters'
import styles from './nav.module.css'
/* import pay from '../../img/pay.png' */
import Feedback from './Feedback'

/* const Pay = () => <div className={styles.itemPay}>
    <h5>Мы принимаем</h5>
    <img src={pay} alt="123" />
</div> */

export default function NavBar() {
    return <div className={styles.wrapper}>
{/* <Pay /> */}
        <Filters />
        <Feedback />
    </div>
}