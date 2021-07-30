<template>
  <div class="more">
    <van-popup
      :show="show"
      position="right"
      custom-style="width: 100vw; height: 100vh;"
      @close="() => (show = false)"
    >
      <div
        class="show-popup"
        style="width: 100vw; height: 100vh;overflow-y:auto"
        @click="show = false"
      >
        <img :src="url" mode="widthFix" style="width: 100vw" />
      </div>
    </van-popup>
    <div class="main">
      <div
        class="item"
        v-for="(v, i) in list"
        :key="i"
        @click="
          () => {
            (url = v.url), (show = true);
          }
        "
      >
        <span>{{ v.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dtm from "../../../static/images/dtm.jpg";
import jkm from "../../../static/images/jkm.jpg";
import qp from "../../../static/images/qp.jpg";
export default {
  data() {
    return {
      show: false,
      url: '',
      list: [
        { name: "老婆", url: qp },
        { name: "乘车码-地铁", url: dtm },
        { name: "健康码", url: jkm },
      ],
    };
  },
  onShow(){
    console.log(this.$mp.query.url);
      this.show=false
    if(this.$mp.query.url){
      this.show=true
      this.url=this.$mp.query.url
    }
  },
};
</script>

<style lang="less" scoped>
.more {
  background-color: #efefef;
  .main {
    min-height: 100vh;
    box-sizing: border-box;
    padding-top: 10vh;
    padding: 10vh 10px 10vh;
    .item {
      background-color: #fff;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 2px;
    }
  }
}
</style>