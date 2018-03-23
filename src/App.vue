<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	  name: 'app'
}
</script>

<style>
@import url(../static/css/bootstrap.min.css);
@import url(../static/css/animate.css);
*{
	list-style: none;
	padding: 0;
	margin: 0;
	user-select: none;
	box-sizing: border-box;
}
div *{
	margin: 0;
}
html, body{
	width: 100%;
	height: 100%;
}
#app{
	width: 100%;
	height: 100%;
	overflow-x: hidden;
}
</style>
