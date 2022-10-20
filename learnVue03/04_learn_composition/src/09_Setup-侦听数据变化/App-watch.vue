<!--
 * @Author: coderstr 3420580499@qq.com
 * @Date: 2022-08-23 09:21:17
 * @LastEditors: coderstr 3420580499@qq.com
 * @LastEditTime: 2022-10-15 09:41:06
 * @FilePath: \coderwhy vip 课程\vue-code\04_learn_composition\src\09_Setup-侦听数据变化\App-watch.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by coderstr 3420580499@qq.com, All Rights Reserved. 
-->
<template>
  <div>AppContent</div>
  <button @click="message = '你好啊,李银河!'">修改message</button>
  <button @click="info.friend.name = 'james'">修改info</button>
</template>

<script>
  import { reactive, ref, watch } from 'vue'

  export default {
    setup() {
      // 1.定义数据
      const message = ref("Hello World")
      const info = reactive({
        name: "why",
        age: 18,
        friend: {
          name: "kobe"
        }
      })

      // 2.侦听数据的变化
      watch(message, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })
      //不要这样写
      // wetch(info.name,()=>{}) 
      //可以这样写
      watch(()=>info.name,()=>{})
      watch(info, (newValue, oldValue) => {
        console.log(newValue, oldValue)
        console.log(newValue === oldValue)
      }, {
        immediate: true
      })

      // 3.监听reactive数据变化后, 获取普通对象
      watch(() => ({ ...info }), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        immediate: true,
        deep: true
      })

      return {
        message,
        info
      }
    }
  }
</script>

<style scoped>
</style>

