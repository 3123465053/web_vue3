<template>
    <h1>接受插槽</h1>
    <!--msg 传递数据给父组件 父组件在传回来 -->
    <slot name="heard" :msg="msg"></slot>
    <slot name="main"></slot>
</template>
<script>
 export default{
    data(){
        return{
            msg:"消息"
        }
    }
 }
</script>