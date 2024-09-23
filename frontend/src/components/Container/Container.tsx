import styles from './Container.module.scss'
import Header from '../Header/Header'
import EventList from '../EventList/EventList'

export default function Container() {
    return (
        <div className={styles.container}>
            <Header />
            <EventList />
            
        </div>
    )
}