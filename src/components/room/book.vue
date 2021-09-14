<template>
  <div>
    <div class="boxs">
      <el-card class="box-card" v-for="card in roomlist">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮
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
  </div>
</template>
<style>
@import url("./../../../public/scss/room/book.css");
</style>
<script>
export default {
  name: "ShemHotelMyinfo",
  data() {
    var _this = this;
    this.$http.get("json/room/stor.json").then(function (res) {
      _this.roomlist = res.data;
    });
    return {
      roomlist: [],
      cardmarklist: ["酒店名称", "房号", "价格", "地址"],
    };
  },

  mounted() {},

  methods: {},
};
</script>