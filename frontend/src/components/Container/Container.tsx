import styles from './Container.module.scss'
import Header from '../Header/Header'
import Event from '../Event/Event'

export default function Container() {
    return (
        <div className={styles.container}>
            <Header />
            <Event />
            
        </div>
    )
}