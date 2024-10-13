import styles from './RestaurantSection.module.scss'
import RestaurantImg from 'public/static/images/restaurant.jpg'
import RestaurantLogo from 'public/static/images/restaurantLogo.png'
import Image from 'next/image'
import VK from 'public/static/images/vk.svg'
import MainGrid from '../MainGrid/MainGrid'
import MainGridInfo from '../MainGridInfo/MainGridInfo'

export default function RestaurantSection() {
    return (
        <div className={styles.root}>
            <h2>Ресторан</h2>
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