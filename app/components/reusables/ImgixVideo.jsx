import {useEffect, useRef} from 'react';
import Hls from 'hls.js';

export function ImgixVideo({videoPath, fallbackImage, className = ''}) {
  const videoRef = useRef(null);
  const hlsUrl = `https://qiblanco-video.imgix.video/${videoPath}?fm=hls`;
  const mp4Url = `https://qiblanco-video.imgix.video/${videoPath}?fm=mp4`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari has native HLS support
      video.src = hlsUrl;
    } else {
      // Fallback to mp4
      video.src = mp4Url;
    }
  }, [hlsUrl, mp4Url]);

  return (
    <div className={className}>
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          poster={fallbackImage}
        />
    </div>
  );
}
