<template>
  <div>
    <div class="bgimg">
      <img v-bind:src="userinfo[0].bgimg" alt="" width="1643px" />
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
        <el-button @click="updata()">提交</el-button>
      </el-row>
    </div>
    <!-- <div class="bu_div">提交按钮</div> -->
  </div>
</template>
<style>
@import url("./../../../public/scss/home/myinfo.css");
</style>
<script>
const axios = require("axios");
export default {
  name: "ShemHotelMyinfo",
  data() {
    var _this = this;
    // this.$http.get("json/home/userinfo.json").then(function (res) {
    //   _this.userinfo = res.data;
    // });
    axios({
      method: "GET",
      url: "http://localhost:3000/userinfo",
    }).then((response) => {
      _this.userinfo = response.data;
      // console.log(response.data.storroom);
    });
    return {
      userinfo: [],
      input1: "",
      input2: "",
      input3: "",
    };
  },

  mounted() {},

  methods: {
    // ppp() {
    //   console.log(this.userinfo[0].name);
    // },
    updata() {
      //--------------
      console.log();
      //防止重复请求的校验   还没做
      this.$confirm("是否提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // console.log("成功");
          //增加json内容----加的功能
          axios({
            method: "PUT",
            url: "http://localhost:3000/userinfo/1",
            data: {
              age: this.userinfo[0].age,
              bgimg: this.userinfo[0].bgimg,
              headimg: this.userinfo[0].headimg,
              monney: this.userinfo[0].monney,
              userID: this.userinfo[0].userID,
              //--------------------------------
              name: this.userinfo[0].name,
              email: this.userinfo[0].email,
              tel: this.userinfo[0].tel,
            },
          }).then((response) => {
            console.log(response.data);
          });
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          console.log("提交取消");
          this.$message({
            type: "info",
            message: "取消提交",
          });
        });
      //-----------
    },
  },
};
</script>