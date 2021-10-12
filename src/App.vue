<template>
  <div>
    <div v-if="show == 'yes'">
      <el-card class="box-card">
        <el-input
          placeholder="请输入账号"
          v-model="RealMoney"
          onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
          type="number"
        >
          <template slot="prepend">账号</template>
        </el-input>
        <el-input
          placeholder="请输入账号"
          v-model="RealMoney"
          onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
          type="number"
        >
          <template slot="prepend">密码</template>
        </el-input>
        <div @click="login()">
          <router-link to="/views/theapp">
            <el-button @click="AddMoney()">登录</el-button>
          </router-link>
        </div>
      </el-card>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: "yes",
    };
  },

  methods: {
    login() {
      this.show = "none";
    },
  },
};
</script>