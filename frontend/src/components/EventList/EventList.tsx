import styles from './EventList.module.scss'
import Image from 'next/image'



export default function EventList() {
    return (
        <div className={styles.eventList}>
            <div className={styles.event}>
                <div className={styles.eventDate}><span>6 окт, вс</span></div>

                <div className={styles.eventCover}>
                    <Image
                        src="/static/images/image.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>

                <div className={styles.eventInfo}>
                    <div className={styles.eventTitle}>
                        <span>Девушки в любви</span>
                    </div>
                    <div>
                        <span>спектакль-розовый POLE-DANCE</span>
                    </div>
                </div>
            </div>

            <div className={styles.event}>
                <div className={styles.eventDate}><span>6 окт, вс</span></div>

                <div className={styles.eventCover}>
                    <Image
                        src="/static/images/image2.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>

                <div className={styles.eventInfo}>
                    <div className={styles.eventTitle}>
                        <span>Мой папа Питер Пен</span>
                    </div>
                    <div>
                        <span>пронзительная история</span>
                    </div>
                </div>
            </div>

            <div className={styles.event}>
                <div className={styles.eventDate}><span>6 окт, вс</span></div>

                <div className={styles.eventCover}>
                    <Image
                        src="/static/images/image3.jpeg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>

                <div className={styles.eventInfo}>
                    <div className={styles.eventTitle}>
                        <span>Три сестры</span>
                    </div>
                    <div>
                        <span>творчество в пустоте</span>
                    </div>
                </div>
            </div>
        </div>
    )
}