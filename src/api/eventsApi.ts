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

export const addFormField = (data) => (
    api.post('/form-schema', data).then(res => res.data)
)

export const removeFormField = (id) => (
    api.delete(`/form-schema/${id}`).then(res => res.data)
)