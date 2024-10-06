import Link from 'next/link'
import { components } from '../../api/schema'
import styles from './EventShow.module.scss'
import Image from 'next/image'

interface EventShowProps {
    data: components['schemas']['EventShowSchema']
}

export default function EventShow({ data }: EventShowProps) {
    let eventShowDate = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(data.start_at))
    eventShowDate = eventShowDate.replace('.', '')

    return (
        <div className={styles.event}>
            <div className={styles.eventDate}>
                <span>{eventShowDate}</span>
            </div>

            <div className={styles.eventCover}>
                <Image
                    src={data.event.cover}
                    width={500}
                    height={500}
                    alt={data.event.name}
                />
            </div>

            <div className={styles.eventInfo}>
                <Link
                    className={styles.eventTitle}
                    href={`/event/${data.event.slug}`}
                >
                    <span>{data.event.name}</span>
                </Link>
                <div>
                    <span>{data.event.short_description}</span>
                </div>
            </div>
        </div>
    )
}