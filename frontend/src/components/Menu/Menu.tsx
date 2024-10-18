import SocialMedia from '../SocialMedia/SocialMedia';
import styles from './Menu.module.scss'

export default function Menu() {
    return (<>
        <nav className={styles.menu}>
            <ul>
                <li><a href="/#events">Афиша</a></li>
                {/* <li><a href="#">О нас</a></li> */}
                <li><a href="/peoples">Коллектив</a></li>
                <li><a href="/sam">С.А.М.</a></li>
                <li><a href="/#restaurant">Ресторан</a></li>
                <li><a href="/#yoga">Yoga</a></li>
                {/* <li><a href="#">Контакты</a></li> */}
            </ul>
            <div className={styles.media}>
                <SocialMedia />
            </div>
        </nav>
    </>);
}