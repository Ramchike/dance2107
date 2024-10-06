import styles from './style.module.scss'

interface Props {
    value: string
    hookFunc: (value: string) => void
}

export function TextArea({value, hookFunc}: Props) {
    return <textarea value={value} onChange={e => hookFunc(e.target.value)} className={styles['textarea']}></textarea>
}