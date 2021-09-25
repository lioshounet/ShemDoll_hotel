<template>
  <div>
    <div class="boxs">
      <el-card class="box-card" v-for="card in roomlist">
        <div slot="header" class="clearfix">
          <span>{{ card.hotlename }}</span>
          <el-button
            style="float: right; padding: 3px 0"
            type="text"
            @click="dialogTableVisible = true"
            >订购
          </el-button>
          <el-dialog title="订单提交" :visible.sync="dialogTableVisible">
            <!-- 弹出内容 -->
            <el-form :model="form">
              <el-image :src="url" :fit="fit" v-bind:src="card.link"></el-image>
              <div class="price">单价{{ card.price }}/晚</div>
              <div class="allprice">
                共计{{ Number(card.price) * Number(daynub) }}
              </div>
              <div class="block">
                <span class="demonstration">选择时间</span>
                <br />
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  @change="hh()"
                >
                </el-date-picker>
              </div>
              <el-button type="text" @click="upbook()">提交</el-button>
            </el-form>
          </el-dialog>
        </div>
        <img v-bind:src="card.link" alt="" class="showpic" />
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
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
  </div>
</template>
<style>
@import url("./../../../public/scss/room/book.css");
</style>
<script>
var daynub = 0;
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

      //-----------------------------------------
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      value1: "",
      daynub: 0,
    };
  },

  mounted() {},

  methods: {
    logg() {},
    hh() {
      this.daynub =
        Number((this.value1[1] - this.value1[0]) / 1000 / 3600 / 24) + 1;
      // alert(this.daynub);
    },
    upbook() {
      //防止重复请求的校验   还没做
      this.$confirm("是否提交？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("成功");
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          console.log("取消");
          this.$message({
            type: "info",
            message: "取消提交",
          });
        });
    },
  },
};
</script>