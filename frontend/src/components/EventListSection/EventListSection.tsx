'use client'
import styles from './EventListSection.module.scss'
import { components } from '../../api/schema'
import Image from 'next/image'
import { useState } from "react"
import clsx from "clsx"
import { useParams } from 'next/navigation'

interface EventListSectionProps {
    data: any
    // data: components['schemas']['EventImageBoundSchema'][]
}

export default function EventListSection({ data }: EventListSectionProps) {
    const [filterByAbсState, changeFilter] = useState(false);

    const onClickByAbc = () => {
        changeFilter((filterByAbсState) => true);
    }
    const onClickByDate = () => {
        changeFilter((filterByAbсState) => false);
    }

    return (
        <>
            <h2>Афиша</h2>
            <div className={styles.filters}>
                <div
                    className={clsx(styles.button, { [styles.select]: !filterByAbсState })}
                    onClick={onClickByDate}
                >
                    <span>по датам</span>
                </div>
                <div
                    className={clsx(styles.button, { [styles.select]: filterByAbсState })}
                    onClick={onClickByAbc}
                >
                    <span>по алфавиту</span>
                </div>
            </div >
        </>
    );
}


