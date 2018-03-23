<template>
    <div id="music">
        <musicTabCom></musicTabCom>
    </div>
</template>

<script>
import musicTabCom from './data/musicTabCom.vue'
export default {
    name: 'musics',
    components: {
        musicTabCom
    }
}
</script>

<style>
#music{
    width: 100%;
    height: 100%;
}
</style>
