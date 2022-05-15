import styles from './nav.module.css'

const data = [
    {title: 'Печенье', func: (callback, key) => callback(key)},
    {title: 'Вафли', func: (callback, key) => callback(key)},
    {title: 'Пряники', func: (callback, key) => callback(key)},
    {title: 'Шоколад в плитках', func: (callback, key) => callback(key)},
    {title: 'Конфеты в коробках', func: (callback, key) => callback(key)},
    {title: 'Зефир', func: (callback, key) => callback(key)},
    {title: 'Мармелад', func: (callback, key) => callback(key)},
    {title: 'Бисквиты', func: (callback, key) => callback(key)},
    {title: 'Шоколадные батончики', func: (callback, key) => callback(key)},
    {title: 'Конфеты фасованные', func: (callback, key) => callback(key)}
]

const Item = ({title, func}) => {

    const handleSubmit = () => {
        func(() => alert('click: ' + title) ,title)
    }

    return <span onClick={handleSubmit}>{title}</span>
}

export default function Filters () {
    return <div className={styles.filters}>
        <h3>Кодитерские изделия</h3>

        <div className={styles.boxItems}>
            {data.map((index) => <Item key={index.title} title={index.title} func={index.func} /> )}
        </div>

    </div>
}