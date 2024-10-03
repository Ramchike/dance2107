import styles from './style.module.scss'

import { useState } from "react";

interface Props {
    hook: (value: string) => void
    hookValue: string
}

export function Input({hookValue, hook}: Props) {
    const [value, setValue] = useState<string>('')

    return <input className={styles['input']} type="text" value={hookValue} onChange={e => hook(e.target.value)}/>
}