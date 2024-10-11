import styles from './EventDetail.module.scss'
import Image from 'next/image'
import { components } from '../../api/schema'
import EventPeople from '../EventPeople/EventPeople';
import EventMedia from '../EventMedia/EventMedia';
import EventSection from '../EventSection/EventSection';

interface EventDetailProps {
    data: components['schemas']['EventDetailSchema']
}


export default function EventDetail({ data }: EventDetailProps) {
    const intermission = data.has_intermission === true ? 'с антрактом' : 'без антракта';
    const minAgeLimit = data.min_age_limit > 0 ? `, ${data.min_age_limit}+` : '';
    const duration = new Intl.DateTimeFormat('ru-RU', {
        hour: "numeric",
        minute: "numeric"
    }).format(  Date.parse('01 Jan 1970 ' + data.duration)   );
    const premiereAt = new Intl.DateTimeFormat('ru-RU', {
        dateStyle: 'long'
    }).format(new Date(data.premiere_at));
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
            <span className={styles.eventShortDescription}>
                {data.short_description}{minAgeLimit}
            </span>
            <span>{duration}, {intermission}</span>
        </div>

        <div className={styles.eventDescription}>
            <div className={styles.eventDescriptionText}>
                {data.description}
            </div>
            <span className={styles.premiereAt}>Премьера: {premiereAt}</span>
        </div>

        {
            data.images && data.images.length > 0 ? (
                <EventSection title='Галерея' >
                    <EventMedia data={data.images} />
                </EventSection>
            ) : (<></>)
        }

        {
            peoplesGroupTag['author'] ? (
                <EventSection title='Авторы'>
                    {peoplesGroupTag['author'].map(item => (
                        <EventPeople key={item.id} data={item} />
                    ))}
                </EventSection>
            ) : (<></>)
        }

        {
            peoplesGroupTag['actor'] ? (
                <EventSection title='Актеры'>
                    {peoplesGroupTag['actor'].map(item => (
                        <EventPeople key={item.id} data={item} />
                    ))}
                </EventSection>
            ) : (<></>)
        }

    </>)
}