import axios from 'axios'

const BaseUrl = "https://a396-189-57-188-42.ngrok.io"

export const api = axios.create({
    baseURL: BaseUrl,
})