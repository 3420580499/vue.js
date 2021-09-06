<template>
<!--TabBar看作是个插槽,TabBarItem也看作是一个插槽 -->
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
import MainTabBar from "components/MainTabBar";
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem,
    MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css";
</style>
