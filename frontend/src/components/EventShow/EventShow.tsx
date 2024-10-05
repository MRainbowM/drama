import { components } from '../../api/schema'
import styles from './EventShow.module.scss'
import Image from 'next/image'

interface EventShowProps {
    data: components['schemas']['EventShowSchema']
}

export default function EventShow({ data }: EventShowProps) {
    return (
        <div className={styles.event}>
            <div className={styles.eventDate}><span>6 окт, вс</span></div>

            <div className={styles.eventCover}>
                <Image
                    src={data.event.cover}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>

            <div className={styles.eventInfo}>
                <div className={styles.eventTitle}>
                    <span>{data.event.name}</span>
                </div>
                <div>
                    <span>{data.event.short_description}</span>
                </div>
            </div>
        </div>
    )
}