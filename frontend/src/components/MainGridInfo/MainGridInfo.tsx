import Link from 'next/link'
import styles from './MainGridInfo.module.scss'


interface MainGridInfoProps {
    title: string,
    content: React.ReactNode,
    link?: string
}


export default function MainGridInfo(
    { title, content, link }: MainGridInfoProps
) {
    return (
        <div className={styles.root}>

            {
                link ? (
                    <Link
                        href={link}
                    >
                        <span className={styles.title}>
                            {title}
                        </span>
                    </Link>
                ) : (
                    <span className={styles.title}>
                        {title}
                    </span>
                )
            }
            <>{content}</>
        </div>
    )

}