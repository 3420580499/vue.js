const {sum,ride} =require("./js/mathUtils")
console.log(sum(12,35))
console.log(ride(10, 10));
//依赖于css文件
require("./css/color.css")
//依赖于less文件
require("./css/font.less")
document.writeln("<h2>看我,看我</h2>")
//使用Vue进行开发
import Vue from "vue"
/*import App from "./vue/info.js"*/
import App from "./vue/info.vue"
const vm = new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    "App":App
  }
})




/*const App={
  template:`
    <h2>{{message}}</h2>
  `,
  data(){
    return{
      message:"hello webpack!!!"
    }
  }
}
const vm = new Vue({
  el:"#app",
  template:"<App/>",
  components:{
    "App":App
  }
})*/




/*
const vm = new Vue({
  el:"#app",
  //会将模板标签直接覆盖被挂载的标签
  template:`
    <h2>{{message}}</h2>
  `,
  data:{
    message:"hello webpack!!!"
  }
})*/
