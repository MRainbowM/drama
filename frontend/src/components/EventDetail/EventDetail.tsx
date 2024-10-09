import styles from './EventDetail.module.scss'
import Image from 'next/image'
import { components } from '../../api/schema'
import EventPeople from '../EventPeople/EventPeople';
import EventMedia from '../EventMedia/EventMedia';

interface EventDetailProps {
    data: components['schemas']['EventOutSchema']
}


export default function EventDetail({ data }: EventDetailProps) {
    const intermission = data.has_intermission === true ? 'с антрактом' : 'без антрактов';
    const minAgeLimit = data.min_age_limit > 0 ? `, ${data.min_age_limit}+` : '';
    const duration = data.duration.slice(1);

    const peoplesGroupTag = Object.groupBy(data.peoples, ({ tag }) => tag);

    return (<>
        <div className={styles.eventHeader}>
            <Image
                className={styles.eventCover}
                src={data.cover}
                width={500}
                height={500}
                alt={data.name}
            />
            <h1>{data.name}</h1>
        </div>

        <div className={styles.eventSubHeader}>
            <span className={styles.eventShortDescription}>{data.short_description}{minAgeLimit}</span>
            <span>{duration}, {intermission}</span>
        </div>

        <div className={styles.eventSection}>
            <div className={styles.eventSectionText}>
                {data.description}
                <br /><br />
                Премьера: 30 ноября 2023 года
            </div>
        </div>

        <div className={styles.eventSection}>
            <EventMedia data={data.images}/>

        </div>

        <div>
            <div className={styles.toggleTitle} id='toggleAuthor'>
                <div className={styles.toggleTitleLine}></div>
                <div className={styles.toggleTitleLine}></div>
            </div>
            <h3 className={styles.eventSectionTitle}>Авторы</h3>
        </div>

        <div className={styles.eventSection}>
            <div className={styles.eventSectionText}>
                {peoplesGroupTag['author'].map(item => (
                    <EventPeople key={item.id} data={item} />
                ))}
            </div>
        </div>

        <h3 className={styles.eventSectionTitle}>Актеры</h3>

        <div className={styles.eventSection}>
            <div className={styles.eventSectionText}>
                {peoplesGroupTag['actor'].map(item => (
                    <EventPeople key={item.id} data={item} />
                ))}
            </div>
        </div>

    </>)
}