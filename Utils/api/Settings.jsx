import axios from 'axios'

const BaseUrl = "https://9c6f-189-57-188-42.ngrok-free.app"

export const api = axios.create({
    baseURL: BaseUrl,
})