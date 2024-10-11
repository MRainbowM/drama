import styles from './SamSection.module.scss'
import Image from 'next/image'
import SamLogo from 'public/static/images/samLogo.png'

export default function SamSection() {
    return (
        <div className={styles.root}>
            <h2>САМ</h2>
            <div className={styles.content}>
                <Image
                    className={styles.eventMediaItem}
                    src={SamLogo.src}
                    width={SamLogo.width}
                    height={SamLogo.height}
                    alt='Студия актерского мастерства'
                />
            </div>
        </div>
    );
}