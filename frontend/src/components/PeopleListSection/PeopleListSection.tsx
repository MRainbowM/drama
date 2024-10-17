'use client'
import clsx from "clsx"
import { useState } from "react"
import styles from './PeopleListSection.module.scss'
import { components } from '../../api/schema'
import PeoplePreview from "../PeoplePreview/PeoplePreview"
import { peopleTagActor, peopleTagAuthor, peopleTagDirector, peopleTagTeam, peopleTagToLabel } from "../../constants/peopleTags"



interface PeopleListSectionProps {
    data: Object
}


export default function PeopleListSection(
    { data }: PeopleListSectionProps
) {
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
                        <div>{peopleTagToLabel[selectTag]}</div>
                        <div className={styles.trigger}>
                            <div className={clsx(styles.arrow, { [styles.open]: isOpen })}></div>
                        </div>
                    </div>

                    <div className={clsx(styles.dropdown, { [styles.close]: !isOpen })}>
                        <ul>
                            <li
                                className={clsx({ [styles.open]: selectTag == peopleTagActor })}
                                onClick={() => onCLickDropdown(peopleTagActor)}
                            >{peopleTagToLabel[peopleTagActor]}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == peopleTagDirector })}
                                onClick={() => onCLickDropdown(peopleTagDirector)}
                            >{peopleTagToLabel[peopleTagDirector]}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == peopleTagAuthor })}
                                onClick={() => onCLickDropdown(peopleTagAuthor)}
                            >{peopleTagToLabel[peopleTagAuthor]}</li>
                            <li
                                className={clsx({ [styles.open]: selectTag == peopleTagTeam })}
                                onClick={() => onCLickDropdown(peopleTagTeam)}
                            >{peopleTagToLabel[peopleTagTeam]}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {
                data[selectTag] ? (

                    // <div className={styles.grid}>


                    <PeoplePreview
                        data={data[selectTag]}
                    />
                    // </div>

                ) : (<></>)
            }

        </div >
    );
}