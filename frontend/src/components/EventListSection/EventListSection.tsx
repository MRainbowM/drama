'use client'
import styles from './EventListSection.module.scss'
import { components } from '../../api/schema'
import { useState } from "react"
import clsx from "clsx"

import EventPreview from '../EventPreview/EventPreview'

interface EventListSectionProps {
    eventsByAbc: components['schemas']['EventPreviewSchema'][],
    eventsByDate: components['schemas']['EventShowOutSchema'][],
}

export default function EventListSection({ eventsByAbc, eventsByDate }: EventListSectionProps) {
    const [filterByAbсState, changeFilter] = useState(false);

    const onClickByAbc = () => {
        changeFilter(() => true);
    }
    const onClickByDate = () => {
        changeFilter(() => false);
    }

    return (
        <>
            <h2 id='events'>Афиша</h2>
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

            {
                filterByAbсState ? (
                    eventsByAbc ? (
                        eventsByAbc.map(item => (
                            <EventPreview
                                key={item.id}
                                event={item}
                                isPremiere={false}
                                tag={item.name[0]}
                            />))
                    ) : (<></>)
                ) : (
                    eventsByDate ? (
                        eventsByDate.map(item => (
                            <EventPreview
                                key={item.id}
                                event={item.event}
                                isPremiere={item.is_premiere}
                                tag={
                                    new Intl.DateTimeFormat('ru-RU', {
                                        day: 'numeric',
                                        month: 'short',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                    }).format(
                                        new Date(item.start_at)
                                    ).replace('.', '')
                                }
                                linkToBuyTicket={item.link_to_buy_ticket}
                            />))
                    ) : (<></>)
                )
            }
        </>
    );
}


