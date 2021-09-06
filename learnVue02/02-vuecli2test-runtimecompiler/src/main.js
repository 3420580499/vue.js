// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const cnv ={
  template:"<div>{{message}}</div>",
  data(){
    return{
      message:"cnv标签"
    }
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'

 //采用render()函数的方法:
 /* render(createElement) {
    //标签,属性,内容(里面还可以写标签)
    return createElement("h2",{class:"box"},["h2标签"])
  }*/

 /* render(createElement) {
    return createElement(cnv)
  }*/
})
/*
*那么.vue文件中的template是由谁处理的了?
* 是由vue-template-compiler
* runtime-compiler
* template->ast->render->vDom->UI
*
* runtime-only(1.性能更高,2.所需的代码量更少)
* render->vDom->UI
* */
