import styles from './SamDetail.module.scss'
import Image from 'next/image'
import SamCover from 'public/static/images/pp-67.jpg'

export default function SamDetail() {
    return (<>
        <div className={styles.cover}>
            <Image
                src={SamCover.src}
                width={SamCover.width}
                height={SamCover.height}
                alt='Студия актерского мастерства'
            />
            <h1>Студия актерского мастерства</h1>
        </div>

        <div className={styles.descriptionSection}>
            <div className={styles.descriptionText}>
                <p>
                    Один из главных принципов актёров «Новой Драмы» - быть открытыми.
                    Мы САМозабвенно отданы своему делу и стремимся собрать вокруг себя людей похожих на нас - САМоотверженно любящих искусство, жаждущих творить и экспериментировать.
                </p>
                <p>
                    Мы готовы передавать свои знания и навыки тем, кто мечтает заниматься театром и хочет осваивать азы актёрской профессии, и для этого организовали Студии актёрского мастерства «С.А.М.»
                </p>
                <p>Занятия направлены на то, чтобы помочь ученикам Студии:</p>
                <ul>
                    <li>открыть творческую САМостоятельность и способность свободно и неординарно мыслить;</li>
                    <li>раскрепоститься, убрать зажимы и проработать САМооценку; </li>
                    <li>развить способность к САМоорганизации в коллективной работе;</li>
                    <li>научиться САМообладанию и контролю над разумом и телом;</li>
                    <li>развить привычку к САМоанализу и САМоосмыслению.</li>
                </ul>
            </div>
        </div>


    </>);
}