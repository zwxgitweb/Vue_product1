<template>
  <div id="carousel" :style="{height: carouselH}" ref='abc'>
      hello
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselH: document.documentElement.clientHeight - 100 + 'px'
    }
  }
}
</script>

<style>
#carousel{
  width: 100%;
  overflow-y: scroll;
}
</style>
