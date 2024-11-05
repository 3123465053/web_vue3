<template>
    <h2>ComponentsB</h2>
     <p>{{ onEvent("传递数据") }}</p>
    </template>
    <script>
    export default{
        props:{
            title:String,
            onEvent:Function
        }
    }
    </script>