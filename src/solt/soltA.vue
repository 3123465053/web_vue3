<template>
<h2>插槽传递组建</h2>
<soltB>
    <!-- 简写#head -->
    <template #heard="slotProps">
        <p>传递组建1{{ slotProps.msg }}</p>
    </template>
    <template v-slot:main>
        <p>传递组件2</p>
    </template>
</soltB>
</template>
<script>
import soltB from './soltB.vue';

export default{
    
    components:{
        soltB
    }
}

</script>