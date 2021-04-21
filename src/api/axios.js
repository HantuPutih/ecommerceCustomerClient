import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jualan-admin.herokuapp.com/' // 'http://localhost:3000'
})

export default instance
