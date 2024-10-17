'use client'
import { Fragment } from 'react'
import styles from './PeoplePreview.module.scss'
import Image from 'next/image'

interface PeoplePreviewProps {
    letter?: string
    data: Object
}

export default function PeoplePreview(
    { letter, data }: PeoplePreviewProps
) {
    const letterList = Object.keys(data);

    console.log(data);
    return (

        <div className={styles.root}>


            {letterList.map((letter, index) => (
                // <>{letter}</>
                <Fragment key={index}>
                    {
                        data[letter].map((item, key) => (
                            <Fragment key={key}>
                                {item.first_name}
                            </Fragment>

                        ))
                    }
                </Fragment>



            ))}


        </div>
    );
}