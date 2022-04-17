import router from '@/router'
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.huangyihui.cn:8888',
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    // 如果有token，就将token放在请求头中发送过去
    if(token) config.headers.token = token
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const {status, msg} = response.data
    
    if(status === '401') {
      // console.log('拦截器', msg)
      localStorage.setItem('token', '')
      router.push({name: 'Login'})
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export {
  request
}