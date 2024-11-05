<template>
    <!-- <p>模版语法</p>
   <p>{{ msg }}</p> -->
   <!-- 加载html文本 -->
   <!-- <p v-html="rawHtml" ></p>  
   <h2>事件处理</h2>
   <h3>内联事件处理器</h3>
   <button @click="count++">Add</button>
   <p>方法事件处理器</p> -->
   <!-- 注意传递顺序 自定义的写前面 -->
   <!-- <button @click="addCount('消息',$event)">Add</button>
   <p>{{ count }}</p>
   <h4>事件修饰符</h4>
    <a @click.prevent href="https://www.baidu.com">阻止跳转</a>
    <div @click="clickDiv">
        <p @click.stop="clickP">阻止事件冒泡</p>
    </div> -->
    <button @click="addList">添加数据</button>
    <ul>
     <li v-for="item in list">{{item}}</li>
    </ul>
    <!-- 将模版中的计算放到计算属性中 -->
     <!-- 方法和计算属性有相同的结果 但是计算属性有缓存 当结果不变的时候不计算 而函数每次都会计算 -->
    <p>{{getRes}}</p>
    <p>{{getRess()}}</p>
     <!-- 绑定多个类-->
     <p :class="{'active':isActive,'text-danger':hasError }">Class样式绑定1</p>
       <!-- 绑定多个类 另一种写法-->
     <p :class="classObject">Class样式绑定2</p>
     <!-- 绑定数组-->
   <p :class="[arrActive,arrHasError]">Class样式绑定3</p>
     <!-- 嵌套绑定 只能数组嵌套对象 不能对象嵌套数组 -->
      --------------------------
      <!-- 很少用 -->
      <p :style="{color:'red'}">style样式绑定</p>
      <p :style="styleObject">style样式绑定</p>
      ---------------------------
      <!-- 数据变化监听 -->
       <p @click="changeData">{{msg}}</p>
       ------------------------------
       <!-- .lazy 搜索完更新 .trim 去掉空格 .number 数字类型 -->
       <h4>表单输入绑定</h4> 
       <input type='text' v-model="message">
       <p>{{ message }}</p>
       <input type='checkbox' v-model="checkbox">
       <label for='checkbox'>{{checkbox}}</label>
   
       <div ref="container">{{ content }}</div>
       <button @click="getElement">获取元素</button>
   </template>
   
   
   
   <script >
   
   export default{
     data(){
       return{
         msg:"大家好",
         message:"",
         rawHtml:"<a href=https://www.baidu.com>百度<a>",
         count:0,
         list:['1','2','3','4'],
         isActive:true,
         hasError:true,
         classObject:{
           'active':true,
           'text-danger':false 
         },
         arrActive:'active',
         arrHasError:'text-danger',
         styleObject:{
         color:"green",
         fontSize:'30px'
         },
         checkbox:false,
         content:"内容"   
       }
     },
     methods:{
       addCount(msg,e){
         console.log(msg)
         //e 是自带的事件对象
         console.log(e)  
         this.count++
       },
       clickDiv(){
         console.log("click Div")
       },
       clickP(e){
         //阻止点击事件向父容器传递
         e.stopPropagation()   
         console.log("click P")
       },
       addList(){
         //UI可以更新
         //this.list.push("5")
         //合并数组（不赋值UI不会更新）
        this.list=this.list.concat(['6'])
         console.log(this.list.concat(['6']))
       },
       getRess(){
         return this.list.length>0?"Yes":"No"
       },
       changeData(){
         this.msg="你好"
       },
       //通过DOM修改 html  没有特殊需求一般不用
       getElement(){
         this.$refs.container.innerHTML="更新"
     
       }
       
     },
   
     computed:{
       getRes(){
         return this.list.length>0?"Yes":"No"
       }
     },
   
     watch:{
       //监听数据变化 函数名要与变量名一样
       msg(newValue,oldValue){
         console.log(newValue,oldValue)
       }
     }
     
     
   }
   
   </script>
   
   <style>
   .active{
     font-size:22px
   }
   
   .text-danger{
     color:red;
   }
   </style>
   