import styles from './ButtonBuy.module.scss'
import Link from 'next/link'

interface ButtonBuyProps {
    link: string
}

export default function ButtonBuy({ link }: ButtonBuyProps) {
    return (
        <div className={styles.root}>
            <Link
                href={link}
                target='_blank'
                className={styles.btn}
            >
                <span>Купить билеты</span>
            </Link>
        </div>
    );
}