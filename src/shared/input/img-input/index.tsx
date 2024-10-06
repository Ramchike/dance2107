import styles from './style.module.scss'

interface Props {
    hook: (src: string) => void
    src?: string
}

export function InputImg({hook, src}: Props) {

    const imgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            //console.log(e.target.files[0])
            hook(URL.createObjectURL(e.target.files[0]))
            //console.log(URL.createObjectURL(e.target.files[0]))
        }
    }

    return <div style={src ? {backgroundImage: `url(${src})`} : {}} className={styles['container-input']}>
        <input className={styles['input']} onChange={imgChange} accept="image/png, image/jpeg" type='file'></input>
    </div>
}