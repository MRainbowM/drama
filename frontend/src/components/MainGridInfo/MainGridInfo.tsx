import styles from './MainGridInfo.module.scss'


interface MainGridInfoProps {
    title: string,
    content: React.ReactNode
}


export default function MainGridInfo(
    { title, content }: MainGridInfoProps
) {
    return (
        <div className={styles.root}>
            <span className={styles.title}>
                {title}
            </span>
            <>{content}</>
        </div>
    )

}