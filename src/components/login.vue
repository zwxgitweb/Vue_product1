<template>
    <div id="login">
        <header-component></header-component>
        <loginView></loginView>
    </div>
</template>

<script>
// 引入组件
import loginView from '@/components/data/loginCom'

export default {
    name: 'login',
    components: {
        loginView
    }
}
</script>

<style>

</style>
