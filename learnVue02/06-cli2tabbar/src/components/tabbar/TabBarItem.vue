<template>
<div class="tab-bar-item" @click="btnClick">
<!--这里为啥还要写div,目的是防止覆盖掉插槽属性 -->
  <div v-if="isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
<!--<div :class="{active:!isActive}"><slot name="item-text"></slot></div>-->
  <div :style="isActiveStyle"><slot name="item-text"></slot></div>
<!--  <img src="../../assets/img/tabbar/login.svg" >
  <div>首页</div>-->
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    //获取路径
    path:String,
    //获取要显示的颜色
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return {
      /*isActive:false*/
    }
  },
  methods:{
    btnClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) === -1
    },
    isActiveStyle(){

      return this.isActive ? {}:{color:this.activeColor}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px ;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*这样写字体直接显示红色*/
/*.active{
  color: red;
}*/
</style>
