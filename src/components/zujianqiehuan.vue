<template>
    <!-- 用来承载显示那个组件 -->
  <KeepAlive>
    <component :is="tabCompontent"></component>
  </KeepAlive>
  <button @click="chnageCompontent">切换组件</button>
</template>
<script>
import { defineAsyncComponent } from 'vue';
import comA from './comA.vue';

//异步加载组件 需要的时候在加载
const comB=defineAsyncComponent(()=>
    import('./comB.vue'))

export default{
    components:{
        comA,
        comB
    },
    data(){
        return{
            tabCompontent:"comA"
        }
    },
    methods:{
        chnageCompontent(){
            this.tabCompontent=this.tabCompontent=="comA"?"comB":"comA"
        }
    },
   
}
</script>