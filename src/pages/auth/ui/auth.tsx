import styles from './style.module.scss'
import { ReactElement, useState } from "react";
import { Sex, Stage } from "../model/types";
import { Input, Button } from '../../../shared';

export default function Auth() {
    const [stage, setStage] = useState<Stage>(Stage.NAME)
    const [name, setName] = useState<string>('')
    const [family, setFamily] = useState<string>('')
    const [sex, setSex] = useState<Sex>(Sex.NONE)
    const [image, setImage] = useState(null)
    const [subImages, setSubImages] = useState(null)


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

    const inputNow = (): ReactElement => {
        switch (stage) {
            case Stage.NAME:
                return inputName;
        
            default:
                return inputName;
        }
    }

    return <main className={styles['main']}>
        {inputNow()}
        <Button text='Продолжить' hook={() => setStage(stage+1)} active={(name.length > 0 && family.length > 0)}/>
    </main>
    
}