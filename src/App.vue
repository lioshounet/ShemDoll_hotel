<template>
  <div class="login_box">
    <div v-if="show == 'yes'">
      <el-card class="box-card">
        <p class="logintext">登录</p>
        <el-input
          placeholder="请输入账号"
          v-model="conmt"
          onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
          type="number"
        >
          <template slot="prepend">账号</template>
        </el-input>
        <el-input placeholder="请输入账号" v-model="passwd" type="password">
          <template slot="prepend">密码</template>
        </el-input>
        <div>
          <!-- <router-link to="/views/theapp"> -->
          <el-button @click="login()">登录</el-button>
          <!-- </router-link> -->
        </div>
      </el-card>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
@import url("./../public/scss/app.css");
</style>

<script>
export default {
  data() {
    return {
      conmt: "",
      passwd: "",
      show: "yes",
    };
  },

  methods: {
    login() {
      if (this.conmt != "" && this.passwd != "") {
        this.show = "none";
        this.$router.push({ path: "/views/theapp" });
      } else {
        this.$message.error("账号或者密码为空");
      }
    },
  },
};
</script>