<template>
<div>
  <h3>我是profile组件</h3>
  <h3>{{$route.query.name}}</h3>
  <h3>{{$route.query.age}}</h3>
</div>
</template>

<script>
export default {
  name: "ProFile"
}
</script>

<style scoped>

</style>
