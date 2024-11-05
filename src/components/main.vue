
<template>

<Search @searchEvent="getData"/>
<p>{{ key }}</p>
</template>

<script>
import Search from './search.vue';

export default{
     data(){
        return{
            key:""
        }
     },
    components:{Search},
    methods:{
        getData(e){
           this.key=e
           }
    }
    
}

</script>