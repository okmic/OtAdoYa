import styles from './modal.module.css'
import {AiTwotonePhone, AiOutlineMail} from 'react-icons/ai'

export default function BodyModal () {

    return <div className={styles.bodyWrapper}>
        <h2>По всем вопросам обращаться: </h2>
        <h3>Мусурманкулов Зафар Куваталыевич</h3>
        <div className="dfc">
            <AiTwotonePhone />
                <a href="tel:+78782210133">+7 (8782) 21‒01‒33</a>

        </div>
        <div className="dfc">
            <AiOutlineMail />
                <a href="mailto:test@test.ru">test@test.ru</a>
        </div>
        <h2>Город Черкесск</h2>
        <h5>Октябрьская улица, 2а</h5>
    </div>
}