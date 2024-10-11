import styles from './YogaSection.module.scss'
import Image from 'next/image'
import YogaImg from 'public/static/images/yoga.jpeg'

export default function YogaSection() {
    return (
        <div className={styles.root}>
            <h2>YOGA в театре</h2>
            <div className={styles.content}>
                <Image
                    className={styles.eventMediaItem}
                    src={YogaImg.src}
                    width={YogaImg.width}
                    height={YogaImg.height}
                    alt='Йога в театре'
                />
            </div>
        </div>
    );
}