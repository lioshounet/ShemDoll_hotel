<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>
              主页
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="myinfo()">
                个人信息
              </el-menu-item>
              <el-menu-item index="1-2" @click="wallet()">钱包</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              房间操作
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">订房</el-menu-item>
              <el-menu-item index="2-2">退房</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              其他服务
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">功能房预约</el-menu-item>
              <el-menu-item index="3-2">订餐到房</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <p class="userid">ID:{{ userinfo[0].ID }}</p>
          <p class="username">{{ userinfo[0].name }}</p>
        </el-header>

        <el-main>
          <div>
            <bodymain></bodymain>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
@import url("//unpkg.com/element-ui@2.15.5/lib/theme-chalk/index.css");
@import url("./../public/scss/aside.css");
@import url("./../public/scss/el-header.css");

.el-container {
  height: 1500px;
  border: 1px solid #eee;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  color: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import bodymain from "./bodymain";
import Msg from "./msg.js";
export default {
  components: { bodymain },
  // name: "sheet",
  data() {
    var _this = this;
    this.$http.get("json/home/userinfo.json").then(function (res) {
      _this.userinfo = res.data;
    });
    return {
      userinfo: [],
    };
  },
  methods: {
    myinfo: function () {
      Msg.$emit("showwhat", "myinfo");
    },
    wallet: function () {
      Msg.$emit("showwhat", "wallet");
    },
  },
};
</script>
