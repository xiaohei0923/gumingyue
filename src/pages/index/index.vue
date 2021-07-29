<template>
  <div class="home">
    <div class="hello">
      <div class="clock">
        <clock />
      </div>
      <div class="name">
        <span
          >Hi,
          <open-data type="userNickName"></open-data>
        </span>
      </div>
      <div class="avatar">
        <div class="img">
          <!-- <img
            src="https://img1.baidu.com/it/u=2256533945,1034229872&fm=26&fmt=auto&gp=0.jpg"
            alt=""
          /> -->
          <open-data type="userAvatarUrl"></open-data>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabs-main">
        <div class="tabs-item" v-for="(v, i) in tabs" :key="i">
          <van-icon :name="v.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clock from "@/components/clock";
export default {
  components: { clock },
  data() {
    return {
      userInfo: null,
      tabs: [
        { name: "", icon: "wap-home" },
        { name: "", icon: "like" },
        { name: "", icon: "star" },
        { name: "", icon: "more" },
      ],
    };
  },

  methods: {},

  created() {},
};
</script>

<style lang="less" scoped>
@keyframes ripple {
  0% {
    opacity: 0.35;
    width: 100px;
    height: 100px;
  }
  50% {
    opacity: 0.2;
    width: 120px;
    height: 120px;
  }
  100% {
    opacity: 0.35;
    width: 100px;
    height: 100px;
  }
}
.home {
  .hello {
    padding-top: 60px;
    background: #0096ff;
    position: relative;
    overflow: hidden;
    .clock {
      position: absolute;
      left: 0;
      top: 0;
      transform: translate(0, -20%);
    }
    .name {
      padding: 30rpx;
      color: #fff;
      font-size: 20px;
      position: absolute;
    }
    .avatar {
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &::before {
        content: "";
        // width: 100px;
        // height: 100px;
        border-radius: 50%;
        background-color: #fff6;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9;
        animation: ripple infinite 2s ease;
      }
      .img {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        overflow: hidden;
        z-index: 99;
      }
    }
  }
  .tabs {
    height: 50px;
    position: relative;
    .tabs-main {
      position: absolute;
      height: 80px;
      bottom: 0;
      width: 100vw;
      display: flex;
      .tabs-item{
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16vw;
        color: #1685a9;
        van-icon{
          position: relative;
          &::before{
            position: absolute;
            content: '';
            width: 10vw;
            height: 1vw;
            border-radius: 50%;
            background-color: #ddd;
            bottom: -1vw;
            left: 50%;
            transform: translate(-50%);
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>
