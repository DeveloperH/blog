import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.huangyihui.cn:8888',
  timeout: 5000
})

export {
  request
}