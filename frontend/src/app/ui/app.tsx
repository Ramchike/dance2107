import styles from './style.module.scss'
import { useContext, useState} from 'react'
import {Auth} from '../../pages'
import { UserContext } from '../providers'
import { editIcon, feedIcon, historyIcon, NavBar, NavIcon } from '../../shared'
import { Router } from '../router/router'

export type Page = 'feed' | 'history' | 'edit'

export function App() {
  const {user} = useContext(UserContext)
  const [page, setPage] = useState<Page>('feed')

  if (user === undefined) {
    return <>Загрузка</>
  } 
  else if (user === null) {
    return <Auth/>
  } 
  else {

    const buttons: NavIcon[] = [
      {src: editIcon, hook: () => setPage('edit'), active: page == 'edit'},
      {src: feedIcon, hook: () => setPage('feed'), active: page == 'feed'},
      {src: historyIcon, hook: () => setPage('history'), active: page == 'history'},
    ]

    return <main className={styles['main']}>
      <NavBar buttons={buttons}/>
      <Router page={page} focus={user.focus_user}/>
    </main>
  }
}

