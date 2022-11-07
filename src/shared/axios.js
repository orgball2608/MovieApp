import axios from 'axios'
import { API_URL } from './constants'

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: 'd2e68036fdaa17368b7194f3b45252c8'
  }
})

export default instance
