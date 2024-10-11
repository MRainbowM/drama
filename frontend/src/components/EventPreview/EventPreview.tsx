import Link from 'next/link'
import { components } from '../../api/schema'
import styles from './EventPreview.module.scss'
import Image from 'next/image'

interface EventPreviewProps {
    event: components['schemas']['EventPreviewSchema'],
    is_premiere: boolean,
    tag: string
}

export default function EventPreview(
    { event, is_premiere, tag }: EventPreviewProps
) {
    return (
        <div className={styles.event}>
            <div className={styles.date}>
                <span>{tag}</span>
            </div>

            <div className={styles.previewCover}>
                <Image
                    src={event.preview_cover}
                    width={500}
                    height={500}
                    alt={event.name}
                />
            </div>

            <div className={styles.info}>
                <Link
                    className={styles.title}
                    href={`/event/${event.slug}`}
                >
                    {event.name}
                </Link>

                <span>{event.short_description}</span>

                {
                    event.min_age_limit > 0 ? (
                        <span>{event.min_age_limit}+</span>
                    ) : (<></>)
                }

                {
                    is_premiere ? (
                        <span className={styles.premier}>премьера</span>
                    ) : (<></>)
                }

            </div>
        </div>
    )
}