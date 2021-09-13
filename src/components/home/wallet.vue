<template>
  <div>
    <div class="frbox">
      <div class="headimg">
        <img
          v-bind:src="userinfo[0].headimg"
          alt=""
          width="240px"
          height="240px"
        />
      </div>
      <div class="monney">
        ${{ userinfo[0].monney }} <br />
        <p>钱包余额</p>
      </div>
      <div class="givemonney">
        <div class="chash">
          <el-input placeholder="请输入金额">
            <template slot="prepend">金额</template>
          </el-input>
          <el-button>充值</el-button>
        </div>
        <div class="moneykey">
          <el-input placeholder="请输入激活码">
            <template slot="prepend">激活码</template>
          </el-input>
          <el-button>激活码充值</el-button>
        </div>

        <!-- <el-button>充值码充值</el-button> -->
      </div>
    </div>
    <div class="costlist">256</div>
  </div>
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
    return {
      userinfo: [],
      input1: "",
      input2: "",
      input3: "",
    };
  },
};
</script>