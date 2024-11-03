import { Icon, Tooltip } from '@gravity-ui/uikit';
import '../../../app/index.scss';
import styles from './style.module.scss';
import {SealCheck} from '@gravity-ui/icons';

interface Props {
    name: string;
    surname: string;
    avatar: string;
    litera: string;
    desc: string;
}

export function Card({ name, surname, avatar, desc, litera }: Props) {
    return (
        <div className={styles['bg']} style={{ background: `linear-gradient(180.00deg, rgba(0, 0, 0, 0.85) 0%,rgba(0, 0, 0, 0) 60.239%), url(${avatar})`}}>
            <div className={styles['card']}>
                <div className={styles['overlay']}>
                    <span className={styles['name']}>{surname} {name} <Tooltip openDelay={0} closeDelay={2000} content='Данные пользователя подтверждены администрацией'><sup><Icon data={SealCheck}/></sup></Tooltip></span>
                    <div className={styles['about']}>
                        <section className={`${styles['section']} ${styles['section-class']}`}>
                            <span className={styles['section-title']}>Класс</span>
                            <span className={`${styles['section-text']} ${styles['class-text']}`}>{litera}</span>
                        </section>
                        <section className={`${styles['section']} ${styles['section-desc']}`}>
                            <span className={styles['section-title']}>О себе</span>
                            <span className={`${styles['section-text']} ${styles['desc-text']}`}>{desc}</span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}