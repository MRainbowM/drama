import styles from './SamSection.module.scss'
import Image from 'next/image'
import SamLogo from 'public/static/images/samLogo.png'
import MainGrid from '../MainGrid/MainGrid'
import MainGridInfo from '../MainGridInfo/MainGridInfo';

export default function SamSection() {
    return (
        <div className={styles.root}>
            <h2>САМ</h2>
            <MainGrid
                dataLeft={<></>}
                dataCenter={
                    <div className={styles.imgSection}>
                        <Image
                            src={SamLogo.src}
                            width={SamLogo.width}
                            height={SamLogo.height}
                            alt='Студия актерского мастерства'
                        />
                    </div>
                }
                dataRight={
                    <MainGridInfo
                        title={' Студия актерского мастерства'}
                        content={
                            <p>
                                Мы САМозабвенно отданы своему делу и стремимся собрать вокруг себя людей похожих на нас - САМоотверженно любящих искусство, жаждущих творить и экспериментировать.
                            </p>
                        }
                    />
                }
            />
        </div>
    );
}