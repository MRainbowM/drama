'use client'
import styles from './PeoplePreview.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface PeoplePreviewProps {
    data: Object
}

export default function PeoplePreview(
    { data }: PeoplePreviewProps
) {
    const letterList = Object.keys(data);

    return (
        <div className={styles.root}>

            {letterList.map((letter, index) => (

                <div className={styles.gridRow}>
                    <div className={styles.colLetter}>
                        <span>{letter}</span>
                    </div>
                    <div className={styles.colPeoples} key={index}>
                        {data[letter].map((people, key) => (

                            <div className={styles.card} data-key={key}>
                                {people.photo ? (

                                    <div className={styles.imgBox}>
                                        <Image
                                            key={people.id}
                                            src={people.photo}
                                            width={500}
                                            height={500}
                                            alt={`${people.first_name} ${people.last_name}`}
                                        />
                                    </div>

                                ) : (<></>)}

                                <div className={styles.name}>
                                    <Link href={`/peoples/${people.slug}`}>
                                        {people.first_name} {people.last_name}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>


            ))}


        </div>
    );
}