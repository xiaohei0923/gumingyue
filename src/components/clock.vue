<template>
  <div id="clock">
    <div class="month">
      <span
        v-for="(item, i) in month"
        :class="{ active: ((360 / 12) * i - moR) % 360 === 0 }"
        :key="item"
        :style="{ transform: 'rotateZ(' + ((360 / 12) * i - moR) + 'deg)' }"
        >{{ item }}</span
      >
    </div>
    <div class="day">
      <span
        v-for="(item, i) in day"
        :class="{ active: ((360 / 7) * i - dR) % 360 === 0 }"
        :key="item"
        :style="{ transform: 'rotateZ(' + ((360 / 7) * i - dR) + 'deg)' }"
        >{{ item }}</span
      >
    </div>
    <div class="hour">
      <span
        v-for="(item, i) in hour"
        :class="{ active: ((360 / 24) * i - hR) % 360 === 0 }"
        :key="item"
        :style="{ transform: 'rotateZ(' + ((360 / 24) * i - hR) + 'deg)' }"
        >{{ item }}</span
      >
    </div>
    <div class="minute">
      <span
        v-for="(item, i) in minute"
        :class="{ active: ((360 / 60) * i - miR) % 360 === 0 }"
        :key="item"
        :style="{ transform: 'rotateZ(' + ((360 / 60) * i - miR) + 'deg)' }"
        >{{ item }}</span
      >
    </div>
    <div class="second">
      <span
        v-for="(item, i) in second"
        :class="{ active: ((360 / 60) * i - sR) % 360 === 0 }"
        :key="item"
        :style="{ transform: 'rotateZ(' + ((360 / 60) * i - sR) + 'deg)' }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      month: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      day: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hour: [],
      minute: [],
      second: [],

      timeId: null,
      moR: 0,
      dR: 0,
      hR: 0,
      miR: 0,
      sR: 0,
    };
  },
  created() {
    for (var i = 0; i < 24; i++) {
      this.hour.push(this.toChinesNum(i) + "时");
    }
    for (var i = 0; i < 60; i++) {
      this.minute.push(this.toChinesNum(i) + "分");
      this.second.push(this.toChinesNum(i) + "秒");
    }
  },
  mounted() {
    this.getDate();
  },
  beforeDestroy() {
    window.clearInterval(this.timeId);
  },
  methods: {
    toChinesNum(num) {
      var changeNum = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
      ];
      var unit = ["", "十"];
      num = parseInt(num);
      var getWan = (temp) => {
        if (temp === 0) {
          return "零";
        }
        var strArr = temp.toString().split("").reverse();
        var newNum = "";
        for (var i = 0; i < strArr.length; i++) {
          newNum =
            (i == 0 && strArr[i] == 0
              ? ""
              : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0
              ? ""
              : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
            newNum;
        }
        return newNum;
      };
      return getWan(num).replace("一十", "十");
    },
    getDate() {
      var beginDate = new Date();
      this.moR = (360 / 12) * beginDate.getMonth();
      this.dR = (360 / 7) * (beginDate.getDay() - 1);
      this.hR = (360 / 24) * beginDate.getHours();
      this.miR = (360 / 60) * beginDate.getMinutes();
      this.sR = (360 / 60) * beginDate.getSeconds();
      this.timeId = setInterval(() => {
        var date = new Date();
        this.moR = (360 / 12) * date.getMonth();
        this.dR = (360 / 7) * (date.getDay() - 1);
        this.hR = (360 / 24) * date.getHours();
        this.miR = (360 / 60) * date.getMinutes();
        // 如果加一秒满圈 +360度数
        this.sR =
          (360 / 60) * date.getSeconds() +
          Math.floor((this.sR + 360 / 60) / 360) * 360;
      }, 1000);
    },
  },
};
</script>

<style>
#clock {
  position: relative;
  height: 50vh;
  /* background: #efefef; */
  font-size: 3vw;
  line-height: 0.6vw;
}

#clock > div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0 0 0.3vw 0.3vw #8c5a2e66;
  background-color: #522421;
}

#clock > div > span {
  position: absolute;
  top: calc(50% - 0.3vw);
  right: 0;
  width: 80px;
  text-align: right;
  transition: all 1000ms;
  color: #8c5a2e;
  padding-right: 0.3vw;
  box-sizing: border-box;
}

#clock > div > span.active {
  color: gold;
}

.month {
  width: 40vw;
  height: 40vw;
  z-index: 9;
}

.month > span {
  transform-origin: calc(80px - 20vw) 0.3vw;
}

.day {
  width: 80vw;
  height: 80vw;
  z-index: 8;
}

.day > span {
  transform-origin: calc(80px - 40vw) 0.3vw;
}

.hour {
  width: 120vw;
  height: 120vw;
  z-index: 7;
}

.hour > span {
  transform-origin: calc(80px - 60vw) 0.3vw;
}

.minute {
  width: 160vw;
  height: 160vw;
  z-index:6;
}

.minute > span {
  transform-origin: calc(80px - 80vw) 0.3vw;
}

.second {
  width: 200vw;
  height: 200vw;
  z-index: 5;
}

.second > span {
  transform-origin: calc(80px - 100vw) 0.3vw;
}
</style>