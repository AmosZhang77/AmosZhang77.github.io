import React, { ReactElement, useRef } from "react";

const VideoMD: React.FC<any> = () => {
  const scale = 8;
  const audioRef = useRef<any>();


  /**播放*/
  const play = () => {
    audioRef.current.play();
  };

  /**暂停*/
  const pause = () => {
    audioRef.current.pause();
  };

  /**是否静音*/
  const muted = () => {
    audioRef.current.muted = !audioRef.current.muted;
  };

  /**声音+*/
  /** 0~1的值，超过范围会出错。这里是小数计算会有偏差，0.9+0.1可能会大于1，所以
     方法1：需要预先判断加0.1<1才赋值
     */
  const volumePlus = () => {
    if (audioRef.current.volume + 0.1 < 1) {
      audioRef.current.volume += 0.1;
    } else {
      audioRef.current.volume = 1;
    }
  };

  /**声音- */
  const volumeMinus = () => {
    /* 0~1的值,方法2：try catch,catch后面e一定要写，否则会报错，做try里面的，出错的话做catch里面的，也可以用finish*/
    try {
      audioRef.current.volume -= 0.1;
    } catch (e) {
      audioRef.current.volume = 0;
    }
  };

  return (
    <div>
      <div className="videoBox">
        <audio
          ref={audioRef}
          src="/audio/20220605_2_wait_a_minute_amos.mp3"
          controls
        >
          {/*<video ref="video1" src="/video/laugh.mp4" controls @timeupdate="timeupdate" width='480px' height="270px"*/}
        </audio>
      </div>
      <div className="btnBar">
        <button onClick={play}>播放</button>
        <button onClick={pause}>暂停</button>
        <button onClick={muted}>静音</button>
        <button onClick={volumePlus}>声音+</button>
        <button onClick={volumeMinus}>声音-</button>
      </div>
    </div>
  );
};

export default VideoMD;
