//配置路由相关信息
import VueRouter from "vue-router"
import Vue from "vue"
/*import Home from "../components/home"
import About from "../components/about"
import User from "../components/User"*/

//使用懒加载的方式(用到那个组件再加载哪个组件)
//而不是全部加载(可以提高用户的效率)
//同时打包后的dist文件夹中也会比上面多出3个js文件
//app开头的是你写的代码(业务代码),manifest开头的是项目底层支撑的代码,vendor开头的是第三方框架
const Home = () => import("../components/home")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")
const About = () => import("../components/about")
const User = () => import("../components/user")
const ProFile = () => import("../components/ProFile")
//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

const routes =[
  //映映关系
  {
    path:"",
    redirect:"/home"
  },
  {
   path:"/home",
   component:Home,
   meta:{
     title:"首页"
   } ,
    //配置子路由
   children :[
     {
       path :"",
       redirect:"news"
     },
     {
       path :"news",
       component:HomeNews
     },
     {
       path :"message",
       component:HomeMessage
     }
   ]
  },
  {
    path:"/about",
    component:About
  },
  {
    path:"/user/:userId",
    component:User,
    meta:{
      title:"用户"
    } ,

  },
  {
    path:"/profile",
    component:ProFile
  }

]
//创建VueRouter对象
//$router就是表示这个对象
//$route表示的是当前活跃的路由(就是上面选中的路径和组件)
const router = new VueRouter({
  //配置路由和组件的应用关系
  routes,
  //hash.location="about"
  //history.pushState="about"
  //history.replaceState="about"(不能返回)
  //可以通过"hash"和"history"来改变地址(这里采用history)
  mode:"history",
  //这里也可以写一个linkActiveClass,表示活跃时class的名字

})
//此用来显示标题
//前置钩子(hook)(在路由跳转之前改变标题)
//在进入路由前调用
router.beforeEach((to,from,next) =>{
  //从from跳转到to
  //本来不用.matched[0]的,因为首页嵌套了路由
  document.title = to.matched[0].meta.title
  //跳转到下一个钩子(不能不写)
  next()
})
//后置钩子
router.afterEach((to,fro,next) =>{

})
//3.将router对象传入到vue实例中
export default router

/*
const obj ={
  name:"zs"
}
//调用这个方法个obj添加属性
Object.defineProperty(obj,age,32)*/
