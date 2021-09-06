<template>
  <div id="app">
    {{result}}
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return{
      result:''
    }
  },
  components: {

  },
  /*当App组件被创建好时发起网络请求*/
  created(){
    const instance1=axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    instance1({
      url:"home/multidata"
    }).then(res =>{
       this.result = res
    })
  }
}
</script>

<style>

</style>
