<template>
  <div id="app">
   <!--将其渲染为一个按钮-->
   <!--加了replace就不能返回-->
   <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <!--默认将其渲染为一个a标签-->
   <router-link to="/about" replace active-class="active">关于</router-link>
   <!--第一种菜单数据的方式-->
   <router-link v-bind:to="'/user/'+userId" replace active-class="active">用户</router-link>
    <!--第二种菜单数据的方式-->
    <router-link :to="{path:'/profile',query:{name:'zs',age:23}}" replace active-class="active">档案</router-link>
    <!--采用按钮的方式-->
    <button @click="btnProFile">档案</button>
   <!--加了这个标签,里面的组件就不会多次创建(创建完之后,就不会销毁),要不然组件活跃就创建,不活跃就会被销毁-->
   <!--exclude为排除的意思(意思是home和about组件就不使用keep-alive了)-->
    <keep-alive exclude="about">
      <router-view></router-view>
    </keep-alive>

<!-- <button @click="btnHome">首页</button>
    <button @click="btnAbout">关于</button>
    <router-view></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:"lisi"
    }
  },
  methods:{
    //通过代码的方式修改地址
    btnHome(){
      this.$router.push("/home")
    },
    btnAbout(){
      this.$router.push("/about")
    },
    btnProFile(){
      this.$router.push({
        path:"/profile",
        query:{
          name:"zs",
          age:23
        }
      })
    }
  }

}
</script>
<style>
.active {
  color: #f00;
}
</style>
