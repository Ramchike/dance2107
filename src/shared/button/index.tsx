import styles from './style.module.scss'

interface Props {
    text: string
    hook: () => void
    active: boolean
}

export function Button({text, hook, active}: Props) {
    console.log("YES" ? active : "NO")
    return <button disabled={!active} data-active={active ? "YES" : "NO"} className={styles['button']} onClick={hook}>{text}</button>
}