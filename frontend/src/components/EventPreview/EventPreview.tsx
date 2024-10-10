import Link from 'next/link'
import { components } from '../../api/schema'
import styles from './EventPreview.module.scss'
import Image from 'next/image'

interface EventPreviewProps {
    data: components['schemas']['EventShowOutSchema']
}

export default function EventPreview({ data }: EventPreviewProps) {
    let eventDate = new Intl.DateTimeFormat('ru-RU', {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
    }).format(new Date(data.start_at))
    eventDate = eventDate.replace('.', '')

    return (
        <div className={styles.event}>
            <div className={styles.eventDate}>
                <span>{eventDate}</span>
            </div>

            <div className={styles.eventCover}>
                <Image
                    src={data.event.preview_cover}
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