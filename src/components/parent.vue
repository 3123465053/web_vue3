<template>
    <H3>Parent</H3>
    <!-- 字符串、列表等都可以传递 -->
    <Child data="父容器传过来的数据" @someEvent="parentClick" />
</template>

<script>
import Child from './child.vue';
export default{
    components:{
        Child
    },
    methods:{
        parentClick(e){
         console.log(e)   
        }
    }
}
</script>