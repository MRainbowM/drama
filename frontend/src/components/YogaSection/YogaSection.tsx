import styles from './YogaSection.module.scss'
import Image from 'next/image'
import YogaImg from 'public/static/images/yogaImg.jpg'
import MainGrid from '../MainGrid/MainGrid'
import MainGridInfo from '../MainGridInfo/MainGridInfo';

export default function YogaSection() {
    return (
        <div className={styles.root}>
            <h2 id="yoga">YOGA</h2>
            <MainGrid
                dataLeft={<></>}
                dataCenter={
                    <div className={styles.imgSection}>
                        <Image
                            className={styles.eventMediaItem}
                            src={YogaImg.src}
                            width={YogaImg.width}
                            height={YogaImg.height}
                            alt='Йога в театре'
                        />
                    </div>
                }
                dataRight={
                    <MainGridInfo
                        title={'YOGA в театре'}
                        content={
                            <p>
                                Следуя заветам К.С. Станиславского, мы открыли направление «YOGA в театре».
                            </p>
                        }
                    />
                }
            />
        </div>
    );
}