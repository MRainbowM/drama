import clsx from "clsx"
import styles from './SocialMedia.module.scss'
import VK from 'public/static/images/vk.svg'
import FB from 'public/static/images/fb2.svg'
import IG from 'public/static/images/ig.svg'
import YT from 'public/static/images/yt.svg'
import Link from 'next/link'

interface SocialMediaProps {
    isBgWhite?: boolean
}


export default function SocialMedia(
    { isBgWhite }: SocialMediaProps
) {
    return (<>
        <Link
            className={styles.link}
            href={'https://vk.com/novayadrama'}
            target='_blank'
        ><VK /></Link>
        <Link
            className={styles.link}
            href={'https://www.instagram.com/novaya_drama_irkutsk'}
            target='_blank'
        ><IG /></Link>
        <Link
            className={styles.link}
            href={'https://www.youtube.com/channel/UCVrDmCTXE3vJpFqJja7rwEQ'}
            target='_blank'
        ><YT /></Link>
        <Link
            className={clsx(styles.link, styles.fb, {[styles.white]:isBgWhite})}
            href={'https://www.facebook.com/novayadrama'}
            target='_blank'
        ><FB /></Link>
    </>);
}