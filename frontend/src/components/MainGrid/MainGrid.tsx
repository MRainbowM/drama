import styles from './MainGrid.module.scss'

interface MainGridProps {
    dataLeft: React.ReactNode,
    dataCenter: React.ReactNode,
    dataRight: React.ReactNode,
}


export default function MainGrid(
    { dataLeft, dataCenter, dataRight }: MainGridProps
) {
    return (

        <div className={styles.root}>
            <div className={styles.leftColumn}>
                {dataLeft}
            </div>

            <div className={styles.centerColumn}>
                {dataCenter}
            </div>

            <div className={styles.rightColumn}>
                {dataRight}
            </div>
        </div>
    );
}