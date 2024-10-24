import { useContext} from 'react'
import Auth from '../pages/auth/ui/auth'
import { UserContext } from './providers'

export type Widget = 'profile' | 'browsing'

export default function App() {
  const {user} = useContext(UserContext)
  if (user === undefined) {
    console.log(user)
    return <>Загрузка</>
  } else if (user === null) {
    return <Auth></Auth>
  }
  return <>1231231212312</>
}

