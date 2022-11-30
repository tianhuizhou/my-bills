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
  getBankAccount() {
    const url = `${APIURL}/bank_credential`
    return axiosHelper(url, {}, {}, 'GET', getHeaders())
  },

  // Plaid workflow
  createLinkToken() {
    const url = `${APIURL}/plaid/link_token`
    return axiosHelper(url, {}, {}, 'POST', getHeaders())
  },
  exchangeToken(token: string, bank_name: string) {
    const url = `${APIURL}/plaid/access_token`
    const body = { 'public_token': token, 'bank_name': bank_name }
    return axiosHelper(url, {}, body, 'POST', getHeaders())
  },
  getAccountBalance(id: number) {
    const url = `${APIURL}/plaid/balance/${id}`
    return axiosHelper(url, null, null, 'GET', getHeaders())
  },
  getAccountTransactions(id: number, count: number) {
    const url = `${APIURL}/plaid/transactions/${id}`
    const params = { 'count': count }
    return axiosHelper(url, params, {}, 'GET', getHeaders())
  },
}
