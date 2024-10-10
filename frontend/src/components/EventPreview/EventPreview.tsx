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
            <div className={styles.date}>
                <span>{eventDate}</span>
            </div>

            <div className={styles.previewCover}>
                <Image
                    src={data.event.preview_cover}
                    width={500}
                    height={500}
                    alt={data.event.name}
                />
            </div>

            <div className={styles.info}>
                <Link
                    className={styles.title}
                    href={`/event/${data.event.slug}`}
                >
                    <span>{data.event.name}</span>
                </Link>

                <span>{data.event.short_description}</span>

                {
                    data.is_premiere ? (
                        <span className={styles.premier}>премьера</span>
                    ) : (<></>)
                }

            </div>
        </div>
    )
}