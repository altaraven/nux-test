import axios from 'axios'
// import qs from 'qs'
// import _ from 'lodash'

export function postMakeBet (hash) {
    return axios.post(`/api/v1/bet/make`, { hash })
}

export function loadBetsHistory (hash) {
    return axios.get(`/api/v1/bet/${hash}/history`)
}
