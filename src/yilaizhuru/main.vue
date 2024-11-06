<template>
    <h2>main</h2>
    <parent/>
</template>

<script>
import parent from './parent.vue';

export default{

    components:{
        parent
    },

    provide(){
        return{
            msg:"跨级传递数据"
        }
    }
}
</script>