<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ch-el-tabs">
      <el-tab-pane label="已经预订" name="first">
        <div class="boxs">
          <el-card class="box-card" v-for="card in booklist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
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
      <el-tab-pane label="正在使用" name="second">
        <div class="boxs">
          <el-card class="box-card" v-for="card in uselist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
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
      <el-tab-pane label="申述房间" name="third" class="appealroom">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="预订取消" name="1">
            <div class="bookcboxs">
              <el-card class="box-card" v-for="card in bookclist">
                <div slot="header" class="clearfix">
                  <span>{{ card.hotlename }}</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >查看详情
                  </el-button>
                </div>
                <img v-bind:src="card.link" alt="" width="200PX" />
                <div class="textbox">
                  <div
                    v-for="(item, o, i) in card"
                    :key="o"
                    v-if="i != 4"
                    class="text item"
                  >
                    {{ acardmarklist[i] + ":" + item }}
                  </div>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="使用纠纷" name="2">
            <div class="nouseboxs">
              <el-card class="box-card" v-for="card in nouselist">
                <div slot="header" class="clearfix">
                  <span>{{ card.hotlename }}</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >查看详情
                  </el-button>
                </div>
                <img v-bind:src="card.link" alt="" width="200PX" />
                <div class="textbox">
                  <div
                    v-for="(item, o, i) in card"
                    :key="o"
                    v-if="i != 4"
                    class="text item"
                  >
                    {{ acardmarklist[i] + ":" + item }}
                  </div>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="其他原因" name="4">
            <div class="otherboxs">
              <el-card class="box-card" v-for="card in otherlist">
                <div slot="header" class="clearfix">
                  <span>{{ card.hotlename }}</span>
                  <el-button style="float: right; padding: 3px 0" type="text"
                    >查看详情
                  </el-button>
                </div>
                <img v-bind:src="card.link" alt="" width="200PX" />
                <div class="textbox">
                  <div
                    v-for="(item, o, i) in card"
                    :key="o"
                    v-if="i != 4"
                    class="text item"
                  >
                    {{ acardmarklist[i] + ":" + item }}
                  </div>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
        </el-collapse></el-tab-pane
      >
      <el-tab-pane label="结束订单" name="fourth">
        <div class="boxs">
          <el-card class="box-card" v-for="card in overlist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
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
@import url("./../../../public/scss/room/CheckOut.css");
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
    this.$http.get("json/room/myroom/AlBook.json").then(function (res) {
      _this.booklist = res.data;
    });
    this.$http.get("json/room/myroom/uselist.json").then(function (res) {
      _this.uselist = res.data;
    });
    this.$http.get("json/room/myroom/appeal/bookc.json").then(function (res) {
      _this.bookclist = res.data;
    });
    this.$http.get("json/room/myroom/appeal/nouse.json").then(function (res) {
      _this.nouselist = res.data;
    });
    this.$http.get("json/room/myroom/appeal/other.json").then(function (res) {
      _this.otherlist = res.data;
    });
    this.$http.get("json/room/myroom/overlist.json").then(function (res) {
      _this.overlist = res.data;
    });
    return {
      //用户基本信息返回
      userinfo: [],
      booklist: [],
      uselist: [],
      appeallist: [],
      activeName: "second",
      cardmarklist: ["酒店名称", "房号", "价格", "地址"],
      acardmarklist: ["酒店名称", "订单号", "价格", "申诉具体原因"],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>