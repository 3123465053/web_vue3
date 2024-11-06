<template>
<p ref="name">vue基础</p>

</template>

<script>
 export default{
    mounted(){
        //在这里做数据请求
        //渲染完成之后才能拿到dom 相关内容
        console.log(this.$refs.name)
    }
 }
</script>