import {
  INIT_BUYCART,
  ADD_CART,
  // GET_USERINFO,
  RECORD_USERINFO,
  ADD_ANIMATION,
  SHOW_CART
  // REDUCE_CART,
  // EDIT_CART
} from './mutation-types'
import { setStore, getStore } from '../utils/storage'

export default {
  // 网页初始化本地缓存获取购物车数据
  [INIT_BUYCART] (state) {
    let initCart = getStore('buycart')
    if (initCart) {
      state.cartList = JSON.parse(initCart)
    }
  },
  // 加入购物车
  [ADD_CART] (state, {productId, salePrice, productName, productImg, productNum = 1}) {
    let cart = state.cartList
    let falg = true
    let goods = { productId, salePrice, productName, productImg }
    if (cart.length) {
      cart.forEach(item => {
        if (item.productNum >= 0) {
          falg = false
          item.productNum += productNum
        }
      })
    }
    if (!cart.length || falg) {
      goods.productNum = productNum
      goods.checked = '1'
      cart.push(goods)
    }
    state.cartList = cart
    setStore('buyCart', cart)
  },
  // 加入购物车动画
  [ADD_ANIMATION] (state, {moveShow, elLeft, elTop, img, cartPositionT, cartPositionL, receiveInCart}) {
    state.showMoveImg = moveShow
    if (elLeft) {
      state.elLeft = elLeft
      state.elTop = elTop
    }
    state.moveImgUrl = img
    // 是否进入购物车
    state.receiveInCart = receiveInCart
    if (cartPositionT) {    // 购物车的位置
      state.cartPositionT = cartPositionT
      state.cartPositionL = cartPositionL
    }
  },
  [SHOW_CART] (state, {showCart}) {
    state.showCart = showCart
  },
  [RECORD_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.mesage) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  }
}
