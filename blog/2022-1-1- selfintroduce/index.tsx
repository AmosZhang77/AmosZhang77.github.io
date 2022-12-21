import React, { ReactElement } from 'react';
import mp4src from './gn05.mp4'

const VideoMD: React.FC<any> = () => {
    const scale = 2
    return (
        <div>
            <video muted autoPlay src={mp4src} controls width={`${1080 / scale}px`} height={`${1920 / scale}px`}/>
        </div>
    );
};

export default VideoMD;


