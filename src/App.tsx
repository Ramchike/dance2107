import { useState } from 'react'
import {ProfileWidget} from "./widgets/profile/profile.tsx";
import {FixedLayout} from "@telegram-apps/telegram-ui";
import Footer from "./widgets/footer/footer.tsx";

export type Widget = 'profile' | 'browsing'

function App() {
  const [widget, setWidget] = useState<Widget>('browsing');
  return <>
    <ProfileWidget></ProfileWidget>
    <FixedLayout>
      <Footer setWidget={setWidget}></Footer>
    </FixedLayout>
  </>
}

export default App
