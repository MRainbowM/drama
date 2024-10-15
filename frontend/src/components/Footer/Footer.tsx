import styles from './Footer.module.scss'
import SocialMedia from '../SocialMedia/SocialMedia'


export default function Footer() {
    return (<>
        <footer className={styles.footer}>

            <div className={styles.item}>
                <span className={styles.itemTitle}>Телефон</span>
                <a href='tel:+73952456600'>+7 (924) 530-33-36</a>
            </div>
            <div className={styles.item}>
                <span className={styles.itemTitle}>Адрес</span>
                <span>Кожова 38, Иркутск, Россия, 664022</span>
            </div>

            <div className={styles.item}>
                <span className={styles.itemTitle}>Почта</span>
                <a href='mailto:novaya-drama@yandex.ru'>novaya-drama@yandex.ru</a>
            </div>

            <div className={styles.media}>
                <SocialMedia isBgWhite={true}/>
            </div>

            <div className={styles.logo}>
                <span>© 2024 Новая Драма</span>
            </div>

        </footer>
    </>);
}