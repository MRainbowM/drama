import { components } from '../../api/schema'
import styles from './EventPeople.module.scss'

interface EventPeopleProps {
    data: components['schemas']['EventPeopleOutSchema']
}

export default function EventPeople({ data }: EventPeopleProps) {
    return (
        <div className={styles.eventPeopleRow}>
            <span className={styles.eventPeopleRole}>{data.role}</span>
            <span className={styles.eventPeopleName}>{data.people.first_name} {data.people.last_name}</span>
        </div>
    )
}