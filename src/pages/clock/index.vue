<template>
  <div class="clock">
    <div class="main"><clock /></div>
  </div>
</template>

<script>
import clock from "@/components/clock";
export default {
  components: { clock },
};
</script>

<style lang="less" scoped>
.clock {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #efefef;
  position: relative;
  .main{
    width: 100vw;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-52%,-50%);
  }
}
</style>