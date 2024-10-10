import styles from './Map.module.scss'

export default function Map() {
    return (
        <div className={styles.map}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=104.293344%2C52.272651&mode=search&oid=17955001472&ol=biz&z=16.8"
                width="560" height="400"
            >
            </iframe>
        </div>
    );
}