<template>
  <div>
    <el-tabs type="border-card" class="fu-el-tabs">
      <el-tab-pane label="游泳池">
        <div class="aboxs">
          <el-card class="box-card" v-for="card in funroom">
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
        </div></el-tab-pane
      >
      <el-tab-pane label="健身房">
        <div class="aboxs">
          <el-card class="box-card" v-for="card in funroom">
            <div slot="header" class="clearfix">
              <span>健身房</span>
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
      <el-tab-pane label="个人书房"
        ><div class="aboxs">
          <el-card class="box-card" v-for="card in funroom">
            <div slot="header" class="clearfix">
              <span>个人书房</span>
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
@import url("./../../../public/scss/fun/funroom.css");
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
    this.$http.get("json/fun/funroom.json").then(function (res) {
      _this.funroom = res.data;
    });
    return {
      //用户基本信息返回
      userinfo: [],
      funroom: [],
      activeNames: ["1"],
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