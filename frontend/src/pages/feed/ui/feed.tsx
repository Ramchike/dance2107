import styles from './style.module.scss'
import { FocusUser } from "../../../entities";
import { cancel, Card, like } from '../../../shared';
import { ReactSVG } from 'react-svg';
import { useState } from 'react';

interface Props {
    focus: FocusUser
}

export function Feed({focus}: Props) {
    const [animLike, setLike] = useState(false);
    const [animClose, setClose] = useState(false);

    return <main className={styles['main']}>
        <div className={styles['container']}>
            <Card name={focus.name} surname={focus.surname} avatar={focus.attachments[0]} desc={focus.desc} litera={focus.literal}></Card>
            <div className={styles['button-list']}>
                <button className={styles['button']}>
                    <ReactSVG
                    className={`${styles['icon']} ${animLike ? styles['active-like'] : styles['like']}`}
                    src={like}
                    onClick={() => setLike(true)}
                    />  
                </button>
                <button className={styles['button']}>
                    <ReactSVG
                    className={`${styles['icon']} ${animClose ? styles['active-close'] : styles['close']}`}
                    src={cancel}
                    onClick={() => setClose(true)}
                    />
                </button>
            </div>
        </div>
    </main>
}