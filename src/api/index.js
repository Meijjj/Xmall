import axios from './public'

// 用户登录
export const userLogin = (params) => {
  return axios.fetchPost('/member/login', params)
}
// 用户信息
export const userInfo = (params) => {
  return axios.fetchGet('/member/checkLogin', params)
}
// 首页接口
export const productHome = (params) => {
  return axios.fetchGet('/goods/home', params)
}
// 退出登录
export const loginOut = (params) => {
  return axios.fetchGet('/member/loginOut', params)
}
// 极验验证码
export const geetest = (params) => {
  return axios.fetchGet('/member/geetestInit?t=' + (new Date()).getTime(), params)
}
// 注册账号
export const register = (params) => {
  return axios.fetchPost('/member/register', params)
}
// 推荐板块
export const recommend = (params) => {
  return axios.fetchGet('/goods/recommend', params)
}
// 捐赠板块
export const thank = (params) => {
  return axios.fetchGet('/goods/thank', params)
}
// 捐赠列表
export const thanksList = (params) => {
  return axios.fetchGet('/member/thanks', params)
}
