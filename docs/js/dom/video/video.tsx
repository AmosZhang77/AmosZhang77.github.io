import React, {useRef, useState} from "react";

const VideoMD: React.FC<any> = () => {
  const scale = 2;
  const videoRef = useRef<any>();
  const [videoTime, setVideoTime] = useState<number>(0);
  const [currentPlayTime, setCurrentPlayTime] = useState<number>(0);
  const [playedPercent, setPlayedPercent] = useState<number>(0);

  /**播放*/
  const play = () => {
    videoRef.current.play();
  };

  /**暂停*/
  const pause = () => {
    videoRef.current.pause();
  };

  /**是否静音*/
  const muted = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  /**声音+ */
  /** 0~1的值，超过范围会出错。这里是小数计算会有偏差，0.9+0.1可能会大于1，所以
     方法1：需要预先判断加0.1<1才赋值
     */
  const volumePlus = () => {
    console.log("vvv",  videoRef.current.volume );

    if (videoRef.current.volume + 0.1 < 1) {
      videoRef.current.volume += 0.1;
    } else {
      videoRef.current.volume = 1;
    }
  };

  /**声音- */
  const volumeMinus = () => {
    console.log("vvv",  videoRef.current.volume );
    /* 0~1的值,方法2：try catch,catch后面e一定要写，否则会报错，做try里面的，出错的话做catch里面的，也可以用finish*/
    try {
      videoRef.current.volume -= 0.1;
    } catch (e) {
      videoRef.current.volume = 0;
    }
  };

  /**全屏- */
  const requestFullScreen = () => {
    // 屏幕最大化操作不能裸奔运行，必须放在一个用户的操作上(事件)
    let video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen(); //w3c
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); //兼容chrome
    } else if (video.webkitRequestFullScreen) {
      video.webkitRequestFullScreen(); //兼容火狐
    }
  };

  //timeupdate视频播放时间位置变化事件，播放的时候会不断地激活
  const timeupdate = () => {
    if (videoRef.current) {
      let video = videoRef.current;
      setVideoTime(video.duration); // video.duration视频总长，单位为秒
      // video.currentTime视频当前放到的时间位置，单位为秒
      setCurrentPlayTime(Math.round(video.currentTime * 1000));
       setPlayedPercent( Math.round(
      (video.currentTime / video.duration) * 100
    ));

    }
  };

  return (
    <div>
      <div className="videoBox">
        <video
          // muted
          autoPlay
          ref={videoRef}
          src="/video/brothers.mp4"
          controls
          width={`${960 / scale}px`}
          height={`${544 / scale}px`}
          onTimeUpdate={timeupdate}
        />
      </div>
      <div className="btnBar">
        <button onClick={play}>播放</button>
        <button onClick={pause}>暂停</button>
        <button onClick={muted}>静音</button>
        <button onClick={volumePlus}>声音+111</button>
        <button onClick={volumeMinus}>声音-</button>
        <button onClick={requestFullScreen}>最大化</button>
      </div>
      <div>
        <div>视频时长：{videoTime}秒</div>
        <div>当前播放时间：{currentPlayTime}毫秒</div>
        <div>当前播放百分比：{playedPercent}%</div>
      </div>
    </div>
  );
};

export default VideoMD;
