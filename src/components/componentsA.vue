<template>
<h2>ComponentsA</h2>
<p>{{ msg }}</p>
 <componentsB title="标题" :onEvent="fun"></componentsB>
</template>
<script>
import componentsB from './componentsB.vue'

export default{
    data(){
  return {
    msg:""
  }
    },
    components:{
        componentsB
    },
    methods:{
        fun(data){
            this.msg=data
            console.log(data)
        }
    }
    
    
}
</script>