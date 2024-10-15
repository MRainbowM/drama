import styles from './RestaurantSection.module.scss'
import RestaurantLogo from 'public/static/images/restaurantLogo.png'
import Image from 'next/image'
import MainGrid from '../MainGrid/MainGrid'
import MainGridInfo from '../MainGridInfo/MainGridInfo'

export default function RestaurantSection() {
    return (
        <div className={styles.root}>
            <h2 id="restaurant">Ресторан</h2>
            <MainGrid
                dataLeft={<></>}
                dataCenter={
                    <div className={styles.imgSection}>
                        <Image
                            className={styles.eventMediaItem}
                            src={RestaurantLogo.src}
                            width={RestaurantLogo.width}
                            height={RestaurantLogo.height}
                            alt='Ресторан "Премьера"'
                        />
                    </div>
                }
                dataRight={
                    <MainGridInfo
                        title={'Ресторан Премьера'}
                        content={
                            <p>
                                Работаем для вас каждый день с 11:00 до 23:00
                            </p>
                        }
                    />
                }
            />
        </div >
    )
}