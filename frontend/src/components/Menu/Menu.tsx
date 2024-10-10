import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul>
                <li><a href="/#events">Афиша</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Коллектив</a></li>
                <li><a href="#">С.А.М.</a></li>
                <li><a href="#">Ресторан</a></li>
                <li><a href="#">Yoga</a></li>
                {/* <li><a href="#">Контакты</a></li> */}
            </ul>
        </nav>
    )
}