// 1.导入axios
import axios from 'axios'

// 2.导出实例
// 不使用default是为了增加项目的扩展性，可能在项目当中存在多个axios实例要导出
export function request(config){
  // 3.创建项目实例
  const instance  = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  })

  // 拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config
  },err => {
    // console.log(err);
    return err
  })
    // 拦截器
    instance.interceptors.response.use(config => {
      // console.log(config);
      return config
    },err => {
      // console.log(err);
      return err
    })
  // 4.发送真正的网络请求
  return instance(config)
}