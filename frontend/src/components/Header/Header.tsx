import HeaderBurger from '../HeaderBurger/HeaderBurger'
import Menu from '../Menu/Menu'
import styles from './Header.module.scss'
import Logo from 'public/static/images/nd.svg'


export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <Logo className={styles.logo} />
                <HeaderBurger>
                    <Menu />
                </HeaderBurger>
            </div>
        </>
    )
}