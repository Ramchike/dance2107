import styles from './style.module.scss'

export type Option = {
    key: string
    value: string
}

interface Props {
    value: string
    options: Option[]
    title: string
    hookFunc: (value: string) => void
}

export function Select({value, options, hookFunc, title}: Props) {
    return <select value={value} className={styles['select']} defaultValue={title} onChange={(e) => hookFunc(e.target.value)}>
        <option value={'none'} selected hidden disabled>{title}</option>
        {options.map((option: Option) => <option value={option.key}>{option.value}</option>)}
    </select>
}