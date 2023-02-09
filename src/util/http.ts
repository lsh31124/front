import axios from 'axios'

const instance = axios.create({
  baseURL: 'BEdomain',
  timeout: 5000, // 5sec
})
// 추후 인터셉터 추가 예정.

export default instance
