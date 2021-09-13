<template>
  <div>
    <myinfo v-if="xi == 'myinfo'"></myinfo>
    <wallet v-if="xi == 'wallet'"></wallet>
  </div>
</template>
<script>
import myinfo from "./components/home/myinfo";
import wallet from "./components/home/wallet";
import Msg from "./msg.js";
export default {
  components: { myinfo, wallet },
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