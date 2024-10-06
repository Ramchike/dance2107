import styles from './style.module.scss'
import { ReactElement, useEffect, useState } from "react";
import { Sex, Stage } from "../model/types";
import { Input, Button, Select, Option, white2107, blue2107, pink2107 } from '../../../shared';
import { InputImg } from '../../../shared/input/img-input';
import { TextArea } from '../../../shared/input/textarea';

export default function Auth() {
    const [theme, setTheme] = useState<'pink' | 'blue' | null>(null)
    const [stage, setStage] = useState<Stage>(Stage.SUBINFO)
    const [name, setName] = useState<string>('')
    const [family, setFamily] = useState<string>('')
    const [sex, setSex] = useState<Sex|null>(null)
    const [image, setImage] = useState<string | undefined>(undefined)
    const [about, setAbout] = useState<string>('')
    const [subImages, setSubImages] = useState(null)
    const [litera, setLitera] = useState<string|null>(null)

    useEffect(() => {
        switch (sex) {
            case Sex.MALE:
                setTheme('blue')
                break
            case Sex.WOMAN:
                setTheme('pink')
                break
            default:
                break
        }
    }, [sex])

    const checkActive = ():boolean => {
        if (stage == Stage.SUBINFO && litera && sex) {
            return true
        }
        else if (stage == Stage.NAME && name.length > 0 && family.length > 0) {
            return true
        }
        else if (stage == Stage.PHOTO && image) {
            return true
        }
        else {
            return false
        }
    }

    const Sexs: Option[] = [
        {key: "male", value: "Мужчина"},
        {key: "woman", value: "Женщина"}
    ]

    const Literales: Option[] = [
        {key: "10k", value: "10К"},
        {key: "10c", value: "10С"},
        {key: "10u", value: "10Ю"},
        {key: "10y", value: "10У"},
        {key: "10j", value: "10Ж"},
        {key: "10i", value: "10И"},
        {key: "10t", value: "10Т"},
        {key: "10a", value: "10А"},
        {key: "10b", value: "10Б"},
        {key: "10j", value: "10Ж"},
        {key: "10o", value: "10О"},
        {key: "10f", value: "10Ф"},
        {key: "11k", value: "11К"},
        {key: "11c", value: "11С"},
        {key: "11y", value: "11Ю"},
        {key: "11j", value: "11Ж"},
        {key: "11i", value: "11И"},
        {key: "11t", value: "11Т"},
        {key: "11a", value: "11А"},
        {key: "11b", value: "11Б"},
        {key: "11j", value: "11Ж"},
        {key: "11o", value: "11О"},
        {key: "11f", value: "11Ф"},
        {key: "11p", value: "11П"},
    ]

    const inputName = 
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Имя</span>
            <Input hookValue={name} hook={setName}></Input>
        </div>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Фамилия</span>
            <Input hookValue={family} hook={setFamily}></Input>
        </div>
    </div>

    const inputSex = 
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Выберите пол</span>
            <Select value={sex || 'none'} options={Sexs} title='Пол' hookFunc={setSex}/>
        </div>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Выберите класс</span>
            <Select value={litera || 'none'} options={Literales} title='Класс' hookFunc={setLitera}/>
        </div>
    </div>

    const inputImg =
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Ваше фото</span>
            <InputImg src={image} hookFunc={setImage}/>
        </div>
    </div>

    const inputAbout =
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>О себе</span>
            <TextArea value={about} hookFunc={setAbout}/>
        </div>
    </div>

    const inputNow = (): ReactElement => {
        switch (stage) {
            case Stage.NAME:
                return inputName;
            case Stage.SUBINFO:
                return inputSex
            case Stage.PHOTO:
                return inputImg
            case Stage.ABOUT:
                return inputAbout
            default:
                return inputName;
        }
    }

    const imgNow = () => {
        switch (theme) {
            case 'blue':
                return blue2107
            case 'pink':
                return pink2107
            default:
                return white2107
        }
    }

    return <main data-theme={theme} className={styles['main']}>
        <img className={styles['logo']} src={imgNow()}></img>
        {inputNow()}
        <section className={styles['buttons']}>
        <Button text='Продолжить' hook={() => setStage(stage+1)} active={checkActive()}/>
        <Button text='Назад' style='outfill' hook={() => setStage(stage-1)} active={stage > 0}/>
        </section>
    </main>
    
}