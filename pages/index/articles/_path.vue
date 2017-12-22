<template>
  <div class="path">
    <h1>这里是 {{doc}}页面</h1>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
export default {
  async asyncData({ params }) {
    let { data } = await axios.get("/api/article/" + params.path);
    return {
      doc: data
    };
  },
  mounted() {
    // console.log(this.path);
  }
};
</script>
