<template>
  <div>
    <el-tabs type="border-card" class="fo-el-tabs">
      <el-tab-pane label="下午茶">
        <div class="aboxs">
          <el-card class="box-card" v-for="card in tealist">
            <div slot="header" class="clearfix">
              <span>{{ card.name }}</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看详情
              </el-button>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="textbox">
              <div
                v-for="(item, o, i) in card"
                :key="o"
                v-if="i != 4"
                class="text item"
              >
                {{ cardmarklist[i] + ":" + item }}
              </div>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="夜宵">
        <div class="nboxs">
          <el-card class="box-card" v-for="card in nightfoodlist">
            <div slot="header" class="clearfix">
              <span>{{ card.name }}</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看详情
              </el-button>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="textbox">
              <div
                v-for="(item, o, i) in card"
                :key="o"
                v-if="i != 4"
                class="text item"
              >
                {{ cardmarklist[i] + ":" + item }}
              </div>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="三明治">
        <div class="sboxs">
          <el-card class="box-card" v-for="card in sandlist">
            <div slot="header" class="clearfix">
              <span>三明治</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看详情
              </el-button>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="textbox">
              <div
                v-for="(item, o, i) in card"
                :key="o"
                v-if="i != 4"
                class="text item"
              >
                {{ cardmarklist[i] + ":" + item }}
              </div>
            </div>
          </el-card>
        </div></el-tab-pane
      >
      <el-tab-pane label="酒精饮料">
        <div class="wboxs">
          <el-card class="box-card" v-for="card in drinklist">
            <div slot="header" class="clearfix">
              <span>酒精饮料</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >查看详情
              </el-button>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="textbox">
              <div
                v-for="(item, o, i) in card"
                :key="o"
                v-if="i != 4"
                class="text item"
              >
                {{ cardmarklist[i] + ":" + item }}
              </div>
            </div>
          </el-card>
        </div></el-tab-pane
      >
    </el-tabs>
  </div>
</template>
<style>
@import url("./../../../public/scss/fun/food.css");
</style>
<script>
const axios = require("axios");

export default {
  name: "ShemHotelWallet",
  components: {},

  data() {
    var _this = this;
    this.$http.get("json/home/userinfo.json").then(function (res) {
      _this.userinfo = res.data;
    });
    // this.$http.get("json/fun/food/tea.json").then(function (res) {
    //   _this.tealist = res.data;
    // });

    axios({
      method: "GET",
      url: "http://localhost:3000/food_tea",
    }).then((response) => {
      _this.tealist = response.data;
    });

    // this.$http.get("json/fun/food/nightfood.json").then(function (res) {
    //   _this.nightfoodlist = res.data;
    // });

    axios({
      method: "GET",
      url: "http://localhost:3000/food_nightfood",
    }).then((response) => {
      _this.nightfoodlist = response.data;
      // console.log(response.data.storroom);
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/food_sand",
    }).then((response) => {
      _this.sandlist = response.data;
      // console.log(response.data.storroom);
    });

    axios({
      method: "GET",
      url: "http://localhost:3000/food_drink",
    }).then((response) => {
      _this.drinklist = response.data;
      // console.log(response.data.storroom);
    });

    return {
      //用户基本信息返回
      userinfo: [],
      activeNames: ["1"],
      tealist: [],
      nightfoodlist: [],
      sandlist: [],
      drinklist: [],
      cardmarklist: ["食品名字", "编号", "价格", "描述"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>