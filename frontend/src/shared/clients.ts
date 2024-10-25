import axios from "axios";
import { API_URL } from "./config";

export const UserClient = axios.create({
    baseURL: API_URL+'/user',
})

UserClient.interceptors.request.use(config => {
    config.headers['Tg-Authorization'] = 1
    return config
})

export const AttachmentsClient = axios.create({
    baseURL: API_URL+'/attachments'
})