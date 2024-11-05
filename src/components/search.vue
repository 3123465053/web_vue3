<template>
  搜索：<input type="text" v-model="searchKey"/>
</template>


<script>
export default{
    data(){
        return{
            searchKey:""
        }
    },
    watch:{
        searchKey(newValue,oldValue){
            this.$emit('searchEvent',newValue)
        } 
    }
}
</script>