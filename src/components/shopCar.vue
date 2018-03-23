<template>
    <div id="shopCar">
        <header-component>
            <h3>
                <span class="col-xs-1" @click='back'>
                    <i class="glyphicon glyphicon-arrow-left"></i>
                </span>
                <span class="col-xs-10">welcome to shop car</span>
            </h3>
        </header-component>
        <div id='shop'>
            <div class="all_check">
                <label for="allCheck">all checked</label>
                <input type="checkbox" id="allCheck" @change='isCheckAll' v-model='allCheckFlag'>
            </div>
            <div class="show" v-for='(item, index) in shops'>
                <div class="check">
                    <input type="checkbox" @change='isCheck(index)' class='checkItem' v-model="item.isChecked">
                </div>
                <dl>
                    <dt class="col-xs-3 col-sm-3 col-md-3">
                        <img :src='item.src'>
                    </dt>
                    <dd class="col-xs-5 col-sm-6 col-md-7">
                        <h5>{{item.title}}</h5>
                        <p>{{item.content}}</p>
                        <p>price：<b class="price" ref='price'>{{item.price}}</b></p>
                    </dd>
                    <div class="col-xs-4 col-sm-3 col-md-2">
                        <i class="glyphicon glyphicon-remove" @click='times(index)'></i>
                        <input disabled type="text" class="shop_num" value='1' ref='num'>
                        <i class="glyphicon glyphicon-ok" @click='add(index)'></i>
                    </div>
                </dl>
            </div>
        </div>
        <div class="calculate">
            <p class="col-xs-10">总价为：<span class="sum" ref='sum'>￥{{sum}}</span></p>
            <div class="num col-xs-2">count：<span class="count" ref='count'>{{count}}</span></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'shopCar',
    data() {
        return {
            shops: null,
            allCheckFlag: false,
            count: 0,
            sum: 0
        }
    },
    methods: {
        back() {
            this.$router.push('/index');
        },
        // 获取商品信息数据
        getShop() {
            axios.get('http://localhost:8080/shop')
            .then(res => {
                this.shops = res.data;
            })
        },
        // 是否改变所有商品选中事件
        isCheckAll() {
            this.shops.map(file => {
                file.isChecked = this.allCheckFlag;
            })
            this.figure();
        },
        isCheck() {
            let arr = [];
            this.shops.map(file => {
                if (file.isChecked) {
                    arr.push(file);
                }
            })
            if (arr.length == this.shops.length) {
                this.allCheckFlag = true;
            } else {
                this.allCheckFlag = false;
            }
            this.figure();
        },
        times(index) {
            if (this.$refs.num[index].value > 1) this.$refs.num[index].value--;
            this.figure();
        },
        add(index) {
            if (this.$refs.num[index].value < 10) this.$refs.num[index].value++;
            this.figure();
        },
        figure() {
            this.count = 0;
            this.sum = 0;
            this.shops.map((file, index) => {
                if (file.isChecked) {
                    this.count += this.$refs.num[index].value * 1;
                    this.sum += this.$refs.price[index].innerHTML * this.$refs.num[index].value;
                }
            })
        }
    },
    mounted() {
        this.getShop();
    }
}
</script>

<style scoped>
#shopCar{
    width: 100%;
    height: 100%;
}
.shop_num{
    width: 40px;
    text-align: center;
    background: #fff;
    border: 1px solid #ccc;
}
.price{
    color: orange;
}
i{
    cursor: pointer;
    padding: 0 5px;
    font-weight: 400;
}
h3{
    background: #ff4500;
}
#shop{
    width: 100%;
    overflow-y: scroll;
    max-height: 547px;
    padding:0 12px;
}
.all_check{
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0 10px;
}
#shop .show{
    margin-bottom: 20px;
    height: 110px;
    border: 1px solid #ccc;
    padding: 10px;
}
.check{
    width: 100%;
}
dl{
    width: 100%;
    height: 50px;
}
dl dt{
    height: 100%;
}
dl img{
    height: 100%;
}
dl dd{
    padding-left: 10px;
}
.calculate{
    width: 100%;
    height: 45px;
    background: #ff4500;
    line-height: 45px;
    color: #fff;
    font-size: 16px;
}
.num{
    border-left: 1px solid #999;
}
.sum, .count{
    font-size: 18px;
    color: #fff;
}
</style>
