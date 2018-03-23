<!-- login components -->
<template>
    <div id="loginCom">
        <form class="userInfo text-center">
            <div class="form-group">
                <label for="username">username</label>
                <input type="text" id="username" v-model='username'>
            </div>
            <div class="form-group">
                <label for="password">password</label>
                <input type="password" id="password" v-model='password'>
            </div>
            <div class="form-group">
                <button @click='submit' class="btn btn-sm btn-info">submit</button>
                <button @click='reset' class="btn btn-sm btn-danger">reset</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'login',
    data() {
        return {
            username: null,
            password: null
        }
    },
    methods: {
        submit() {
            // axios.get('http://localhost:8080/login')
            this.$axios.get('http://localhost:8080/login')
            .then(res => {
                res.data.map(item => {
                    if (item.username == this.username) {
                        if (item.password == this.password) {
                            this.setLocalStorage('userInfo', JSON.stringify(item));
                            this.$router.push('/index');
                        } else {
                            alert('please set up your password');
                            this.password = '';
                        }
                    }
                })
            })
        },
        setLocalStorage(key, val) {
            localStorage.setItem(key, val);
        },
        reset() {
            this.username = '';
            this.password = '';
        }
    }
}
</script>

<style>
*{
    list-style: none;
}
.userInfo{
    width: 100%;
}
.form-group{
    height: 35px;
    line-height: 35px;
    /* text-align: center; */
    margin: 10px;
}
input{
    border-radius: 3px;
    border: 0;
    border: 1px solid #ccc;
}
</style>
