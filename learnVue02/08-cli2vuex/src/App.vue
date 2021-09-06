<template>
  <div id="app">
    <h2>数量{{$store.state.count}}</h2>
    <h2>数量{{$store.state.students}}</h2>
    <h2>数量{{$store.state.info}}</h2>
    <h2>age大于20{{$store.getters.more20}}</h2>
<!--    <button @click="$store.state.count++">+</button>
    <button @click="$store.state.count&#45;&#45;">-</button>-->
    <button @click="add">+</button>
    <button @click="notadd">-</button>
    <button @click="incrementStu">增加学生</button>
    <button @click="updateFo">更新info</button>
    <button @click="appupdateFo">使用action异步操作</button>
  </div>
</template>

<script>
import {INCREMENT} from "./store/mutations-types";

export default {
  name: 'App',
  data(){
    return {
      message:"我是App组件"
    }
  },
  methods:{
    add(){
      this.$store.commit(INCREMENT)
    },
    notadd(){
      this.$store.commit("decrement")
    },
    incrementStu(){
      //payload是负载,你要传进去的参数
      this.$store.commit("addStudent",{name:"ww",age:23})
    },
    updateFo(){
      this.$store.commit("updateInfo")
    },
    appupdateFo(){
      /*使用action处理异步操作*/
      //this.$store.dispatch("aupdateInfo")
      this.$store.dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里面完成了提交');
          console.log(res);
        })
    }

  }
}
</script>

<style>

</style>
