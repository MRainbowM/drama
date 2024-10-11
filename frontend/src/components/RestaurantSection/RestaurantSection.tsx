import styles from './RestaurantSection.module.scss'
import RestaurantImg from 'public/static/images/restaurant.jpg'
import RestaurantLogo from 'public/static/images/restaurantLogo.png'
import Image from 'next/image'
import VK from 'public/static/images/vk.svg'

export default function RestaurantSection() {
    return (
        <div className={styles.root}>
            <h2>Ресторан</h2>
            <div className={styles.content}>
                <Image
                    className={styles.eventMediaItem}
                    src={RestaurantLogo.src}
                    width={RestaurantLogo.width}
                    height={RestaurantLogo.height}
                    alt='Ресторан "Премьера"'
                />
            </div>
        </div >
    )
}