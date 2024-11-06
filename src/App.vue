<template>
  <!-- 显示组件 -->
<!-- <Exercise/> -->
<!-- <Parent/> -->
<!-- <Test/> -->
 <!-- <Main/> -->
 <!-- <VFor/> -->
  <!-- <componentsA/> -->
   <!-- <soltA/> -->
    <!-- <shengmingzhouqi/> -->
  <!-- <zujianqiehuan/> -->
   <mains/>
</template>

<script>
//1. 引入组件
 import Exercise from './components/exercise.vue';
 import Parent from './components/parent.vue';
 import Main from './components/main.vue';
 import vFor from './components/v-for.vue';
 import componentsA from './components/componentsA.vue';
 import soltA from './solt/soltA.vue';
 import shengmingzhouqi from './components/shengmingzhouqi.vue';
 import zujianqiehuan from './components/zujianqiehuan.vue';
 import mains from './yilaizhuru/main.vue';

 /*
组件生命周期
 创建期：beforeCreate created
挂载期：beforeMount mounted
更新期：beforeUpdate updated
銷毀期：beforeUnmount unmounted
*/ 
 export default{
  //2.注入组件
  components:{
  Exercise,
  Parent,
  Main,
  vFor,
  componentsA,
  soltA,
  shengmingzhouqi,
  zujianqiehuan,
  mains
  },
  beforeCreate(){
    console.log("创建前调用")
  },
  created(){
    console.log("创建后调用")
  },
  beforeMount(){
    console.log("渲染前调用")
  },
  mounted(){
    console.log("渲染后调用")
  },
  beforeUpdate(){
    console.log("更新前调用")
  },
  updated(){
    console.log("更新后调用")
  },
  beforeUnmount(){
    console.log('销毁前调用')
  },
  unmounted(){
    console.log("销毁后调用")
  }
 }

</script>
<style></style>