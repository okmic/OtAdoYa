import styles from './nav.module.css'

const data = [
    {title: 'Печенье', category: 1},
    {title: 'Вафли', category: 2},
    {title: 'Пряники', category: 3},
    {title: 'Шоколад в плитках', category: 4},
    {title: 'Конфеты в коробках', category: 5},
    {title: 'Зефир', category: 6},
    {title: 'Мармелад', category: 7},
    {title: 'Бисквиты', category: 8},
    {title: 'Шоколадные батончики', category: 10},
    {title: 'Конфеты фасованные', category: 9},
    {title: 'Сбросить', category: 0}
]

const Item = ({title, category, setCategory}) => {

    const handleSubmit = () => {
        setCategory(category)
    }

    return <span style={{cursor: 'pointer'}} onClick={handleSubmit}>{title}</span>
}

export default function Filters ({setCategory}) {
    return <div className={styles.filters}>
        <h3>Кодитерские изделия</h3>

        <div className={styles.boxItems}>
            {data.map((item) => <Item key={item.title} title={item.title} category={item.category} setCategory={setCategory} /> )}
        </div>

    </div>
}