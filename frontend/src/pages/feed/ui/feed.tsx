import { FocusUser } from "../../../entities";

interface Props {
    focus: FocusUser
}

export function Feed({focus}: Props) {
    return <>{focus.name}</>
}