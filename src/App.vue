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
              <el-menu-item index="1-1">个人信息</el-menu-item>
              <el-menu-item index="1-2">钱包</el-menu-item>
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
        <el-header style="text-align: right; font-size: 12px"> </el-header>

        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
@import url("//unpkg.com/element-ui@2.15.5/lib/theme-chalk/index.css");
@import url("./../public/scss/aside.css");

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

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
