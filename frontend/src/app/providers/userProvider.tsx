import { createContext, ReactNode, useEffect, useState } from "react";
import { getUser, User } from "../../entities";

interface IChildren {
    children: ReactNode;
}

interface Props {
    user: User | undefined | null;
    updateUser: () => void;
}

export const UserContext = createContext<Props>({} as Props);

export default function UserProvider({ children }: IChildren) {

    const [user, setUser] = useState<User | undefined | null>(undefined);

    const updateUser = () => {
        getUser().then(setUser)
        console.log(user)
    }

    useEffect(() => {
        updateUser();
    }, []);

    useEffect(() => {
        console.log(user)
    }, [user])
    
    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}