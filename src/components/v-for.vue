<template>
    <p>模版语法</p>
   <p>{{ msg }}</p>
   <!-- v-bind 标签属性动态绑定值 -->
   <!-- 加载html文本 v-bind="classId" 绑定类名  :简写 -->
    <p v-bind:id="classId" :class="classId"> 类名绑定</p>
   <p v-html="rawHtml"></p>  
   <button :disabled="isEnable">点击</button>
   <h3>条件渲染</h3>
   <div v-if="isShow">v-if控制</div>
   <div v-show="isShow"> v-show控制</div>
   <div v-if="type=='A'">A</div>
   <div v-else-if="type=='B'">B</div>
   <div v-else>C</div>
   <h2>列表渲染</h2>
   <!-- key刷新所需 -->
   <div v-for="(item,index) in res" :key="item.id">
     <p>{{ item.age }}</p>
     <p>{{ item.name }}</p>
     <p>{{ index }}</p>
   </div>
   <!-- 遍历对象时有三个参数 -->
   <p v-for="(item,key,index) in person">{{ item }} -{{ key }} -{{ index }}</p>
   </template>
   
   
   
   <script >
   export default{
     data(){
       return{
         msg:"大家好",
         rawHtml:"<a href=https://www.baidu.com>百度<a>",
           classId:"className",
           isEnable:true,
           isShow:true,
           type:"A",
           res:[
             {
               id:123,
               age:20,
               name:'张三'
             },
             {
               id:124,
               age:21,
               name:'李四'
             }
           ],
           person:{
             age:23,
             name:"王五"
           }
       }
     }
   }
   
   </script>