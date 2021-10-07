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
          <el-input
            placeholder="请输入金额"
            v-model="RealMoney"
            onKeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"
            type="number"
          >
            <template slot="prepend">金额</template>
          </el-input>
          <el-button @click="AddMoney()">充值</el-button>
          <el-dialog title="充值付款" :visible.sync="CostCodeDialog">
            <!-- 弹出内容 -->
            <div>
              <p>请扫码进行支付</p>
              <el-image v-bind:src="'./../img/1632891657768.jpg'"></el-image>
            </div>
          </el-dialog>
        </div>
        <div class="moneykey">
          <el-input placeholder="请输入激活码" v-model="keynmb">
            <template slot="prepend">激活码</template>
          </el-input>
          <el-button @click="KeyPut()">激活码充值</el-button>
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
const axios = require("axios");
export default {
  // name: "ShemHotelWallet",
  components: {},

  data() {
    var _this = this;
    this.$http.get("json/home/userinfo.json").then(function (res) {
      _this.userinfo = res.data;
    });

    // this.$http.get("json/home/costlist.json").then(function (ress) {
    //   _this.costData = ress.data;
    // });
    axios({
      method: "GET",
      url: "http://localhost:3000/userinfo",
    }).then((response) => {
      _this.userinfo = response.data;
      // console.log(response.data.storroom);
    });
    axios({
      method: "GET",
      url: "http://localhost:3000/costdata",
    }).then((response) => {
      _this.costData = response.data;
      // console.log(response.data.storroom);
    });

    //-------------拦截器------------------------
    axios.interceptors.request.use(
      (config) => {
        if (config.method == "get") {
          // console.log(config.key);
          // console.log("拦截器启动成功,方法非post");
          console.log(config);
          return config;
        } else {
          console.log("检测到post或者put方法");
          if (config.key == "KOI333") {
            console.log("KEY正确");
            return config;
          } else {
            alert("非法post/put");
            console.log("非法post/put");
            // return null;
          }
        }
      },
      (err) => {
        console.log("拦截器启动失败");
      }
    );

    return {
      //用户基本信息返回
      userinfo: [],
      costData: [],
      CostCodeDialog: false,
      RealMoney: "",
      keynmb: "",
    };
  },
  methods: {
    AddMoney() {
      var paytime = new Date();
      this.CostCodeDialog = true;

      //-------------充值记录------------------
      axios({
        method: "POST",
        url: "http://localhost:3000/costdata",
        key: "KOI333",
        data: {
          date:
            String(paytime.getFullYear()) +
            "-" +
            String(paytime.getMonth()) +
            "-" +
            String(paytime.getDate()) +
            " " +
            String(paytime.getHours()) +
            ":" +
            String(paytime.getMinutes()) +
            ":" +
            String(paytime.getSeconds()),
          RevenueExpenditure: "收入",
          howmach: this.RealMoney,
          where: "直接充值",
          nmb: "F458963215655658",
        },
      }).then((response) => {
        _this.costData = response.data;
      });

      //-------------------加钱------------------
      axios({
        method: "PUT",
        url: "http://localhost:3000/userinfo/1",
        key: "KOI333",
        data: {
          age: this.userinfo[0].age,
          bgimg: this.userinfo[0].bgimg,
          headimg: this.userinfo[0].headimg,
          monney: String(
            Number(this.userinfo[0].monney) + Number(this.RealMoney)
          ),
          userID: this.userinfo[0].userID,
          name: this.userinfo[0].name,
          email: this.userinfo[0].email,
          tel: this.userinfo[0].tel,
          // id: 1,
        },
      }).then((response) => {
        // _this.costData = response.data;
        this.$message("充值成功，添加金额：" + String(Number(this.RealMoney)));
      });
    },

    //-------------------key充值----------------------------
    KeyPut() {
      var keytime = new Date();
      this.CostCodeDialog = true;
      axios({
        method: "POST",
        url: "http://localhost:3000/costdata",
        key: "KOI333",
        data: {
          date:
            String(keytime.getFullYear()) +
            "-" +
            String(keytime.getMonth()) +
            "-" +
            String(keytime.getDate()) +
            " " +
            String(keytime.getHours()) +
            ":" +
            String(keytime.getMinutes()) +
            ":" +
            String(keytime.getSeconds()),
          RevenueExpenditure: "收入",
          howmach: Math.round(Math.random() * 10),
          where: "KEY",
          nmb: this.keynmb,
        },
      }).then((response) => {
        // _this.costData = response.data;
      });

      axios({
        method: "PUT",
        url: "http://localhost:3000/userinfo/1",
        key: "KOI333",
        data: {
          age: this.userinfo[0].age,
          bgimg: this.userinfo[0].bgimg,
          headimg: this.userinfo[0].headimg,
          monney: String(
            Number(this.userinfo[0].monney) +
              Number(Math.round(Math.random() * 10))
          ),
          userID: this.userinfo[0].userID,
          name: this.userinfo[0].name,
          email: this.userinfo[0].email,
          tel: this.userinfo[0].tel,
          // id: 1,
        },
      }).then((response) => {
        this.$message(
          "充值成功,金额：" + String(Math.round(Math.random() * 10))
        );
        // this.$message("这是一条消息提示");
        // _this.costData = response.data;
      });
    },
  },
};
</script>