import React, { ReactElement } from "react";
import mp4src1 from "/video/unicom.mp4";

const VideoMD: React.FC<any> = () => {
  const scale = 1;
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
    </div>
  );
};

export default VideoMD;
