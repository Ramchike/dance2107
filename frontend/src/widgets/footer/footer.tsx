import {TabbarItem} from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem";
import {Widget} from "../../App.tsx";
import {Icon28Heart} from "@telegram-apps/telegram-ui/dist/icons/28/heart";
import {Icon28Attach} from "@telegram-apps/telegram-ui/dist/icons/28/attach";
import {Tabbar} from "@telegram-apps/telegram-ui";

interface Props {
    setWidget: (widget: Widget) => void;
}

export default function Footer({setWidget}: Props) {
    return <Tabbar>
        <TabbarItem text="Лента">
            <Icon28Heart/>
        </TabbarItem>
        <TabbarItem text="Моя анкета">
            <Icon28Attach/>
        </TabbarItem>
    </Tabbar>
}