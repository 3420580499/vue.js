import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
/*axios({
  url:"http://123.207.32.32:8000/home/multidata",
  params:{
    type:"pop",
    page:3
  }
}).then(result =>{
  console.log(result);
})*/


//axios处理并发请求
/*axios.all([
  axios({
    url:"http://123.207.32.32:8000/home/multidata"
  }),
  axios({
    url:""
  })
]).then(result =>{
  console.log(result);
})*/

//像这样写的都是全局配置
//后面的url就会拼接上这个baseURL
//axios.defaults.baseURL="http://123.207.32.32:8000"
//设置超时时间
/*axios.defaults.timeout=5000
axios.all([
  axios({
    url:"/home/multidata"
  }),
  axios({
    url:"/home/multidata"
  })
]).then(axios.spread((res1,res2) =>{
  console.log(res1);
  console.log(res2);
}))*/

//单独配置
/*const instance1=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
})
instance1({
  url:"home/multidata"
}).then(res =>{
  console.log(res);
})*/

//封装request模块
import {request} from "./network/request";
/*request({
  url:"/home/multidata"
},res =>{
  console.log("成功");
  console.log(res);
},error =>{
  console.log("失败");
  console.log(errot);
})*/
request({
  url:"/home/multidata"
}).then(res =>{
  console.log("成功");
  console.log(res);
}).catch(error =>{
  console.log(erro);
})


