import { useEffect } from 'react'
import styles from './modal.module.css'

export default function Modal ({callback, children}) {

     useEffect(() => {
        const time = setTimeout(() => {
            callback()
        }, 5000)

        return () => clearTimeout(time)
    }, []) 

    return <div className={styles.wrapper} onClick={callback}>
                <div className={styles.container}>
                    {children}
                </div>
    </div>

}