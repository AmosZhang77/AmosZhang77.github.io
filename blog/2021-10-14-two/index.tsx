import React, { ReactElement } from "react";
import mp4src1 from "/video/brothers.mp4";
import mp4src2 from "/video/brothers2.mp4";

const VideoMD: React.FC<any> = () => {
  const scale = 2;
  return (
    <div>
      <video
        muted
        autoPlay
        src={mp4src1}
        controls
        width={`${960 / scale}px`}
        height={`${544 / scale}px`}
      />
      <video
        muted
        autoPlay
        src={mp4src2}
        controls
        width={`${960 / scale}px`}
        height={`${544 / scale}px`}
      />
    </div>
  );
};

export default VideoMD;
