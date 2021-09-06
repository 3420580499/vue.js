<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="blue">
<!--src为html标签属性,及时加了别名也要在前面加个~号,否则加载不出图片      -->
      <img slot="item-icon" src="~assets/img/tabbar/login.svg"  alt=""/>
      <img slot="item-icon-active" src="~assets/img/tabbar/login_active.svg" alt=""/>
      <!--这里的代码会直接覆盖掉插槽(所以插槽要用div包裹)-->
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="red">
      <img slot="item-icon" src="../assets/img/tabbar/classification.svg"  alt=""/>
      <img slot="item-icon-active" src="../assets/img/tabbar/classification_active.2.svg" alt=""/>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="yellow">
      <img slot="item-icon" src="../assets/img/tabbar/cart.svg"  alt=""/>
      <img slot="item-icon-active" src="../assets/img/tabbar/cart_active.svg" alt=""/>
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="green">
      <img slot="item-icon" src="../assets/img/tabbar/mine.svg"  alt=""/>
      <img slot="item-icon-active" src="../assets/img/tabbar/mine_active.svg" alt=""/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
