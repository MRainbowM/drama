import styles from './Header.module.scss'

import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={`/static/images/nd.png`} alt='НД' width="100" height="100" />

            <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}