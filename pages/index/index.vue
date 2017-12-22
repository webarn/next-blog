<template>
  <section class="article">
    <div class="content_list  hvr-curl-top-left" v-for="(item,key) in listData.data" :key="key">
      <h3>{{item.title}}</h3>
      <p class="des">{{item.content}}</p>
      <p class="else">
        <span><Icon type="ios-star-outline"></Icon> {{item.star}} </span>
        <span><Icon type="ios-time-outline"></Icon> {{item.updata_time}} </span>
      </p>
    </div>
    <div class="content_list">
      <h3>Borderless card</h3>
      <p class="des">{{listData}}</p>
      <p class="else">
        <span><Icon type="ios-star-outline"></Icon> 999 </span>
        <span><Icon type="ios-time-outline"></Icon> 2017-12-01 </span>
      </p>
    </div>
  </section>
</template>

<script>
import axios from "~/plugins/axios";
export default {
  async asyncData() {
    let [one] = await Promise.all([axios.get("/api/articles")]);
    return {
      listData: one.data
    };
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Webarn·Blog"
    };
  },
  mounted() {
    // console.log(this.pageRes, this.countRes);
  }
};
</script>

<style lang="scss" scoped>
.content_list {
  margin-top: 18px;
  padding: 0 10px;
  h3 {
    padding: 6px 0;
    border-bottom: 1px dotted #d4d1d1;
  }
  .des {
    text-align: left;
    border-bottom: 1px dotted #d4d1d1;
    padding: 8px 0;
    line-height: 1.8em;
    text-indent: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .else {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.7;
    span {
      padding: 8px;
    }
  }
}

// hover
.hvr-curl-top-left {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  box-shadow: 0px 0px 5px 0px #a5b3c1;
}
.hvr-curl-top-left:before {
  pointer-events: none;
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  top: 0;
  left: 0;
  background: white;
  /* IE9 */
  background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);
  filter: progid:DXImageTransform.Microsoft.gradient(
      GradientType=0,
      startColorstr="#ffffff",
      endColorstr="#000000"
    );
  /*For IE7-8-9*/
  z-index: 1000;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: width, height;
  transition-property: width, height;
}
.hvr-curl-top-left:hover:before,
.hvr-curl-top-left:focus:before,
.hvr-curl-top-left:active:before {
  width: 25px;
  height: 25px;
}
</style>

