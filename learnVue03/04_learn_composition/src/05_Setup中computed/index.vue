<template>
  <div>
    {{count}}
    <button @click="btnClick">+1</button>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  let count = ref(0)
  
  computed(()=>{
    console.log(count.value,"===")
  })
  
  const btnClick =()=>{count.value++}
</script>

<style lang="scss" scoped>

</style>