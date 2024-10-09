import styles from './EventDetail.module.scss'
import Image from 'next/image'
import { components } from '../../api/schema'
import EventPeople from '../EventPeople/EventPeople';
import EventMedia from '../EventMedia/EventMedia';
import EventSection from '../EventSection/EventSection';

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

        <div className={styles.eventDescription}>
            <div className={styles.eventDescriptionText}>
                {data.description}
                <br /><br />
                Премьера: 30 ноября 2023 года
            </div>
        </div>

        <EventSection
            title='Галерея'
            content={<EventMedia data={data.images} />}
        />

        <EventSection
            title='Авторы'
            content={peoplesGroupTag['author'].map(item => (
                <EventPeople key={item.id} data={item} />
            ))}
        />

        <EventSection
            title='Актеры'
            content={peoplesGroupTag['actor'].map(item => (
                <EventPeople key={item.id} data={item} />
            ))}
        />

    </>)
}