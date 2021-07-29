import Vue from 'vue'
import App from './App'
var kugouPlayer = requirePlugin("kugouPlayer")
kugouPlayer.player.initPlayer({
 noClimax: false, //默认是播放歌曲的高潮片段，传true则播放前60秒
 playMode: 'cycle', //cycle列表循环（默认）  loop 顺序播放  once单曲播放  random随机播放
 positionTop: '80rpx', //挂件距离顶部的距离，默认80rpx
 positionRight: '24rpx', //挂件距离侧边的距离，默认24rpx
});

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$palyer=kugouPlayer.player //全局播放器

const app = new Vue(App)
app.$mount()
