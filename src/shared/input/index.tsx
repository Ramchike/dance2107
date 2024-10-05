import styles from './style.module.scss'


interface Props {
    hook: (value: string) => void
    hookValue: string
}

export function Input({hookValue, hook}: Props) {
    return <input className={styles['input']} type="text" value={hookValue} onChange={e => hook(e.target.value)}/>
}