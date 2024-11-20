import axios from 'axios'
// import qs from 'qs'
// import _ from 'lodash'

export function postGenerateGameLink (userName, phoneNumber) {
    return axios.post(`/api/v1/link/generate`, { userName, phoneNumber })
}
