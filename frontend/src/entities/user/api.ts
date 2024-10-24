import { UserClient } from "../../shared";
import { User } from "./model";

export async function getUser(): Promise<User|null> {
    return UserClient.get('/').then(
        response => {
            return response.data
        }
    ).catch(error => {
        return null
    })
}