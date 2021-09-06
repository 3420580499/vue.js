<template>
  <div>
    <h3>我是首页</h3>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      path:"/home/news"
    }
  },
  //组件创建时
  created(){
    console.log("home组件创建");
  },
  //组件销毁时
  destroyed() {
    console.log("home组件销毁");
  },
  //组件活跃时
  //这两个函数,只有该组件被保持了状态使用了keep-alive时,才是有效的
  activated() {
    this.$router.push(this.path)
  },
/*  //组件不活跃时
  deactivated() {
    this.path = this.$route.path
  },*/
  //在离开当前活跃的组件之前
  beforeRouteLeave(to,from,next) {
    this.path = this.$route.path
    next();
  }
  /*
  *要实现的功能:用户点击消息后,再点击档案,回来首页的时候,显示的仍然是消息
  * activated和 deactivated要配合使用的话,就一定要关掉keep-alive,因为用来他,activated就不起重要了
  * */
}
</script>

<style scoped>

</style>
