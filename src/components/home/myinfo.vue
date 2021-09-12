<template>
  <div>
    <div class="bgimg">
      <img v-bind:src="userinfo[0].bgimg" alt="" />
      <div class="headimg">
        <img
          v-bind:src="userinfo[0].headimg"
          alt=""
          width="278px"
          height="278px"
        />
      </div>
    </div>

    <div class="info">
      <el-input placeholder="请输入内容" v-model="userinfo[0].name">
        <template slot="prepend">昵称</template>
      </el-input>
      <br />
      <el-input placeholder="请输入内容" v-model="userinfo[0].tel">
        <template slot="prepend">电话</template>
      </el-input>
      <br />
      <el-input placeholder="请输入内容" v-model="userinfo[0].email">
        <template slot="prepend">邮箱</template>
      </el-input>
      <el-row>
        <el-button>提交</el-button>
      </el-row>
    </div>
    <!-- <div class="bu_div">提交按钮</div> -->
  </div>
</template>
<style>
@import url("./../../../public/scss/home/myinfo.css");
</style>
<script>
export default {
  name: "ShemHotelMyinfo",
  data() {
    var _this = this;
    this.$http.get("json/home/userinfo.json").then(function (res) {
      _this.userinfo = res.data;
    });
    return {
      userinfo: [],
      input1: "",
      input2: "",
      input3: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>