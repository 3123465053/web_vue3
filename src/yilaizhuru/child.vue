
<template>
    <h2>child</h2>
    <p>{{ this.msg }}</p>
    <p>{{ this.globle }}</p>
</template>
<script>

export default{
    inject:['msg','globle']
}

</script>