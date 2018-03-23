<template>
    <div id='main'>
        <header-component class="container">
            <h3 class="RoyalBlue">
                <p class="col-xs-1 col-md-1 col-sm-1 my" @click='login'>
                    <i class="glyphicon glyphicon-user"></i>
                    <ul v-show='loginFlag' class="login-set animated" transition="bounce">
                        <li @click='setIn'>sign up</li>
                        <li @click='setOut'>sign out</li>
                    </ul>
                </p>
                <span class="col-xs-7 title col-md-9 col-sm-9">
                    welcome <span class="user" v-show='userFlag'>{{username}}</span> to my page
                </span>
                <span class=" col-md-2 col-sm-2 shop_music_icon">
                    <router-link to='/music'><i to='/music' class="glyphicon glyphicon-music"></i></router-link>
                    <router-link to='/shopCar'><i class="glyphicon glyphicon-shopping-cart"></i></router-link>
                </span>
            </h3>
        </header-component>
        <router-view></router-view>
        <footer class="footer text-center">
            <router-link class="col-xs-3" to='/index/carousel'>carousel</router-link>
            <router-link class="col-xs-3" to='/index/carousel'>carousel</router-link>
            <router-link class="col-xs-3" to='/index/carousel'>carousel</router-link>
            <router-link class="col-xs-3" to='/index/carousel'>carousel</router-link>
        </footer>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      username: null,
      userFlag: false,
      loginFlag: false
    };
  },
  methods: {
    getLocalStorage(key) {
      return localStorage.getItem(key);
    },
    getUserInfo() {
      if (localStorage.length !== 0) {
        let userInfo = JSON.parse(this.getLocalStorage("userInfo"));
        if (!userInfo) {
          alert("please login user");
          this.$router.push("/login");
        } else {
          this.userFlag = true;
          this.username = userInfo.username;
        }
      } else {
        alert("please login user");
        this.$router.push("/login");
      }
    },
    login() {
      this.loginFlag = !this.loginFlag;
    },
    setOut() {
      let user = confirm("Are you sure sign out your account?");
      if (user) {
        localStorage.setItem("userInfo", {});
        this.$router.push("/login");
      }
    },
    setIn() {
      alert("You are logged in");
    },
    music() {},
    shoppingCart() {}
  },
  mounted() {
    this.getUserInfo();
  },
  transitions: {
    bounce: {
      enterClass: "bounceInDown",
      leaveClass: "zoomOutRight"
    }
  }
};
</script>

<style>
#main {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 50px;
}
.user {
  font-size: 32px;
  color: #fff;
}
.glyphicon {
  vertical-align: middle;
  cursor: pointer;
}
.my {
  position: relative;
}
.login-set {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 3px 5px;
  position: absolute;
  left: 2px;
  top: 52px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}
.login-set li {
  width: 60px;
  line-height: 30px;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop_music_icon{
  position: relative;
}
i {
  font-size: 14px;
}
a {
  color: #fff;
}
.footer {
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #ccc;
}
.footer a{
    color: #23527c;
}
</style>
