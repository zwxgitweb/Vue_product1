<template>
    <div id="headerCom" class="text-center RoyalBlue">
        <slot>
            <h3>亲，登录后有惊喜哦~~~</h3>
        </slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#headerCom h3{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin-top: 0;
}
.RoyalBlue{
    background: #f22;
    color: #fff;
}
</style>
