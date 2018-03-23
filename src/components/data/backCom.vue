<template>
  <div id='back'>
    <span @click='back'>
        <i class="glyphicon glyphicon-arrow-left"></i>
    </span>
  </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.back(-1);
        }
    }
}
</script>

<style>
#back{
    width: 90%;
    margin-left: 5%;
}
</style>
