<template>
  <div>
    <div class="bgimg">背景图和头像</div>
    <div class="info">
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">昵称</template>
      </el-input>
      <br />
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="prepend">电话</template>
      </el-input>
      <br />
      <el-input placeholder="请输入内容" v-model="input3">
        <template slot="prepend">邮箱</template>
      </el-input>
    </div>
    <div class="bu_div">提交按钮</div>
  </div>
</template>
<style>
@import url("./../../../public/scss/home/myinfo.css");
</style>
<script>
export default {
  name: "ShemHotelMyinfo",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>