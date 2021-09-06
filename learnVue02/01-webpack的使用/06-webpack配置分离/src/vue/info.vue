<template>
  <h2 class="title">{{message}}</h2>
</template>

<script>
export default {
  name: "info",
  data(){
    return{
      message:"你是一条傻狗"
    }
  }
}
</script>

<style scoped>
 .title{
   color: green;
 }
</style>