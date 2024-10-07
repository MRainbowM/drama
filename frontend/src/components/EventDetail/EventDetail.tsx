import styles from './EventDetail.module.scss'
import Image from 'next/image'
import { components } from '../../api/schema'

interface EventDetailProps {
    data: components['schemas']['EventOutSchema']
}


export default function EventDetail({ data }: EventDetailProps) {
    console.log(data)
    const intermission = data.has_intermission === true ? 'с антрактом': 'без антрактов'
    const min_age_limit = data.min_age_limit > 0 ? `, ${data.min_age_limit}+`: ''
    const duration = data.duration.slice(1)

    return (<>
        <div className={styles.eventHeader}>
            <Image
                className={styles.eventCover}
                src={data.cover}
                width={500}
                height={500}
                alt={data.name}
            />
            <h1>{data.name}</h1>
        </div>

        <div className={styles.eventSubHeader}>
            <span className={styles.eventShortDescription}>{data.short_description}{min_age_limit}</span>
            <span>{duration}, {intermission}</span>
        </div>

        <div>

        </div>

    </>)
}