import React, {ReactElement, useEffect, useRef, useState} from "react";

const VideoMD: React.FC<any> = () => {
  const scale = 8;
  const audioRef = useRef<any>();
  const [canAutoPlay, setCanAutoPlay] = useState<boolean>(false);
  let clickEvent;

  // 音乐资源加载完毕
  const [loading, setLoading] = useState<boolean>(false);


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
  const clickCanAutoPlay = () => {
    console.log("用户已经和网页有过交互，js可以操作播放了");
    setCanAutoPlay(true);
  };
  const hasLoaded = () => {
    console.log("加载音乐完毕了");

    setLoading(true);
  };
  useEffect(() => {
    clickEvent = document.body.addEventListener("click", clickCanAutoPlay);
    /*setTimeout(()=>{
    startBtnRef.current.click();

  },6000)*/
    return () => {
      clickEvent?.removeEventListener("click", clickCanAutoPlay);
    };
  }, []);
  useEffect(() => {
    console.log("canAutoPlay", canAutoPlay);
    if (canAutoPlay) {
      setTimeout(() => {
        // startBtnRef.current.click();
        play();
      }, 2000);
    }
  }, [canAutoPlay]);
  useEffect(() => {
    console.log("canAutoPlay", canAutoPlay);
    if (canAutoPlay && loading) {
      setTimeout(() => {
        // startBtnRef.current.click();
        play();
      }, 2000);
    }
  }, [canAutoPlay, loading]);
  return (
    <div>
      <div className="videoBox">
        <audio
          ref={audioRef}
          src="/audio/20220605_2_wait_a_minute_amos.mp3"
          controls
          autoPlay="autoplay"
          preload="auto"
          loop="loop"
          onCanPlay={hasLoaded}
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
