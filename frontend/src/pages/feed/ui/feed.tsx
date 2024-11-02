import styles from './style.module.scss'
import { FocusUser, User } from "../../../entities";
import { cancel, Card, like } from '../../../shared';
import { ReactSVG } from 'react-svg';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../app/providers';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { likeSend } from '../../../features/like';

gsap.registerPlugin(useGSAP);

interface Props {
    focus: FocusUser
}

export function Feed({focus}: Props) {
    const [animLike, setLike] = useState(false);
    const [animClose, setClose] = useState(false);
    const [bg, setBg] = useState(true);
    const card = useRef<HTMLDivElement>(null);
    const newData = useRef<User | null | undefined>(null)
    const {setUser} = useContext(UserContext)

    useGSAP(
        () => {
            if (animLike && card.current) {
                newData.current = undefined
                likeSend(true).then((data) => {
                    newData.current = data
                    console.log("загрузил")
                })
                const afterData = () => {
                    while (!newData) { console.log(newData) }
                    setUser(newData.current)
                    newData.current = null
                    setLike(false)
                    const tlGet = gsap.timeline()
                    tlGet.fromTo(card.current, {x: 500}, {x: 0, duration: 0.8, ease: 'power1'})
                    tlGet.fromTo(card.current, {scale: 0.8}, {x: 0, scale: 1, duration: 0.4, ease: 'power1', onComplete: () => setBg(true)})
                }
                const tlSend = gsap.timeline({onComplete: afterData})
                tlSend.to(card.current, {y: -20, duration: 0.3, ease: 'power1', onComplete: () => setBg(false)})
                tlSend.to(card.current, {scale: 0.8, duration: 0.4, ease: 'power1'}, '<')
                tlSend.to(card.current, {x: -500, duration: 0.8, ease: 'slow'}, '>')
            }
        }, [animLike])

    return <main data-bg={bg ? "YES" : "NO"} className={styles['main']}>
        <div ref={card} className={styles['container']}>
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