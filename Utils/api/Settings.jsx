import axios from 'axios'

const BaseURl = "https://2fc2-189-57-188-42.ngrok-free.app"
// const BaseURl = "https://ofelipemeira.pythonanywhere.com/"

export const api = axios.create({
    baseURL: BaseURl,
})