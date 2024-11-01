import styles from './style.module.scss'
import { FocusUser } from "../../../entities";
import { cancel, Card, like } from '../../../shared';
import { ReactSVG } from 'react-svg';

interface Props {
    focus: FocusUser
}

export function Feed({focus}: Props) {
    return <main className={styles['main']}>
        <div className={styles['container']}>
            <Card name={focus.name} surname={focus.surname} avatar={focus.attachments[0]} desc={focus.desc} litera={focus.literal}></Card>
            <div className={styles['button-list']}>
                <button className={styles['button']}>
                    <ReactSVG
                    className={styles['icon']}
                    src={like}
                    />
                </button>
                <button className={styles['button']}>
                    <ReactSVG
                    className={styles['icon']}
                    src={cancel}
                    />
                </button>
            </div>
        </div>
    </main>
}