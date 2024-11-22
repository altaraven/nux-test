import axios from 'axios'

export function postGenerateGameLink (userName, phoneNumber) {
    return axios.post(`/api/v1/link/create`, { userName, phoneNumber })
}

export function postReGenerateGameLink (hash) {
    return axios.post(`/api/v1/link/re-generate`, { hash })
}

export function postDeactivateGameLink (hash) {
    return axios.put(`/api/v1/link/deactivate`, { hash })
}

export function loadGameLinkData (hash) {
    return axios.get(`/api/v1/link/${hash}/view`)
}
