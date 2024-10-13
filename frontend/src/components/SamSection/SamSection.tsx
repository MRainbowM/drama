import styles from './SamSection.module.scss'
import Image from 'next/image'
import SamLogo from 'public/static/images/samLogo.png'
import MainGrid from '../MainGrid/MainGrid'

export default function SamSection() {
    return (
        <div className={styles.root}>
            <h2>САМ</h2>
            <MainGrid
                dataLeft={<></>}
                dataCenter={
                    <div className={styles.imgSection}>
                        <Image
                            className={styles.eventMediaItem}
                            src={SamLogo.src}
                            width={SamLogo.width}
                            height={SamLogo.height}
                            alt='Студия актерского мастерства'
                        />
                    </div>
                }
                dataRight={
                    <div className={styles.info}>
                        <span className={styles.title}>
                            Студия актерского мастерства
                        </span>
                        <p>
                            Мы САМозабвенно отданы своему делу и стремимся собрать вокруг себя людей похожих на нас - САМоотверженно любящих искусство, жаждущих творить и экспериментировать.
                        </p>
                    </div>
                }
            />
        </div>
    );
}