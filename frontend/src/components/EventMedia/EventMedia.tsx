import styles from './EventMedia.module.scss'
import { components } from '../../api/schema'
import Image from 'next/image'

interface EventMediaProps {
    data: components['schemas']['EventImageBoundSchema'][]
}

export default function EventMedia({ data }: EventMediaProps) {

    return (
        <div className={styles.eventMediaWrap}>
            <div className={styles.eventMediaList}>
                {[data.map(item => (

                    <Image
                        className={styles.eventMediaItem}
                        src={item.image}
                        width={500}
                        height={500}
                        alt='wqe' // TODO
                    />
                ))]}
            </div>
        </div>
    )
}