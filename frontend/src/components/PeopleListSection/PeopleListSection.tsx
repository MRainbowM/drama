'use client'
import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import styles from './PeopleListSection.module.scss'
import { components } from '../../api/schema'

interface PeopleListSectionProps {
    data: components['schemas']['PeopleDetailSchema'][]
}


export default function PeopleListSection(
    { data }: PeopleListSectionProps
) {
    const filterValues = {
        'actor': 'Актеры',
        'director': 'Режиссеры',
        'author': 'Авторы',
        'team': 'Команда',
    }

    const [selectTag, changeFilter] = useState('actor');
    const [isOpen, setOpen] = useState(false);

    const onCLickSelect = () => {
        setOpen((state) => !state);
    }

    const onCLickDropdown = (filterValue) => {
        setOpen(() => false);
        changeFilter(() => filterValue);
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <h1>Мы</h1>
            </div>

            <div className={styles.filters}>
                <div className={clsx(styles.selectBox, { [styles.open]: isOpen })}>
                    <div
                        className={styles.selectRow}
                        onClick={onCLickSelect}
                    >
                        <div>
                            {filterValues[selectTag]}
                        </div>
                        <div className={styles.trigger}>
                            <div className={clsx(styles.arrow, { [styles.open]: isOpen })}></div>
                        </div>
                    </div>

                    <div className={clsx(styles.dropdown, { [styles.close]: !isOpen })}>
                        <ul>
                            <li
                                className={clsx({ [styles.open]: selectTag == "actor" })}
                                onClick={() => onCLickDropdown('actor')}
                            >{filterValues['actor']}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == "director" })}
                                onClick={() => onCLickDropdown('director')}
                            >{filterValues['director']}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == "author" })}
                                onClick={() => onCLickDropdown('author')}
                            >{filterValues['author']}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == "team" })}
                                onClick={() => onCLickDropdown('team')}
                            >{filterValues['team']}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}