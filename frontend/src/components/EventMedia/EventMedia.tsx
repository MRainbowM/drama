import styles from './EventMedia.module.scss'
import { components } from '../../api/schema'
import Image from 'next/image'

interface EventMediaProps {
    data: components['schemas']['EventImageOutSchema'][]
}

export default function EventMedia({ data }: EventMediaProps) {

    return (
        <div className={styles.eventMediaWrap}>
            <div className={styles.eventMediaList}>
                {data.map(item => (
                    <Image
                        key={item.id}
                        className={styles.eventMediaItem}
                        src={item.image}
                        width={500}
                        height={500}
                        alt='wqe' // TODO
                    />
                ))}
            </div>
        </div>
    )
}