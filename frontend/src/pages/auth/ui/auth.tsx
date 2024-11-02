import styles from './style.module.scss'
import { ReactElement, useContext, useEffect, useState } from "react";
import { Sex, Stage, UserRegister } from "../model/types";
import {Input, Button, Select, Option, InputImg, TextArea,  white2107, blue2107, pink2107 } from '../../../shared';
import { CropWidget } from '../../../widgets';
import { UserContext } from '../../../app/providers';
import { register } from '../api/api';

export function Auth() {
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
        {key: "10g", value: "10Ж"},
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
        {key: "11g", value: "11Ж"},
        {key: "11o", value: "11О"},
        {key: "11f", value: "11Ф"},
        {key: "11p", value: "11П"},
    ]

    const {updateUser} = useContext(UserContext)
    const [theme, setTheme] = useState<'pink' | 'blue' | null>(null)
    const [stage, setStage] = useState<Stage>(Stage.SUBINFO)
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [sex, setSex] = useState<string>('')
    const [image, setImage] = useState<string | undefined>(undefined)
    const [desc, setDesc] = useState<string>('')
    const [literal, setLiteral] = useState<string|null>(null)

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
        if (stage == Stage.SUBINFO && literal && sex) {
            return true
        } else if (stage == Stage.NAME && name.length > 0 && surname.length > 0) {
            return true
        } else if (stage == Stage.PHOTO && image) {
            return true
        } else if (stage == Stage.ABOUT && desc.length >= 4) {
            return true
        } else {
            return false;
        }
    }

    const Sexs: Option[] = [
        {key: "male", value: "Мужчина"},
        {key: "woman", value: "Женщина"}
    ]

    const inputName = 
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Имя</span>
            <Input value={name} hook={setName}></Input>
        </div>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Фамилия</span>
            <Input value={surname} hook={setSurname}></Input>
        </div>
    </div>

    const inputSex = 
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Выберите пол</span>
            <Select value={sex || ''} options={Sexs} title='Пол' hook={setSex}/>
        </div>
        <div className={styles['input-block']}>
            <span className={styles['title']}>Выберите класс</span>
            <Select value={literal || ''} options={Literales} title='Класс' hook={setLiteral}/>
        </div>
    </div>

    const [isCropping, setCropping] = useState(true)
    const startCropping = (img: string) => {
        setImage(img)
        setCropping(true)
    }
    const inputImg = <div className={styles["input-list"]}>
            <div className={styles['input-block']}>
                    <span className={styles['title']}>Ваше фото</span>
                    <InputImg src={image} hook={startCropping}/>
            </div>
        </div>

    const inputAbout =
    <div className={styles["input-list"]}>
        <div className={styles['input-block']}>
            <span className={styles['title']}>О себе</span>
            <TextArea value={desc} hook={setDesc}/>
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

    const submitUser = () => {
        if (image) {
            fetch(image)
                .then(res => res.blob())
                .then(blob => {
                    console.log(blob)
                    const userData: UserRegister = {
                        name,
                        surname,
                        male: sex === Sex.MALE,
                        desc,
                        literal: literal ? literal : ''
                    };
                    const avatarForm = new FormData();
                    avatarForm.append('avatar', blob)
                    register(userData, avatarForm).then(updateUser);
                })
            }
    }

    if (stage == Stage.PHOTO && isCropping && image) {
        return <CropWidget
        img={image}
        setImg={setImage}
        onComplete={() => setCropping(false)}
    />
    }
    else {
        return <main data-theme={theme} className={styles['main']}>
        {stage != Stage.PHOTO ? <img className={styles['logo']} src={imgNow()}></img> : <></>}
        {inputNow()}
        <section className={styles['buttons']}>
            {stage == Stage.ABOUT ? 
            <Button text='Отправить' hook={submitUser} active={checkActive()}/>
            : <Button text='Продолжить' hook={() => setStage(stage + 1)} active={checkActive()}/>
            }
            <Button text='Назад' style='outfill' hook={() => setStage(stage - 1)} active={stage > 0}/>
        </section>
    </main>
    }
}