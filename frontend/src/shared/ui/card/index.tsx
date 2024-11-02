import '../../../app/index.scss';
import styles from './style.module.scss';

interface Props {
    name: string;
    surname: string;
    avatar: string;
    litera: string;
    desc: string;
}

export function Card({ name, surname, avatar, desc, litera }: Props) {
    return (
        <div className={styles['bg']} style={{ background: `linear-gradient(180.00deg, rgba(0, 0, 0, 0.8) 0%,rgba(0, 0, 0, 0) 50.239%), url(${avatar})`}}>
            <div className={styles['card']}>
                <div className={styles['overlay']}>
                    <span className={styles['name']}>{name} {surname}</span>
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