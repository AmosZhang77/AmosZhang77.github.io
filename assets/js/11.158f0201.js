(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(e,t,u){},393:function(e,t,u){"use strict";u(341)},403:function(e,t,u){"use strict";u.r(t);var n={name:"amosSing",props:{},data:function(){return{videoTime:0,currentPlayTime:0,playedPercent:0}},mounted:function(){},beforeDestroy:function(){},methods:{play:function(){this.$refs.video1.play()},pause:function(){this.$refs.video1.pause()},muted:function(){var e=this.$refs.video1;e.muted=!e.muted},volumePlus:function(){var e=this.$refs.video1;e.volume+.1<1?e.volume+=.1:e.volume=1},volumeMinus:function(){var e=this.$refs.video1;try{e.volume-=.1}catch(t){e.volume=0}},timeupdate:function(){var e=this.$refs.video1;this.videoTime=e.duration,console.log(e),this.currentPlayTime=Math.round(1e3*e.currentTime),this.playedPercent=Math.round(e.currentTime/e.duration*100)},requestFullScreen:function(){var e=this.$refs.video1;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}}},i=(u(393),u(26)),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[u("div",{staticClass:"videoBox"},[u("audio",{ref:"video1",attrs:{src:"/audio/20220605_2_wait_a_minute_amos.mp3",controls:"",width:"640px",height:"363px"}})]),e._v(" "),u("div",{staticClass:"btnBar"},[u("button",{on:{click:e.play}},[e._v("播放")]),e._v(" "),u("button",{on:{click:e.pause}},[e._v("暂停")]),e._v(" "),u("button",{on:{click:e.muted}},[e._v("静音")]),e._v(" "),u("button",{on:{click:e.volumePlus}},[e._v("声音+")]),e._v(" "),u("button",{on:{click:e.volumeMinus}},[e._v("声音-")])])])}),[],!1,null,"4bd9f42a",null);t.default=o.exports}}]);