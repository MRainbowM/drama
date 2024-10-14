'use client'
import clsx from "clsx"
import styles from './HeaderBurger.module.scss'
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"


interface HeaderBurgerProps {
    children: React.ReactNode
}


export default function HeaderBurger({ children }: HeaderBurgerProps) {
    const refContainer = useRef<HTMLElement>();

    const [isOpen, setOpen] = useState(false);
    const onClickBurger = () => {
        setOpen((state) => !state);
    }

    const onClickAccordion = () => {
        setOpen(false);
    }

    useEffect(() => {
        refContainer.current = document.getElementById('container');
        return () => {
            document.body.style.overflow = ''
        }
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return (
        <div>
            <div className={styles.burger} onClick={onClickBurger}>
                <div className={clsx(styles.lineTop, { [styles.open]: isOpen })}></div>
                <div className={clsx(styles.lineMid, { [styles.open]: isOpen })}></div>
                <div className={clsx(styles.lineBot, { [styles.open]: isOpen })}></div>
            </div>
            <div
                className={clsx(styles.accordion, { [styles.open]: isOpen })}
                onClick={onClickAccordion}
            >
                {children}
            </div>

            {(isOpen && refContainer.current) && (
                createPortal(
                    <div className={styles.overlay} />,
                    refContainer.current
                )
            )}
        </div>
    );
}