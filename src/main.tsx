import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AppRoot, FixedLayout} from "@telegram-apps/telegram-ui";
import Footer from './widgets/footer/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <AppRoot>
    <App />
    <FixedLayout>
      <Footer setWidget={setWidget}></Footer>
    </FixedLayout>
  </AppRoot>,
)
function setWidget(widget: Widget): void {
  throw new Error('Function not implemented.');
}

