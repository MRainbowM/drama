import styles from './EventDetail.module.scss'
import Image from 'next/image'

export default function EventDetail() {
    return (<>
        <div className={styles.eventHeader}>
            <Image
                className={styles.eventCover}
                src='/media/event_cover/2024/09/26/image.jpeg'
                width={500}
                height={500}
                alt=""
            />
            <h1>Девушки в любви</h1>
        </div>

        <div className={styles.eventSubHeader}>
            <span className={styles.eventShortDescription}>Спектакль-розовый POLE-DANCE, 18+</span>
            <span>2:00, без антрактов</span>
        </div>

        <div>

        </div>

    </>)
}