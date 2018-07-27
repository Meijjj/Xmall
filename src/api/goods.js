import axios from './public'
// 商品列表
export const getAllGoods = (params) => {
  return axios.fetchGet('/goods/allGoods', params)
}
// 获取购物车列表
export const getCartList = (params) => {
  return axios.fetchPost('/member/cartList', params)
}
// 删除整条购物车
export const cartDel = (params) => {
  // return asxios.fetchPost('/member/cartDel', params)
}
// 加入购物车
export const addCart = (params) => {
  return axios.fetchPost('/member/addCart', params)
}
// 快速搜索
export const getQuickSearch = (key) => {
  return axios.fetchQuickSearch(`http://123.207.97.17:9201/item/itemList/_search?q=productName:` + key)
}
