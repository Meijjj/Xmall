import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('/page/index')
const Home = () => import('/page/Home/home')
const Login = () => import('/page/Login/login')
const Register = () => import('/page/Login/register')
const GoodS = () => import('/page/Goods/goods')
const goodsDeatils = () => import('/page/Goods/goodsDetails.vue')
const Thanks = () => import('/page/Thanks/thanks')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'goods', component: GoodS},
        {path: 'goodsDetails', name: 'goodsDeatils', component: goodsDeatils},
        {path: 'thanks', name: 'thanks', component: Thanks}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/register', name: 'register', component: Register},
    {path: '*', redirect: '/home'}
  ]
})
