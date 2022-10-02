import axios from "axios"
import { API_BASE_URL } from "../constants"

const api = axios.create({ baseURL: API_BASE_URL });

export const getEvents = () => (
    api.get('/events').then(res => res.data)
)

export const createEvent = (data) => (
    api.post('/events', data).then(res => res.data)
)

export const getFormSchema = () => (
    api.get('/form-schema').then(res => res.data)
)