import axios from 'axios'

const BaseURl = "https://fed0-189-57-188-42.ngrok-free.app"
// const BaseURl = "https://ofelipemeira.pythonanywhere.com/"

export const api = axios.create({
    baseURL: BaseURl,
})