import styles from './Header.module.scss'

import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src={`/static/images/nd.png`} alt='НД' width="50" height="50" />
            
            <div className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>


            {/* <nav className={styles.menu}>
                <ul>
                    <li><a href="#">Афиша</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Коллектив</a></li>
                    <li><a href="#">С.А.М.</a></li>
                    <li><a href="#">Ресторан</a></li>
                    <li><a href="#">Yoga</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </nav> */}
        </div>
    )
}