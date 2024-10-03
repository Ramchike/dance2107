import styles from './style.module.scss'
import { useState } from "react";
import { Sex, Stage } from "../model/types";

export default function Auth() {
    const [stage, setStage]= useState<Stage>(Stage.NAME)
    const [name, setName] = useState<string>('')
    const [family, setFamily] = useState<string>('')
    const [sex, setSex] = useState<Sex>(Sex.NONE)
    const [image, setImage] = useState(null)
    const [subImages, setSubImages] = useState(null)

    return <main className={styles['main']}>123</main>
}