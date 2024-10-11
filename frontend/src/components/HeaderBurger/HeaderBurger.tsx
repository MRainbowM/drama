'use client'
import clsx from "clsx"
import styles from './HeaderBurger.module.scss'
import { useState } from "react"

interface HeaderBurgerProps {
    children: React.ReactNode
}


export default function HeaderBurger({ children }: HeaderBurgerProps) {

    const [isOpen, setOpen] = useState(false);
    const onClick = () => {
        setOpen((state) => !state);
    }

    return (
        <div>
            <div className={styles.burger}  onClick={onClick}>
                <div className={clsx(styles.lineTop, { [styles.open]: isOpen })}></div>
                <div className={clsx(styles.lineMid, { [styles.open]: isOpen })}></div>
                <div className={clsx(styles.lineBot, { [styles.open]: isOpen })}></div>
            </div>
            <div className={clsx(styles.accordion, { [styles.open]: isOpen })}>
                {children}
            </div>
        </div>
    )
}

