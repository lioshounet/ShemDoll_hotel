<template>
  <div>
    <myinfo v-if="xi == 'myinfo'"></myinfo>
    <wallet v-if="xi == 'wallet'"></wallet>
    <book v-if="xi == 'book'"></book>
    <CheckOut v-if="xi == 'CheckOut'"></CheckOut>
    <funroom v-if="xi == 'funroom'"></funroom>
    <food v-if="xi == 'food'"></food>
  </div>
</template>
<script>
import myinfo from "./components/home/myinfo";
import wallet from "./components/home/wallet";
import book from "./components/room/book";
import CheckOut from "./components/room/CheckOut";
import funroom from "./components/fun/funroom";
import food from "./components/fun/food";
import Msg from "./msg.js";
export default {
  components: { myinfo, wallet, book, CheckOut, funroom, food },
  data() {
    return {
      xi: "",
    };
  },
  mounted() {
    var _this = this;
    Msg.$on("showwhat", function (m) {
      _this.xi = m;
    });
  },
};
</script>