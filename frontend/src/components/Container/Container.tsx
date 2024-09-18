import styles from './Container.module.scss'
import Header from '../Header/Header'

export default function Container() {
    return (
        <div className={styles.container}>
            <Header />
        </div>
    )
}