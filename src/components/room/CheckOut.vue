<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="已经预订" name="first">
        <div class="boxs">
          <el-card class="box-card" v-for="card in roomlist">
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
          <el-card class="box-card" v-for="card in roomlist">
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
      <el-tab-pane label="申述房间" name="third">
        <el-collapse v-model="activeNames" accordion>
          <el-collapse-item title="预订取消" name="1">
            <div class="boxs">
              <el-card class="box-card" v-for="card in roomlist">
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
                    {{ cardmarklist[i] + ":" + item }}
                  </div>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="使用纠纷" name="2">
            <div class="boxs">
              <el-card class="box-card" v-for="card in roomlist">
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
                    {{ cardmarklist[i] + ":" + item }}
                  </div>
                </div>
              </el-card>
            </div>
          </el-collapse-item>
          <el-collapse-item title="其他原因" name="4">
            <div>
              用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
            </div>
            <div>
              结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
            </div>
          </el-collapse-item>
        </el-collapse></el-tab-pane
      >
      <el-tab-pane label="结束订单" name="fourth">
        <div class="boxs">
          <el-card class="box-card" v-for="card in roomlist">
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
    this.$http.get("json/room/stor.json").then(function (res) {
      _this.roomlist = res.data;
    });
    return {
      //用户基本信息返回
      userinfo: [],
      activeName: "second",
      roomlist: [],
      cardmarklist: ["酒店名称", "房号", "价格", "地址"],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>