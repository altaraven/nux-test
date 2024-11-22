import axios from 'axios'

export function postMakeBet (hash) {
    return axios.post(`/api/v1/bet/make`, { hash })
}

export function loadBetsHistory (hash) {
    return axios.get(`/api/v1/bet/${hash}/history`)
}
