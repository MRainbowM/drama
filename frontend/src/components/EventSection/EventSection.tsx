'use client'
import clsx from "clsx"
import { useState } from "react"
import styles from './EventSection.module.scss'
import Arrow from 'public/static/images/arrow.svg'

interface EventSectionProps {
    title: string,
    content: {}
}


export default function EventSection({ title, content }: EventSectionProps) {
    const [isOpen, setOpen] = useState(false)

    const onClick = () => {
        setOpen((state) => !state)
    }

    return (
        <div className={styles.section}>
            <div className={styles.header} onClick={onClick}>
                <div className={styles.toggle}>
                    <Arrow className={clsx({ [styles.open]: isOpen })} />
                </div>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <div className={clsx(styles.content, { [styles.open]: isOpen })}>
                <>{content}</>
            </div>
        </div>
    )
}