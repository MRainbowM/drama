import Link from 'next/link'
import HeaderBurger from '../HeaderBurger/HeaderBurger'
import Menu from '../Menu/Menu'
import styles from './Header.module.scss'
import Logo from 'public/static/images/nd.svg'


export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <Link href={'/'}>
                    <Logo className={styles.logo} />
                </Link>

                <HeaderBurger>
                    <Menu />
                </HeaderBurger>
            </div>
        </>
    )
}