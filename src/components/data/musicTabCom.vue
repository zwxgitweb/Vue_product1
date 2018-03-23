<template>
    <div id="nav">
        <back-component></back-component>
        <nav class="nav">
            <span @click='musicNav("inland")' class="col-xs-3 text-center">内地</span>
            <span @click='musicNav("Gossip")' class="col-xs-3 text-center">港台</span>
            <span @click='musicNav("occiden")' class="col-xs-3 text-center">欧美</span>
            <span @click='musicNav("KKC")' class="col-xs-3 text-center">日韩</span>
        </nav>
        <div class="show">
            <ul class="list">
                <li v-for='item in musics'>
                    <span class="col-xs-3 col-md-2 col-sm-2">
                        <router-link class='img' :to='{path: "/musicDetail",query:{musicInfo: JSON.stringify(item)}}'>
                            <img :src="item.img">
                        </router-link>
                    </span>
                    <div class="col-xs-9 col-md-10 col-sm-10" :class='{active: nowPlay == item.id}'>
                        <h5 @click='isPlay(item.id)'>{{item.title}}</h5>
                        <!-- <audio ref='player' :src="item.src"></audio> -->
                    </div>
                    <div class="songs text-center" v-if='nowPlay==item.id'>
                        <audio autoplay :src="item.src" controls></audio>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            musics: null,
            nowPlay: 0
        }
    },
    methods: {
        // 请求各地区音乐数据
        musicNav(val) {
            this.nowPlay = 0;
            axios.get('http://localhost:8080/music', {
                params: {
                    musicPath: val
                }
            })
            .then(res => {
                this.musics = res.data;
            })
        },
        isPlay(id) {
            this.musics.map((file,index) => {
                if (file.id == id) {
                    this.nowPlay = file.id;
                }
            })
        }
    },
    mounted() {
        this.musicNav('inland');
    }
}
</script>

<style scoped>
#nav{
    width: 100%;
    height: 100%;
}
.nav{
    width: 100%;
    height: 55px;
    line-height: 55px;
}
.nav span{
    color: #4e4e4e;
    font-size: 16px;
    cursor: pointer;
}
.show{
    width: 80%;
    margin-left: 10%;
    margin-top: 30px;
    position: relative;
    padding-bottom: 50px;
}
.list{
    width: 100%;
}
.list li{
    border: 1px solid #ccc;
    height: 45px;
    width: 100%;
    margin: 10px 0;
    padding-left: 10px;
}
.list .img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #000;
    display: inline-block;
    margin-top: 5px;
}
.list img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.list h5{
    line-height: 45px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.songs{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
.active{
    background: rgba(0,0,0,.6);
    color: #ccc;
}
</style>
