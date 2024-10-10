import Link from 'next/link'
import styles from './Footer.module.scss'
import VK from 'public/static/images/vk.svg'
import FB from 'public/static/images/fb.svg'
import IG from 'public/static/images/ig.svg'
import YT from 'public/static/images/yt.svg'
import Logo from 'public/static/images/nd.svg'

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
                <Link
                    href={'https://vk.com/novayadrama'}
                    target='_blank'
                ><VK /></Link>
                <Link
                    href={'https://www.instagram.com/novaya_drama_irkutsk'}
                    target='_blank'
                ><IG /></Link>
                <Link
                    href={'https://www.youtube.com/channel/UCVrDmCTXE3vJpFqJja7rwEQ'}
                    target='_blank'
                ><YT /></Link>
                <Link
                    href={'https://www.facebook.com/novayadrama'}
                    target='_blank'
                ><FB /></Link>
            </div>

            <div className={styles.logo}>
                <span>© 2024 Новая Драма</span>
            </div>

        </footer>
    </>);
}