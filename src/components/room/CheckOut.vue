<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" class="ch-el-tabs">
      <el-tab-pane label="已经预订" name="first">
        <div class="albookboxs">
          <el-card class="box-card" v-for="card in booklist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >更改
              </el-button>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="textbox">
              <div class="bookroominfo">
                <!-- <div
                  v-for="(item, o, i) in card"
                  :key="o"
                  v-if="i < 5 && i != 0"
                  class="text item"
                >
                  {{ alroommarklist[i] + ":" + item }}
                </div> -->
                <div>{{ "酒店名称" + card.hotlename }}</div>
                <div>{{ "酒店编号" + card.roomnmb }}</div>
                <div>{{ "酒店价格" + card.price }}</div>
                <div>{{ "酒店地址" + card.where }}</div>
              </div>

              <div class="booktime">
                <div>{{ "开始时间" + ":" + card.start }}</div>
                <div>{{ "结束时间" + ":" + card.end }}</div>
                <!-- <br /> -->
              </div>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
      <el-tab-pane label="正在使用" name="second">
        <div class="useing">
          <el-card class="box-card" v-for="card in uselist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
              <div style="float: right">
                <el-button
                  style="padding: 3px 0; font-size: 18px"
                  type="text"
                  class="appeal"
                  @click="AppealSteps = true"
                  color="red"
                >
                  申诉
                </el-button>
                <el-dialog title="申诉提交" :visible.sync="AppealSteps">
                  <!-- 弹出内容 -->
                  <p>申请原因</p>
                  <el-select v-model="reason" placeholder="请选择">
                    <el-option
                      v-for="item in reasonchoose"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      width="500"
                    >
                    </el-option>
                  </el-select>
                  <p>具体理由</p>
                  <el-input placeholder="请输入内容" v-model="whyapp" clearable>
                  </el-input>
                  <p>申诉房间号</p>
                  <el-input
                    placeholder="请输入内容"
                    v-model="card.hotlename"
                    :disabled="true"
                    clearable
                  >
                  </el-input>
                  <p>地址</p>
                  <el-input
                    placeholder="请输入内容"
                    v-model="card.where"
                    :disabled="true"
                    clearable
                  >
                  </el-input>

                  <el-button>提交</el-button>
                </el-dialog>
                <el-button
                  style="padding: 3px 0; font-size: 18px; margin-left: 10px"
                  type="text"
                  >退房
                </el-button>
              </div>
            </div>
            <img v-bind:src="card.link" alt="" width="200PX" />
            <!-- <img src="/img/userinfo/indoors-4234071_1920.png" alt="" /> -->
            <div class="ch-textbox">
              <div class="one">
                <div v-for="m in cardmarklist">
                  {{ m + ":" }}
                </div>
              </div>
              <div class="two">
                <div
                  v-for="(item, o, i) in card"
                  :key="o"
                  v-if="i != 5 && i != 0"
                >
                  {{ item }}
                </div>
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
        <div class="overboxs">
          <el-card class="box-card" v-for="card in overlist">
            <div slot="header" class="clearfix">
              <span>{{ card.hotlename }}</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text"
                >评分
              </el-button> -->
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
            <div class="givepoint">
              <span class="demonstration">给我打分</span>
              <el-rate v-model="value2" :colors="colors"> </el-rate>
            </div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
@import url("./../../../public/scss/room/CheckOut.css");
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
    // this.$http.get("json/room/myroom/AlBook.json").then(function (res) {
    //   _this.booklist = res.data;
    // });

    //-----------------------自动触发get请求------------------------------------
    axios({
      method: "GET",
      url: "http://localhost:3000/bookroom",
    }).then((response) => {
      _this.booklist = response.data;
      // console.log(response.data.storroom);
    });

    // this.$http.get("json/room/myroom/uselist.json").then(function (res) {
    //   _this.uselist = res.data;
    // });

    axios({
      method: "GET",
      url: "http://localhost:3000/uselist",
    }).then((response) => {
      console.log("233");
      _this.uselist = response.data;
      // console.log(response.data.storroom);
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
      alroommarklist: ["已定房间信息", "酒店名称", "房号", "价格", "地址"],
      cardmarklist: ["酒店名称", "房号", "价格", "地址"],
      acardmarklist: ["酒店名称", "订单号", "价格", "申诉具体原因"],
      //-----------------------------------------------------------------------
      //这里的value1没有写完，应该加入list，每个卡片的值保持独立
      value1: null,
      value2: null,
      Stepsactive: 0,
      AppealSteps: false,
      whyapp: "",
      colors: ["#99A9BF", "rgb(0, 207, 232)", "rgb(104, 213, 196)"],
      //这里是不同等级的颜色
      // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      //-----------------------------下拉框的数据-------------------------------------------
      reasonchoose: [
        {
          value: "选项1",
          label: "预订取消",
        },
        {
          value: "选项2",
          label: "使用纠纷",
        },
        {
          value: "选项3",
          label: "其他原因",
        },
      ],
      reason: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>