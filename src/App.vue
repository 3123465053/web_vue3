<template>
  <!-- 显示组件 -->
<!-- <Exercise/> -->
<!-- <Parent/> -->
<!-- <Test/> -->
 <!-- <Main/> -->
 <!-- <VFor/> -->
  <!-- <componentsA/> -->
   <soltA/>
</template>

<script>
//1. 引入组件
 import Exercise from './components/exercise.vue';
 import Parent from './components/parent.vue';
 import Main from './components/main.vue';
 import vFor from './components/v-for.vue';
 import componentsA from './components/componentsA.vue';
 import soltA from './solt/soltA.vue';
 export default{
  //2.注入组件
  components:{
  Exercise,
  Parent,
  Main,
  vFor,
  componentsA,
  soltA
  
  }
 }
</script>
<style></style>