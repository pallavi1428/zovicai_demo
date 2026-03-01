import { useState, useRef, useEffect } from 'react';

export function useVideoHover() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return {
    videoRef,
    isHovered,
    isVideoLoaded,
    isImageLoaded,
    handlers: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onVideoLoad: () => setIsVideoLoaded(true),
      onImageLoad: () => setIsImageLoaded(true),
    },
  };
}