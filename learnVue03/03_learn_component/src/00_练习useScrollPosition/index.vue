<template>
  <div class="index">
    <div class="box">{{message}}-{{scrollX}}--{{scrollY}}</div>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import useScrollPosition from './hooks/useScrollPosition'
  const {scrollX,scrollY} = useScrollPosition()
  const message = ref("hello")
</script>

<style scoped>
  .index {
    height: 5000px;
  } 
  .box {
    position: fixed;
    top:0;
  }
</style>