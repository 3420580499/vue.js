import Vue from "vue"
import vuex from "vuex"
import {INCREMENT} from "./mutations-types";

//相当于给Vue定义了个$store属性
//Vue.prototype.$store =store
Vue.use(vuex)

const moudleA ={
  state:{},
  mutations:{},
  getters:{},
  actions:{}
}

const store =new vuex.Store({
  /*共享状态*/
  /*这里的数据都会放到响应式系统中*/
   state:{
     count:0,
     students:[{name:"zs",age:11},{name:"ls",age:21}],
     info:{
       name:"马文",
       age:32
     }
   },
  /*修改状态(要修改state一定要通过mutations)*/
  mutations:{
     /*这里会自动传入上面的state*/
    //用其他的变量名统一代替
    [INCREMENT](state){
       state.count++
     },
     decrement(state){
       state.count--
     },
    addStudent(state,stu){
       state.students.push(stu)
    },
    updateInfo(state){
       state.info.name="假的马文"

      //这里不能进行异步操作
      /*setTimeout(() =>{
        state.info.name="假的马文"
      },1000)*/
      /*新增属性做不到*/
      //即使devtools监听到了,界面也不会修改
     // state.info["address"] = "地址"
    /* state.info.address="地址"*/
      //Vue.set(state.info,"address","地址")
     // delete state.info.age
    }

  },
  //类似于计算属性(处理数据是一般用计算属性)
  getters:{
    more20(state,getter){
      return state.students.filter((s) => s.age>20 )
    }
  },
  /*异步操作*/
  /*context:上下文(这里先看做store)*/
  actions:{
    /*aupdateInfo(context,payload){
      setTimeout(() =>{
        /!*说了更新数据就用mutations(要不然跟踪不到)*!/
       context.commit("updateInfo")
      },1000)
    }*/
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);

          resolve('1111111')
        }, 1000)
      })
    }
  },
  /*这里可以添加其他的*/
  modules:{
    a:moudleA
  }
})
export default store
