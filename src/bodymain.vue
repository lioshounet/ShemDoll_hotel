<template>
  <div>
    <myinfo v-if="xi == 'myinfo'"></myinfo>
  </div>
</template>
<script>
import myinfo from "./components/home/myinfo";
import Msg from "./msg.js";
export default {
  components: { myinfo },
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