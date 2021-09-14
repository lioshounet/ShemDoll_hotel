<template>
  <div></div>
</template>
<style>
@import url("./../../../public/scss/home/wallet.css");
</style>
<script>
export default {
  name: "ShemHotelWallet",
  components: {},

  data() {
    var _this = this;
    this.$http.get("json/home/userinfo.json").then(function (res) {
      _this.userinfo = res.data;
    });
    this.$http.get("json/home/costlist.json").then(function (ress) {
      _this.costData = ress.data;
    });
    return {
      //用户基本信息返回
      userinfo: [],
      costData: [],
      input1: "",
      input2: "",
    };
  },
};
</script>