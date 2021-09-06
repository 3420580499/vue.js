<template>
 <div>
   <h3>我是用户组件</h3>
   <!--当前活跃的,获取路径信息-->
   <h3>{{$route.params.userId}}</h3>
   <!--通过计算属性的方式-->
   <h3>{{userId}}</h3>
 </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
