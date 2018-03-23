<template>
    <div id="musicDetail">
        <back-component></back-component>
        <div class="musicInfo text-center">
            <h3>
                <span>{{title}}</span>
                <audio ref='player'>
                    <source :src="src">
                </audio>
            </h3>
            <div class="songs">
                {{songs}}
            </div>
        </div>
        <div class="artical text-center">
            <audio controls ref='player'>
                <source :src="src">
            </audio>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: null,
            playFlag: true,
            src: null,
            songs: null
        }
    },
    methods: {
        getMusics() {
            let musicPath = JSON.parse(this.$route.query.musicInfo)
            this.title = musicPath.title;
            this.src = musicPath.src;
            this.$refs.player.play();
            this.songs = musicPath.content;
        }
    },
    mounted() {
        this.getMusics();
    }
}
</script>

<style scoped>
#musicDetail{
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: column;
}
.musicInfo{
    width: 60%;
    margin-left: 20%;
    flex: 1;
    display: inline-flex;
    flex-direction: column;
    background: rgba(0,0,0,.8);
    color: #ccc;
    padding: 10px 0;
}
p{
    width: 100%;
    height: 35px;
    line-height: 35px;
    padding-left: 20px;
    font-size: 22px;
}
.songs{
    width: 80%;
    margin-left: 10%;
    flex: 1;
    color: #eee;
    overflow-y: scroll;
}
.artical{
    width: 80%;
    margin-left: 10%;
    height: 120px;
    line-height: 120px;
}
</style>
