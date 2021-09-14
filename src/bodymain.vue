<template>
  <div>
    <myinfo v-if="xi == 'myinfo'"></myinfo>
    <wallet v-if="xi == 'wallet'"></wallet>
    <book v-if="xi == 'book'"></book>
  </div>
</template>
<script>
import myinfo from "./components/home/myinfo";
import wallet from "./components/home/wallet";
import book from "./components/room/book";
import Msg from "./msg.js";
export default {
  components: { myinfo, wallet, book },
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