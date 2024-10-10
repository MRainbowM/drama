import styles from './MainSection.module.scss'
import Round from 'public/static/images/round.svg'
import Image from 'next/image'
import MainImg from 'public/static/images/main.jpeg'

export default function MainSection() {

    return (
        <div className={styles.root} >
            <h1>
                <span>Новая</span>
                <span>Драма</span>
            </h1>

            <div className={styles.mainImage}>
                <Image
                    className={styles.eventMediaItem}
                    src={MainImg.src}
                    width={MainImg.width}
                    height={MainImg.height}
                    alt='Новая драма'
                />
            </div>

            <Round className={styles.round} />

        </div>
    )
}