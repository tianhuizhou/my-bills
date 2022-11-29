import axiosHelper from './axios_helper'

const APIURL = process.env.REACT_APP_API

function getHeaders(use_token = true) {
  const headers = []
  headers.push({ 'Content-Type': 'application/json' })

  const user = JSON.parse(localStorage.getItem('MyBillUser') || '{}')
  const auth_token = user.auth_token

  if (auth_token && use_token) headers.push({ 'Authorization': `Bearer ${auth_token}` })
  return Object.assign({}, ...headers)
}

export default {
  register(username: string, password: string) {
    const url = `${APIURL}/register`
    const body = { 'username': username, password: password }
    return axiosHelper(url, {}, body, 'POST', getHeaders(false))
  },
  login(username: string, password: string) {
    const url = `${APIURL}/login`
    const body = { 'username': username, password: password }

    return axiosHelper(url, {}, body, 'POST', getHeaders(false))
  },
  logout() {
    const url = `${APIURL}/logout`
    return axiosHelper(url, {}, {}, 'POST', getHeaders())
  },
  tokenValidation() {
    const url = `${APIURL}/token_validation`
    return axiosHelper(url, {}, {}, 'POST', getHeaders())
  },
}
