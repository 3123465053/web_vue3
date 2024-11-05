<template>
    <H3>Child</H3>
    <p>{{ data }}</p>
    <button @click="childClick">向父容器传递数据</button>
</template>

<script>
export default{
    //props:['data']
    props:{
        data:{           //传递过来的数据是只读的 不能改变
          //  type:String
        type:[String,Number],  //两种类型都可以
        required:true,        //必传
        default:"默认标题",
        //  default(){       //是数组或者对象 应用工厂函数形式返回
        //     return []
        //  }
        }
    
    },
    methods:{
        childClick(){
            //第一个参数方法名 第二个参数为要传递的数据（回调函数）
            this.$emit("someEvent","子容器参数")
        }
    }
}
</script>