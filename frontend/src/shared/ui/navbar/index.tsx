import styles from './style.module.scss'

interface Props {
    buttons: NavIcon[]
}

export type NavIcon = {
    src: string
    hook: () => void
    active: boolean
}

export function NavBar({buttons}: Props) {
    
    const buttonsList = buttons.map(button => {
        return <button data-active={button.active ? 'YES' : 'NO'} className={styles['icon-button']} onClick={button.hook}>
            {button.src}
        </button>
    })

    return <nav className={styles['navigation-bar']}>
        {buttonsList}
    </nav>
}