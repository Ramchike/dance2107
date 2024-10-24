import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import UserProvider from './providers/userProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <UserProvider>
        <App/>
    </UserProvider>
)


