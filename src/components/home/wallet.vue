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
          <el-input placeholder="请输入金额" v-model="input1">
            <template slot="prepend">金额</template>
          </el-input>
          <el-button>充值</el-button>
        </div>
        <div class="moneykey">
          <el-input placeholder="请输入激活码" v-model="input2">
            <template slot="prepend">激活码</template>
          </el-input>
          <el-button>激活码充值</el-button>
        </div>

        <!-- <el-button>充值码充值</el-button> -->
      </div>
    </div>
    <div class="costlist">
      <el-table :data="costData" stripe>
        <el-table-column prop="date" label="日期" width="200">
        </el-table-column>
        <el-table-column prop="RevenueExpenditure" label="支出/收入">
        </el-table-column>
        <el-table-column prop="howmach" label="金额"> </el-table-column>
        <el-table-column prop="where" label="资金流动"> </el-table-column>
        <el-table-column prop="nmb" label="订单号码"> </el-table-column>
      </el-table>
    </div>
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